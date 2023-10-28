import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import DatePicker from 'react-native-date-picker';
import CurrencyInput from 'react-native-currency-input';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, Input, CheckBox } from '@rneui/themed';
import { RootStackParamList } from '../../models/types/RootStackParamList.type';
import { Formik } from 'formik';
import { Amount, Bill } from '../../models/Bill';
import AddBillStyleSheet from './AddBillStyleSheet';
import dayjs from 'dayjs';
import { useMutation } from '@apollo/client';
import { CREATE_BILL_MUTATION } from '../../graphql/bill/bill.mutations';
import useToast from '../../hooks/useToast';
import { NetworkError } from '@apollo/client/errors';

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
  const { message, showToast, hideToast, setToast} = useToast();
  const [createBill, { data, loading, error}] = useMutation(CREATE_BILL_MUTATION);

  useEffect(() => {
    console.log('inputs', inputs);
  }, [inputs]);

  useEffect(() => {
    if (!message.text2) {
      hideToast();
    } else {
      showToast();
    }
  }, [message]);

  const handleChange = (name: keyof Amount | keyof Bill, value: string | Date | number | null | boolean) => {
    if (name === 'actualAmount') {
      setInputs(prevInputs => ({
        ...prevInputs, 
        amount: {
          ...prevInputs.amount,
          actualAmount: value as number,
          labelAmount: "$" + value
        }
      }));
    } else if (typeof name === 'string') {
      setInputs(prevInputs => ({ 
        ...prevInputs, 
        [name]: value
      }));
    }
  }


  const handleFormSubmit = async () => {
    const createBillData = {
      billName: inputs.billName,
      amount: inputs.amount.actualAmount,
      hasAutoDraft: inputs.hasAutoDraft,
      dueDate: inputs.dueDate
    }
    console.log('createBillData', createBillData);
    // TODO: add a refetch of list bill queries when created
    try {
      setToast('info', 'Info', 'Attempting to create new bill...', hideToast);

      await createBill({
        variables: {
          data: createBillData
        }
      });
      setToast('success', 'Success', 'New bill has been created!', hideToast);
    } catch (error: NetworkError | any) {
      console.log('error', error);
      console.log('error', error.networkError.result.errors);
      setToast('error', 'Error', 'Unable to create new bill. Please try again or contact support. 😔', hideToast);
    }
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
          <View>
            <CheckBox 
              title="Is this bill autodrafted?"
              checked={inputs.hasAutoDraft!}
              onPress={() => {
                inputs.hasAutoDraft ? handleChange('hasAutoDraft', false) : handleChange('hasAutoDraft', true)
              }}
              
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