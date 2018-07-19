import gql from "graphql-tag";
/*
export const GET_CONTACTS = gql`
  query Contacts {
    contacts {
      id, email, firstName, lastName
    }
  }
`;
*/
export const GET_CONTACTS = gql`
   query Contacts {
     contacts {
       id, email, firstName, lastName, phone, line1, line2, city, postalCode, country
     }
   }
`;