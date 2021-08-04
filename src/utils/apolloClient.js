import ApolloClient from 'apollo-boost';
import Constants from 'expo-constants';

const { apolloUri } = Constants.manifest.extra;

const createApolloClient = (authStorage) => {
  return new ApolloClient({
    uri: apolloUri,
    request: async (operation) => {
      try {
        const accessToken = await authStorage.getAccessToken();
        operation.setContext({
          headers: {
            authorization: accessToken ? `Bearer ${accessToken}` : '',
          },
        });
      } catch (error) {
        console.error(error);
      }
    },
  });
};
export default createApolloClient;
