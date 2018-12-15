import { Route, Switch } from 'react-router-dom'
import UserManagementScreen from './components/UserManagementScreen'
import React from 'react'
import UserStatus from "./components/UserStatus";
import CreateHub from "./components/CreateHub";
import HubActivityTracker from "./components/HubActivityTracker";
import NoMatch from "./components/NoMatch";

export const Routes = () => {
  return <Switch>
    <Route path='/user_mgmt' component={UserManagementScreen}/>
    <Route path='/user_status' component={UserStatus}/>
    <Route path='/create_hub' component={CreateHub}/>
    <Route path='/hub_activity_tracker' component={HubActivityTracker}/>
    <Route component={NoMatch} />
  </Switch>;
};
