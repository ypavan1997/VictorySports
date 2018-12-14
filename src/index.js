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
import 'semantic-ui-css/semantic.min.css'
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
});
export const store = createStore(
  connectRouter(history)(rootReducer),
  applyMiddleware(...middleWares)
);

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
