import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import RepositoryItemHeader from './RepositoryItemHeader';
import RepositoryStats from './RepositoryStats';

const RepositoryItem = (props) => {
  return (
    <View key={props.id} style={styles.contianer}>
      <RepositoryItemHeader {...props} />
      <RepositoryStats {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  contianer: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5,
  },
});

export default RepositoryItem;
