import { ParamListBase, RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { SetStateAction, useState } from "react";
import { RootStackParamList } from "../../models/types/RootStackParamList.type";
import { View } from "react-native";
import AddBillStyles from "../../styles/AddBillStyleSheet";
import {  Input, Text } from "react-native-elements";
import { Checkbox } from 'react-native-paper';
import { DatePickerInput } from "react-native-paper-dates";
interface AddBillProps {
  navigation: StackNavigationProp<RootStackParamList>;
  route: RouteProp<ParamListBase>;
  // any other props AddBill needs
}

const AddBill = (props: AddBillProps) => {
  const [date, setDate] = useState(undefined)
  const [checked, setChecked] = useState(false);
  return (
   <View style={AddBillStyles.container}>
    <Input placeholder="Bill Name">
    </Input>
    <Input placeholder="Amount"></Input>
    <DatePickerInput
      inputMode="start"
      locale="en"
      label="Due Date"
      value={date}
      onChange={(d) => {
        setDate(d as SetStateAction<undefined>)
      }}
    />
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
    <Checkbox color={'#1976d2'} onPress={() => setChecked(!checked)} status={checked ? 'checked' : 'unchecked'}/>
    <Text>Auto Draft</Text>
    </View>
   </View>
  )

}

export default AddBill;