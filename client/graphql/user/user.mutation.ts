import { gql } from "@apollo/client";

export const CREATE_USER_MUTATION = gql`
  mutation CustomCreateNewUser($data: AuthUser) {
    customCreateNewUser(data: $data) {
      user
      token
    }
  }
`

export const UPDATE_USER_MUTATION = gql`
  mutation UpdateOneUser($data: UserUpdateInput, $where: UserWhereUniqueInput) {
    updateOneUser(data: $data, where: $where) {
      userId
      loggedInTime
      email
      enabledMultiFactor
    }
  }
`;