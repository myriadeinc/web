import config from './config.js';
import ApolloClient from 'apollo-boost';

const gqlMiner = new ApolloClient({
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

const gqlRaffles = new ApolloClient({
  uri: `${config.raffles_url}/v1/graphql`,
  request: (operation) => {
    const token = localStorage.getItem('access_token');
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  }
})

export { gqlMiner, gqlRaffles };