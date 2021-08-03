import React, { useEffect, useState } from 'react';
import { Text, FlatList } from 'react-native';

import RepositoryItem from './RepositoryItem';

import useRepositories from '../hooks/useRepositories';

const RepositoryList = () => {
  const { repositories } = useRepositories();

  return (
    <FlatList
      data={repositories}
      renderItem={({ item: repo }) => <RepositoryItem {...repo} />}
      ItemSeparatorComponent={() => <Text />}
    />
  );
};

export default RepositoryList;
