import React from 'react';
import { Text, FlatList } from 'react-native';

import repositories from '../data/repositories';
import RepositoryItem from './RepositoryItem';

const RepositoryList = () => {
  return (
    <FlatList
      data={repositories}
      renderItem={({ item: repo }) => <RepositoryItem {...repo} />}
      ItemSeparatorComponent={() => <Text />}
    />
  );
};

export default RepositoryList;
