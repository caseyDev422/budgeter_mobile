import { gql } from "@apollo/client";

export const FIND_USER_QUERY = gql`
  query FindFirstUser($where: UserWhereInput!) {
    findUser(where: $where) {
      userId
      userAccountCreationDate
      id
      email
    }
  }
`;