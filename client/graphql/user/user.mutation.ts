import { gql } from "@apollo/client";

export const CREATE_USER_MUTATION = gql`
  mutation createOneUser($data: UserCreateInput!) {
    createOneUser(data: $data) {
      id
      email
      userId
      password
      loggedInTime
      loggedOutTime
      userAccountCreationDate
      enabledMultiFactor
    }
  }
`

export const UPDATE_USER_MUTATION = gql`
  mutation UpdateOneUser($data: UserUpdateInput, $where: UserWhereUniqueInput) {
    updateOneUser(data: $data, where: $where) {
      userId
    }
  }
`;