import { gql } from "@apollo/client";

const GET_FORMS = gql`
  query sortedForms($userId: String!) {
    sortedForms(owner: $userId) {
      title
      id
    }
  }
`;

export { GET_FORMS };