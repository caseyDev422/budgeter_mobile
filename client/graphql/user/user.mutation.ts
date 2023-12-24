import { gql } from "@apollo/client";

export const CREATE_USER_MUTATION = gql`
  mutation createUser($data: UserCreateInput!) {
    createUser(data: $data) {}
  }
`;

export const UPDATE_USER_MUTATION = gql`
  mutation UpdateOneUser($data: UserUpdateInput, $where: UserWhereUniqueInput) {
    updateOneUser(data: $data, where: $where) {
      userId
    }
  }
`;