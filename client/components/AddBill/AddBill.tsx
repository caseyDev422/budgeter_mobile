import { ParamListBase, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Button, Input } from '@rneui/themed';
import React, { useEffect, useState } from 'react';
import { RootStackParamList } from '../../models/types/RootStackParamList.type';
import { View } from 'react-native';
import { Formik } from 'formik';
import { Bill } from '../../models/Bill';
import DatePicker from 'react-native-date-picker';
import Icon from 'react-native-vector-icons/FontAwesome';

interface AddBillProps {
  navigation: StackNavigationProp<RootStackParamList>;
  route: RouteProp<ParamListBase>;
  // any other props AddBill needs
}

const AddBill = (props: AddBillProps) => {

  const INIT_FORM_VALUES: Bill = {
    billName: "",
    amount: "",
    hasAutoDraft: false,
    dueDate: new Date(),
  }
  const [inputs, setInputs] = useState(INIT_FORM_VALUES);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log('inputs', inputs);
  }, [inputs])

  const handleChange = (name: string, value: string | Date) => {
    setInputs(prevInputs => ({ ...prevInputs, [name]: value }));
  }

  const handleSubmit = () => {

  }
  return (
    <Formik
      initialValues={inputs}
      onSubmit={values => console.log('values', values)}>
      <>
        <View>
          <Input
            textContentType="name"
            label="Bill name"
            onChangeText={value => handleChange('billName', value)}
            defaultValue={inputs.billName}
          />
        </View>
        <View>
          <Input disabled label="Due Date" />
          <Icon name="calendar" size={30} onPress={() => setOpen(true)} />
          <DatePicker
            modal
            androidVariant="nativeAndroid"
            date={inputs.dueDate}
            locale="en"
            mode="date"
            open={open}
            title="Due Date"
            onConfirm={date => console.log('date', date)}
            onCancel={() => setOpen(false)}
          />
        </View>
        {/* TODO: will need to make a custom currency format */}
        <View>
          <Input
            textContentType='none'
            label="Amount"
            onChangeText={value => handleChange('amount', value)}
            defaultValue={inputs.billName}
          />
        </View>
        <Button
              title="Submit"
              buttonStyle={{ backgroundColor: 'rgba(127, 220, 103, 1)' }}
              containerStyle={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              titleStyle={{
                color: 'white',
                marginHorizontal: 20,
              }}
            />
      </>
    </Formik>
  );

}

export default AddBill;