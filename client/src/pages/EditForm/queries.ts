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

const UPDATE_FORM = gql`
  mutation updateForm($input: UpdateFormInput!, $id: String!) {
    updateForm(updateFormInput: $input, id: $id) {
      id
      date
      title
      formData {
        Question
        fieldType
        option
      }
    }
  }
`;

export { GET_FORM_BY_ID, UPDATE_FORM };
