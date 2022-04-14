import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { gql, useQuery, ApolloProvider } from "@apollo/client";
import { client } from "../apollo-client";
import Dashboard from './home';

export default function Home() {
 
  return (
    <ApolloProvider client={client}>
      <Dashboard />
    </ApolloProvider>
  )
}
