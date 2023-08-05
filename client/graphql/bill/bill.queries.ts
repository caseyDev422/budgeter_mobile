import { gql } from "@apollo/client";

export const LIST_BILL_QUERY = gql`
  query Bills(
    $where: BillWhereInput
    $orderBy: [BillOrderByWithRelationInput!]
    $take: Int
    $skip: Int
  ) {
    bills(where: $where, orderBy: $orderBy, take: $take, skip: $skip) {
      id
      billName
      amount
      dueDate
    }
  }
`;

export const SINGLE_BILL_QUERY = gql`
  query Bill($where: BillWhereUniqueInput!) {
    bill(where: $where) {
      id
      billName
      amount
      dueDate
    }
  }
`;