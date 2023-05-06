import React, { useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
import { FAB } from '@rneui/themed';
import { Icon } from 'react-native-elements';
import BottomMenu from '../BottomMenu/BottomMenu';

// TODO: fix any type for navigation
const Login = ({ navigation }: any) => {
  const [visible, setVisible] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  return(
    <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}
  >
    <Text>Future Login Page (can't access anything beyond login w/o token)</Text>
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