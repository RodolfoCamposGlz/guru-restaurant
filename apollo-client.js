import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
    uri: process.env.NEXT_PUBLIC_URL_SERVER
  });

const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        'Accept-Language': 'en-US',
        authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      }
    }
  })
 export const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });