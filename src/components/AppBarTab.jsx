import React from 'react';
import { StyleSheet } from 'react-native';

import { Link, useLocation } from 'react-router-native';

import StyledText from './StyledText';
import theme from '../theme';

const AppBarTab = (props) => {
  const { pathname } = useLocation();

  const active = pathname === props.to;

  const tabStyles = [styles.text, active && styles.active];
  return (
    <Link to={props.to}>
      <StyledText fontWeight='bold' style={tabStyles}>
        {props.children}
      </StyledText>
    </Link>
  );
};

export default AppBarTab;

const styles = StyleSheet.create({
  text: {
    color: theme.appBar.textSecondary,
    paddingLeft: 10,
    paddingRight: 10,
  },
  active: {
    color: theme.appBar.textPrimary,
  },
});
