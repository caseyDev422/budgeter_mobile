import { ParamListBase, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Button, Input } from '@rneui/themed';
import React, { useEffect, useState } from 'react';
import { RootStackParamList } from '../../models/types/RootStackParamList.type';
import { View } from 'react-native';
import { Formik } from 'formik';
import { Amount, Bill } from '../../models/Bill';
import DatePicker from 'react-native-date-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import AddBillStyleSheet from './AddBillStyleSheet';
import CurrencyInput from 'react-native-currency-input';
import dayjs from 'dayjs';

interface AddBillProps {
  navigation: StackNavigationProp<RootStackParamList>;
  route: RouteProp<ParamListBase>;
  // any other props AddBill needs
}

const AddBill = (props: AddBillProps) => {
  const INIT_FORM_VALUES: Bill = {
    billName: "",
    amount: {
      actualAmount: 0.00,
      labelAmount: ""
    },
    hasAutoDraft: false,
    dueDate: new Date(),
  }
  const [inputs, setInputs] = useState(INIT_FORM_VALUES);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log('inputs', inputs);
  }, [inputs]);

  const handleChange = (name: keyof Amount | keyof Bill, value: string | Date | number | null) => {
    if(name === 'actualAmount') {
      setInputs(prevInputs => ({
        ...prevInputs, 
        amount: {
          ...prevInputs.amount,
          actualAmount: value as number
        }
      }));
    } else if(typeof name === 'string'){
      setInputs(prevInputs => ({ 
        ...prevInputs, 
        [name]: value
      }));
    }
}


  const handleCurrencyTextInput = (textInput: string) => {
      console.log('textInput', textInput);

  }

  const handleFormSubmit = () => {
    console.log('input values to save', inputs);
  }

  return (
    <Formik
      style={AddBillStyleSheet.container}
      initialValues={inputs}
      onSubmit={handleFormSubmit}
    >
      {({ handleSubmit }) => (
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
            <Input 
              disabled 
              label="Due Date" 
              value={dayjs(inputs.dueDate).format('MM/DD/YYYY')}
              rightIcon={
                <Icon name="calendar" size={30} onPress={() => setOpen(true)} />
              }
            />
            <DatePicker
              modal
              androidVariant="nativeAndroid"
              date={inputs.dueDate}
              locale="en"
              mode="date"
              open={open}
              title="Due Date"
              onConfirm={date => handleChange('dueDate', date)}
              onCancel={() => setOpen(false)}
            />
          </View>
          <View>
            <CurrencyInput
              value={inputs.amount.actualAmount}
              onChangeValue={value => handleChange('actualAmount', value)}
              prefix="$"
              delimiter=","
              separator="."
              precision={2}
              minValue={0}
              renderTextInput={textInputProps => <Input {...textInputProps} />}
            />
          </View>
          <Button
            title="Submit"
            onPress={handleSubmit} // This is how to trigger form submission
            buttonStyle={{backgroundColor: 'rgba(127, 220, 103, 1)'}}
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
      )}
    </Formik>
  );
  
}

export default AddBill;