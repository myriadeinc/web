import config from './config.js';
import ApolloClient from 'apollo-boost';

const gqlClient = new ApolloClient({
  uri: `${config.miner_metrics_url}/v1/miner`,
  request: (operation) => {
    const token = localStorage.getItem('access_token');
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  }
})

export default gqlClient;