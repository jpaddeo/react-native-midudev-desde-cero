import React from 'react';
import { View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';

import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import LoginPage from '../pages/Login';
import SignOutPage from '../pages/SignOut';

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <Switch>
        <Route path='/' exact>
          <RepositoryList />
        </Route>
        <Route path='/signin' exact>
          <LoginPage />
        </Route>
        <Route path='/signout' exact>
          <SignOutPage />
        </Route>
        <Redirect to='/' />
      </Switch>
    </View>
  );
};

export default Main;
