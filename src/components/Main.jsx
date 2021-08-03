import React from 'react';
import { View, Text } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';

import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import LoginPage from '../pages/Login';

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
        <Redirect to='/' />
      </Switch>
    </View>
  );
};

export default Main;
