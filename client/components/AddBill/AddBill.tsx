import { ParamListBase, RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Text } from "@rneui/base";
import React from "react";
import { RootStackParamList } from "../../models/types/RootStackParamList.type";

interface AddBillProps {
  navigation: StackNavigationProp<RootStackParamList>;
  route: RouteProp<ParamListBase>;
  // any other props AddBill needs
}

const AddBill = (props: AddBillProps) => {
  return (
   <Text>AddBill Works!</Text>
  )

}

export default AddBill;