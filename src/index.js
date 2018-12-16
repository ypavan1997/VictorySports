import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import {createBrowserHistory} from 'history';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { routerMiddleware, connectRouter } from 'connected-react-router'
import { ConnectedRouter } from 'connected-react-router'
import { logger } from 'redux-logger';
import modalReducer from "./redux/reducers/modalReducer";
import userReducer from "./redux/reducers/userReducer";
import {addUser, addUserRole} from "./redux/actions/UserActions";
import activityTrackerReducer from "./redux/reducers/activityTrackerReducer";
import userManagementReducer from "./redux/reducers/userManagementReducer";
import openActivityReducer from "./redux/reducers/openActivityReducer";
import 'semantic-ui-css/semantic.min.css'
import 'react-notifications/lib/notifications.css';
import './index.css';


const history = createBrowserHistory({
  basename: '/victory',
});
const reactRouterMiddleware = routerMiddleware(history);

const middleWares = [
  thunk,
  reactRouterMiddleware,
  logger
];

const rootReducer = combineReducers({
  modal: modalReducer,
  user: userReducer,
  activityTracker: activityTrackerReducer,
  userManagement : userManagementReducer,
  openActivity : openActivityReducer
});
export const store = createStore(
  connectRouter(history)(rootReducer),
  applyMiddleware(...middleWares)
);

fetch('/api/current_user')
    .then(response => response.json())
    .then(data => {
        if(data) {
            store.dispatch(addUser(data));
            console.log(data);
            fetch("http://ohack.herokuapp.com/v1/victoryfoundation/users/logon?username="+data.emails[0].value,
                {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    }
                })
                .then(res => res.json())
                .then(
                    (result) => {
                        store.dispatch(addUserRole(result));
                    },
                    // Note: it's important to handle errors here
                    // instead of a catch() block so that we don't swallow
                    // exceptions from actual bugs in components.
                    (error) => {

                    }
                )
        }
    });

ReactDOM.render((
  <Provider store={store} key='provider'>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
