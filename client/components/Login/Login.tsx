import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { FAB } from '@rneui/themed';
import { Button } from 'react-native-elements';
import BottomMenu from '../BottomMenu/BottomMenu';
import { TextInput } from 'react-native-gesture-handler';
import useToast from '../../hooks/useToast';



// TODO: fix any type for navigation
const Login = ({ navigation }: any) => {
  const [visible, setVisible] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const { message, setMessage, showToast, hideToast } = useToast();

  useEffect(() => {
    console.log('message', message);
    if (message && message.type) {
      showToast();
    }
    if (message.type === "success") {
      setUsername("");
      setPassword("");
      navigation.navigate('Add Bill');
    }
  }, [message]);

  const handleLogin = () => {
    // TODO: implement hashing for username and password
    console.log('login')
    if (username.trim() === 'test' && password.trim() === 'test') {
      setMessage({
        type: 'success',
        text1: 'You have logged in successfully.',
        text2: `Welcome, ${username}.`
      });
      setVisible(true);

    } else {
      setMessage({
        type: "error",
        text1: "Error",
        text2: "Invalid credentials. Try again or create login credentials."
      });
    }
  }
  return(
    <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}
  >
    <TextInput
      textContentType='username'
      placeholder='Username'
      onChangeText={(e) => setUsername(e)}
      />
    <TextInput
      textContentType='password'
      placeholder='Password'
      onChangeText={(e) => setPassword(e)}
    />
   <Button 
    title="Login"
    onPress={handleLogin}
   />
    <FAB
        visible={visible}
        placement='right'
        onPress={() => setShowMenu(!showMenu)}
        icon={
          {name: 'add', color: 'white'}
        }
        color="green"
      />
      <BottomMenu navigation={navigation} showMenu={showMenu} onToggleMenu={setShowMenu}/>
  </View>
  )
}

export default Login;