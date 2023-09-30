import { ErrorMessage, Formik } from 'formik';
import React, { useState } from 'react';
import { Text } from "react-native-elements";
import { ScrollView, StyleSheet, View } from 'react-native';
import { User } from '../../models/User';
import { Button, Input } from '@rneui/themed';
import * as Yup from 'yup';
import styles from '../GlobalStyleSheet';

// TODO: fix validation, removed from form for now
const SignUpScheme = Yup.object().shape({
  email: Yup.string().email('Email is invalid.').required('Email is required.'),
  password: Yup.string()
  .matches(
    /^(?!.*(.)\1)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%]).{8,}$/,
    'Password must be at least 8 characters, contain at least 1 lowercase letter, 1 uppercase letter, 1 special character (!@#$%), and no repeated letters.'
  )
  .required('Password is required.')
});



const SignUp = () => {

  const INIT_INPUTS: User = {
    userId : '',
    email: '',
    password: '',
    enabledMultiFactor: false, // TODO Implement Logic for MFA
    userAccountCreationDate: new Date(),
  }

  const handleFormSubmit = () => {
    console.log(inputs)
  }

  const handleChange = (input: keyof User, value: String) => {
    setInputs((prevInputs: any) => ({
      ...prevInputs,
      [input]: value
    }))

  }

  const [inputs, setInputs] = useState(INIT_INPUTS)
  /**
   * userId - optional only if email is provided
   * email - required
   * password - required with certain contingents:
   * min length of 8 chars
   * contain at least
   *  1 lowercase,
   *  1 uppercase, 
   *  special char (ex - !@#$%)
   *  letters can't repeat (ex - aaB, BBek, aAkdIi)
   * 
   */

  return (
    <Formik
      validateOnBlur={true}
      validateOnChange={false}
      style={styles.container}
      initialValues={inputs}
      onSubmit={handleFormSubmit}
    >
      {({handleSubmit}) => (
        <ScrollView>
          <View style={styles.inputWrapper}>
            <Input
              textContentType='username'
              label='Username'
              onChangeText={value => handleChange('userId', value)}></Input>
          </View>
          <View style={styles.inputWrapper}>
            <Input
              textContentType='emailAddress'
              label='Email'
              onChangeText={value => handleChange('email', value)}></Input>
            <ErrorMessage name='email'>
              {msg => <Text style={styles.errorText}>{msg}</Text>}
            </ErrorMessage>
          </View>
          <View style={styles.inputWrapper}>
            <Input
              textContentType='password'
              label='Password'
              onChangeText={value => handleChange('password', value)}
              secureTextEntry></Input>
            <ErrorMessage name='password'>
              {msg => <Text style={styles.errorText}>{msg}</Text>}
            </ErrorMessage>
          </View>
          <Button
            title='Submit'
            onPress={handleSubmit}
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
        </ScrollView>
      )}
    </Formik>
  );
}

export default SignUp;