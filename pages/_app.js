import '../styles/globals.css'
import '../sass/main.scss';
import { client } from "../apollo-client";
import { gql, useQuery, ApolloProvider } from "@apollo/client";
import store from '../store';
import { Provider } from 'react-redux'

//CREATE LAYOUT COMPONENT
function MyApp({ Component, pageProps }) {
  return(
      <ApolloProvider client={client}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ApolloProvider>
  )
}

export default MyApp
