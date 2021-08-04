import { useEffect } from 'react';
import { useHistory } from 'react-router-native';
import { useApolloClient } from '@apollo/client';

import authStorage from '../utils/authStorage';

const SignOutPage = () => {
  const apolloClient = useApolloClient();
  const history = useHistory();

  useEffect(() => {
    console.log('A');
    async function singOut() {
      await authStorage.removeAccessToken();
      await apolloClient.resetStore(); // borra el cache y usuarios para que no tenga más header auth.
      history.push('/');
    }
    singOut();
  }, []);

  return null;
};

export default SignOutPage;
