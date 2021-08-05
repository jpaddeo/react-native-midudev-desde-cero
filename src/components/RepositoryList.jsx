import React, { useEffect, useState } from 'react';
import { Text, FlatList } from 'react-native';

import RepositoryItem from './RepositoryItem';

import useRepositories from '../hooks/useRepositories';

export const RepositoryListUI = ({ onEndReached, repositories }) => {
  return (
    <FlatList
      data={repositories}
      renderItem={({ item: repo }) => <RepositoryItem {...repo} />}
      ItemSeparatorComponent={() => <Text />}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
    />
  );
};

const RepositoryList = () => {
  const { repositories, fetchMore } = useRepositories({ first: 6 });

  const handleEndReached = () => {
    fetchMore();
  };
  return (
    <RepositoryListUI
      onEndReached={handleEndReached}
      repositories={repositories}
    />
  );
};

export default RepositoryList;
