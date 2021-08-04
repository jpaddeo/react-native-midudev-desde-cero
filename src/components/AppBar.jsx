import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';

import AppBarTab from './AppBarTab';
import theme from '../theme';
import useAuthorized from '../hooks/useAuthorized';

const AppBar = () => {
  const { isAuthorized } = useAuthorized();

  return (
    <View style={styles.container}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.scroll}
      >
        <AppBarTab to='/'>Repositories</AppBarTab>
        {isAuthorized ? (
          <AppBarTab to='/signout'>Sign Out</AppBarTab>
        ) : (
          <AppBarTab to='/signin'>Sign In</AppBarTab>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: theme.appBar.primary,
    paddingTop: Constants.statusBarHeight + 10,
    paddingLeft: 10,
  },
  scroll: {
    paddingBottom: 15,
  },
});
