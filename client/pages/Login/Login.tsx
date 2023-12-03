import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { View } from 'react-native';
import { Input } from '@rneui/themed';
import { Button } from 'react-native-elements';
import useToast from '../../hooks/useToast';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../models/types/RootStackParamList.type';
import { FIND_USER_QUERY } from '../../graphql/user/user.queries';
import { useApolloClient, useLazyQuery } from '@apollo/client';


interface LoginProps {
  navigation: StackNavigationProp<RootStackParamList>;
  route: RouteProp<Record<string, object | undefined>, string>;
  setVisible: Dispatch<SetStateAction<boolean>>;
}


const Login = (props: LoginProps) => {
  const client = useApolloClient();
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const { message, showToast, hideToast, resetToast, setToast } = useToast();
  const [isCheckingUsername, setIsCheckingUsername] = useState(false);
  const defaultToastCallback = () => {
    hideToast();
    resetToast();
  };

  useEffect(() => {
    if (message && message.type) {
      showToast();
    }
    if (message.type === 'success') {
      setUsername('');
      setPassword('');
      props.setVisible(true);
      props.navigation.navigate('Calendar');
    }
  }, [message]);

  useEffect(() => {
    const findUser = async () => {
      console.log('username', username);
      try {
        const {data: userData} = await client.query({
          query: FIND_USER_QUERY,
          variables: {
            where: {
              userId: {
                equals: username.trim(),
              },
            },
          },
          fetchPolicy: 'network-only',
        });
        console.log('userData', userData);
        if (userData.findUser === null) {
          showErrorToast();
        } else {
          setIsCheckingUsername(false);
          checkPassword(userData.findUser);
        }
      } catch (error) {
        console.log("ERROR", error);
        showErrorToast();
      }

    };

    if (isCheckingUsername) {
      findUser();
    }
  }, [isCheckingUsername]);

  const showErrorToast = () => {
    setToast(
      'error',
      'Error',
      `Unable to find user with name ${username}. Please sign up.`,
      defaultToastCallback,
    );
    setUsername('');
    setPassword('');
    return;
  }

  const handleLogin = async () => {
    // TODO: implement hashing for username and password
    if ((username.trim() === undefined || username.trim() === '') 
    && password.trim() === undefined || password.trim() === '') {
      setToast('error', 'Error', 'No credentials were provided.', hideToast);
    } else {
      setIsCheckingUsername(true);
    }
  }

  const checkPassword = (foundUser: any) => {
    console.log('logic for checking password');
    // will need to implement decrypting password here
    setToast(
      'success',
      'Success',
      `Login successful. Welcome, ${foundUser.userId}!`,
      defaultToastCallback,
    );
    // update loggedInTime
  }

  const handleSignUp = () => {
    props.navigation.navigate('SignUp');
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Input
        textContentType='username'
        placeholder='Username'
        onChangeText={e => setUsername(e)}
        defaultValue={username}
      />
      <Input
        autoComplete='off'
        textContentType='password'
        placeholder='Password'
        onChangeText={e => setPassword(e)}
        defaultValue={password}
        secureTextEntry
      />
      <View
        style={{
          width: "50%",
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Button title='Login'
        onPress={handleLogin} />
        <Button title='Sign Up' onPress={handleSignUp} />
      </View>
      
    </View>
  );
}

export default Login;