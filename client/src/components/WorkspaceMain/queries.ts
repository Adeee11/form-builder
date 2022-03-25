import { gql } from "@apollo/client";

const GET_FORMS = gql`
  query sortedForms($userId: String!, $sortBy: String = "date") {
    sortedForms(owner: $userId, sortBy: $sortBy) {
      title
      id
      submission {
        formId
      }
    }
  }
`;

const DEL_FORM = gql`
  mutation DELETE_FORM($userId: ID!) {
    removeForm(id: $userId)
  }
`;

export { GET_FORMS, DEL_FORM };
