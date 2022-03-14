import { gql } from "@apollo/client";

const LOG_IN = gql`
  mutation login($user: LoginUserInput!) {
    login(loginUserInput: $user) {
      user {
        username
        id
      }
      access_token
    }
  }
`;

export { LOG_IN };
