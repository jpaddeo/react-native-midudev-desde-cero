// import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { FragmentsOnCompositeTypesRule } from 'graphql';

import { GET_RESPOSITORIES } from '../graphql/queries';

const useRepositories = (variables) => {
  const {
    data = {},
    loading,
    refetch,
    fetchMore,
  } = useQuery(GET_RESPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables,
  });

  const handleFetchMore = () => {
    const cantFetchMore =
      !loading && data && data.repositories.pageInfo.hasNextPage;

    if (!cantFetchMore) return;

    fetchMore({
      query: GET_RESPOSITORIES,
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables,
      },
      // le tengo que decir cómo voy a actualizar la data de la aplicación (apollo maneja estados)
      updateQuery: (previousData, { fetchMoreResult }) => {
        // fetchMoreResult=> nuevos datos
        return {
          repositories: {
            ...fetchMoreResult.repositories,
            edges: [
              ...previousData.repositories.edges,
              ...fetchMoreResult.repositories.edges,
            ],
          },
        };
      },
    });
  };
  const { repositories = null } = data;

  /* REST
  const [repositories, setRepositories] = useState(null);

  const fetchRepositories = async () => {
    const response = await globalThis.fetch(
      'http://192.168.1.72:5000/api/repositories'
    );
    const json = await response.json();
    setRepositories(json);
  };

  useEffect(() => {
    fetchRepositories();
  }, []);
*/
  const repositoriesNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return {
    loading,
    repositories: repositoriesNodes,
    refetch,
    fetchMore: handleFetchMore,
  };
};

export default useRepositories;
