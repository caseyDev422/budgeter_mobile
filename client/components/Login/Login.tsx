import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { View } from 'react-native';
import { Input } from '@rneui/themed';
import { Button } from 'react-native-elements';
import useToast from '../../hooks/useToast';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../models/types/RootStackParamList.type';
import { FIND_FIRST_USER_QUERY } from '../../graphql/user/user.queries';
import { useLazyQuery } from '@apollo/client';


interface LoginProps {
  navigation: StackNavigationProp<RootStackParamList>;
  route: RouteProp<Record<string, object | undefined>, string>;
  setVisible: Dispatch<SetStateAction<boolean>>;
}


const Login = (props: LoginProps) => {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const { message, showToast, hideToast, resetToast, setToast } = useToast();
  const [isCheckingUsername, setIsCheckingUsername] = useState(false);
  const [findUser, { data: userData}] = useLazyQuery(FIND_FIRST_USER_QUERY);

  useEffect(() => {
    if (message && message.type) {
      showToast();
    }
    if (message.type === 'success') {
      setUsername('');
      setPassword('');
      props.navigation.navigate('Calendar');
    }
  }, [message]);

  useEffect(() => {
    console.log('userData', userData);
    if (isCheckingUsername) {
      if (userData?.findFirstUser === null) {
        const toastActions = () => {
          hideToast();
          resetToast();
        }
        setToast('error', 'Error', `Unable to find user with name ${username}. Please sign up.`, toastActions);
        // setMessage({
        //   type: 'error',
        //   text1: 'Error',
        //   text2: `Unable to find user with name ${username}. Please sign up.`,
        //   onPress() {
        //     hideToast();
        //     resetToast();
        //   },
        // });
        setUsername('');
        setPassword('');
      } else if (userData?.findFirstUser === username.trim()) {
        checkPassword();
      }
      setIsCheckingUsername(false);
    }

  }, [userData, isCheckingUsername]);

  const handleLogin = async () => {
    // TODO: implement hashing for username and passwordrr
    /**
     * logic:
     * run query to find user in db
     * if not in db, show error toast that no person associated with this username
     * and to tell user to make an account by clicking the sign up page
     * else if person is in db, check password
     * 
     * update the loggedInTime
     */
    if ((username.trim() === undefined || username.trim() === '') 
    && password.trim() === undefined || password.trim() === '') {
      setToast('error', 'Error', 'No credentials were provided.', hideToast);
    } else {
      console.log('username', username);
      await findUser({
        variables: {
          where: {
            userId: {
              equals: username.trim()
            }
          },
          fetchPolicy: 'network-only'
        }
      });
      setIsCheckingUsername(true);
    }
    
    // if (username.trim() === 'test' && password.trim() === 'test') {
    //   setMessage({
    //     type: 'success',
    //     text1: 'You have logged in successfully.',
    //     text2: `Welcome, ${username}.`
    //   });
    //   props.setVisible(true);

    // } else {
    //   setMessage({
    //     type: 'error',
    //     text1: 'Error',
    //     text2: 'Invalid credentials. Try again or create login credentials.'
    //   });
    // }
  }

  const checkPassword = () => {
    console.log('logic for checking password');
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