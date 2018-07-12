import gql from "graphql-tag";

export const GET_CONTACTS = gql`
  query Contacts {
    contacts {
      id, email, firstName, lastName
    }
  }
`;
