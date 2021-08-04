// import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';

import { GET_RESPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  const {
    data = {},
    loading,
    refetch,
  } = useQuery(GET_RESPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });
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

  return { loading, repositories: repositoriesNodes, refetch };
};

export default useRepositories;
