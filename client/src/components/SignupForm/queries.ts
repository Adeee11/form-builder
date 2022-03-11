import { gql } from "@apollo/client";

const SIGN_UP = gql`
  mutation signUp($user: LoginUserInput!) {
    signUp(loginUserInput: $user) {
      username
      id
    }
  }
`;

export { SIGN_UP };
