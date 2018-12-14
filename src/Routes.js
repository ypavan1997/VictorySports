import { Route, Switch } from 'react-router-dom'
import UserManagementScreen from './components/UserManagementScreen'
import React from 'react'

export const Routes = () => {
  return <Switch>
    <Route path='/user_mgmt' component={UserManagementScreen}/>
    <Route path='/hub_mgmt' component={() => <p>Hub mgmgt</p>}/>
  </Switch>;
};
