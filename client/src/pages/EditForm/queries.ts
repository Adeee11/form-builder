import { gql } from "@apollo/client";

// works fine with hardcoded ID. Problem in how to use Query variable

const GET_FORM_BY_ID = gql`
  query ($formID: ID!) {
    form(formId: $formID) {
      id
      title
      owner
      formData {
        fieldType
        Question
        option
      }
    }
  }
`;

export { GET_FORM_BY_ID };
