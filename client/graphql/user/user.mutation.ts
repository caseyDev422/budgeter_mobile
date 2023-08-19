import { gql } from "@apollo/client";

export const UPDATE_USER_MUTATION = gql`
  mutation UpdateOneUser($data: UserUpdateInput, $where: UserWhereUniqueInput) {
    updateOneUser(data: $data, where: $where) {
      userId
      loggedInTime
      email
      enabledMultiFactor
    }
  }
`