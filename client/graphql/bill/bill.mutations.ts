import { gql } from "@apollo/client";

export const CREATE_BILL_MUTATION = gql`
  mutation CreateOneBill($data: BillCreateInput!) {
    createOneBill(data: $data) {
      id
      billName
      amount
      dueDate
    }
  }
`;

export const UPDATE_BILL_MUTATION = gql`
  mutation UpdateOneBill(
    $data: BillUpdateInput!
    $where: BillWhereUniqueInput!
  ) {
    updateOneBill(data: $data, where: $where) {
      id
      billName
      amount
      dueDate
    }
  }
`;

export const DELETE_BILL_MUTATION = gql`
  mutation DeleteOneBill($where: BillWhereUniqueInput!) {
    deleteOneBill(where: $where) {
      billName
    }
  }
`;