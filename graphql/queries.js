import { gql, useQuery} from "@apollo/client"

export const GET_SEARCH = 
gql`
     query Search ($term: String!, $location: String!, $limit: Int!) {
        search(term: $term, location: $location, limit: $limit){
            total
        business {
            name
            id
            url
            alias
            photos
            rating
            display_phone
            review_count
            location {
                address1
                address2
                address3
                city
                state
                postal_code
                country
                formatted_address
                }
            } 

        }
         }
`;

export const GET_BUSINESS = 
gql`
     query Business ($alias: String!) {
        business(id: $alias){
            id
            is_claimed
            is_closed
            name
            url
            phone
            display_phone
            review_count
            rating
            photos
            price
            hours {
                open {
                    end
                    start
                    day
                }
                hours_type
                is_open_now
            }
            location {
                address1
                address2
                address3
                city
                state
                postal_code
                country
                formatted_address
            }
            reviews {
                user {
                    name
                }
                text
            }

        }
         }
`;