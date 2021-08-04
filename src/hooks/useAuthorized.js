import { useQuery } from '@apollo/client';
import { AUTHORIZED_USER } from '../graphql/queries';

const useAuthorized = () => {
  const { data } = useQuery(AUTHORIZED_USER, {
    fetchPolicy: 'cache-and-network',
  });

  const isAuthorized = data !== undefined && data?.authorizedUser !== null;
  
  return {
    isAuthorized,
  };
};

export default useAuthorized;
