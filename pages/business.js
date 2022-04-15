import React from 'react'
import { useQuery } from "@apollo/client";
import { GET_BUSINESS } from '../graphql/queries';
import { useRouter } from 'next/router'

export default function Business() {
    const router = useRouter();
    const { alias } = router.query;

    console.log("name", alias)

    const { loading:getOrgLoading, error, data} = useQuery(GET_BUSINESS, {
        variables: { alias },
        fetchPolicy: 'cache-and-network',
        // onCompleted(data){
        //   console.log("DATA", data)
        // },
      });

console.log("BUSINESS", data);
    
  return (
    <div>Business</div>
  )
}
