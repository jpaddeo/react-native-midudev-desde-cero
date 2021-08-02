import React from 'react';
import { StyleSheet, Text } from 'react-native';

import theme from '../theme.js';

const StyledText = ({
  children,
  color,
  fontSize,
  fontWeight,
  style,
  align,
  ...restOfProps
}) => {
  const textStyles = [
    styles.text,
    color === 'primary' && styles.colorPrimary,
    color === 'secondary' && styles.colorSecondary,
    fontSize === 'subheading' && styles.subheading,
    fontWeight === 'bold' && styles.bold,
    align === 'center' && styles.textAlignCenter,
    style,
  ];
  return <Text style={textStyles}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: theme.fontSizes.body,
    color: theme.colors.textPrimary,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  bold: {
    fontWeight: theme.fontWeights.bold,
  },
  subheading: {
    fontSize: theme.fontSizes.subheading,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  colorSecondary: {
    color: theme.colors.textSecondary,
  },
  textAlignCenter: {
    textAlign: 'center',
  },
});

export default StyledText;
