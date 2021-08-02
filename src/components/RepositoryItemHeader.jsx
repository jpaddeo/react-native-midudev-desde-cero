import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import StyledText from './StyledText';
import theme from '../theme';

const RepositoryItemHeader = (props) => {
  return (
    <View style={styles.contianer}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: props.ownerAvatarUrl }} />
      </View>
      <View style={styles.description}>
        <StyledText fontWeight='bold'>{props.fullName}</StyledText>
        <StyledText color='secondary'>{props.description}</StyledText>
        <StyledText style={styles.language}>{props.language}</StyledText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contianer: {
    flexDirection: 'row',
    paddingBottom: 2,
  },
  language: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-start', // usa el espacio que necesita no más y no toda la row.
    borderRadius: 4,
    marginTop: 4,
    marginBottom: 4,
    overflow: 'hidden', // para que funcione el borderradius
  },
  imageContainer: {
    paddingRight: 10,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 4,
  },
  description: {
    flex: 1,
  },
});

export default RepositoryItemHeader;
