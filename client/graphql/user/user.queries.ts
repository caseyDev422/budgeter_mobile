import { gql } from "@apollo/client";

export const FIND_FIRST_USER_QUERY = gql`
  query FindFirstUser($where: UserWhereInput) {
    findFirstUser(where: $where) {
      id
      email
      userId
      enabledMultiFactor
    }
  }
`