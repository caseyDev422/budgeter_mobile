import React, { useEffect, useState } from 'react';
import { ErrorMessage, Formik } from 'formik';
import { Text } from "react-native-elements";
import { ScrollView, View } from 'react-native';
import { User } from '../../models/User';
import { Button, Input } from '@rneui/themed';
import * as Yup from 'yup';
import styles from '../../styles/GlobalStyleSheet';
import { useMutation } from '@apollo/client';
import { CREATE_USER_MUTATION } from '../../graphql/user/user.mutation';
import useToast from '../../hooks/useToast';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../models/types/RootStackParamList.type';
import { RouteProp } from '@react-navigation/native';

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

interface SignUpProps {
  navigation: StackNavigationProp<RootStackParamList>;
  route: RouteProp<Record<string, object | undefined>, string>;
}


const SignUp = (props: SignUpProps) => {
  const INIT_INPUTS: User = {
    userId : '',
    email: '',
    password: '',
    enabledMultiFactor: false, // TODO Implement Logic for MFA
    userAccountCreationDate: new Date(),
  };

  const [inputs, setInputs] = useState(INIT_INPUTS);
  const { message, showToast, hideToast, setToast } = useToast();
  const [createUser, {error: userError}] = useMutation(CREATE_USER_MUTATION);
  const [formSubmitting, setFormSubmitting] = useState(false);
  useEffect(() => {
    console.log("message", message);
    if (message.type) {
      showToast();
    }
  }, [message]);

  useEffect(() => {
    if (formSubmitting) {
      setFormSubmitting(false);
    }
  }, [formSubmitting]);


  const handleFormSubmit = async () => {
    let signupData = {...inputs};
    if (!inputs.userId) {
      signupData.userId = inputs.email;
    }
    console.log(signupData);
    try {
      await createUser({
        variables: {
          data: signupData
        }
      });
      setToast('success', 'Success', 'You have successfully signed up and now able to login! :D', hideToast);
      setInputs(INIT_INPUTS);
      props.navigation.navigate('Login');
    } catch (error: any) {
      console.log("ERROR", error, userError?.networkError);
      setToast('error', 'Error', 'Unable to create new user. Please try again or contact support.', hideToast);
    }
  }

  const handleChange = (input: keyof User, value: String) => {
    setInputs((prevInputs: any) => ({
      ...prevInputs,
      [input]: value
    }));
  }


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