import { gql } from "@apollo/client";

export const FIND_USER_QUERY = gql`
  query FindFirstUser($where: CustomUserWhereInput!) {
    findUser(where: $where) {
      userId
      userAccountCreationDate
      id
      email
    }
  }
`;