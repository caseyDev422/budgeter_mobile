import React, { useState } from 'react';
import Login from './components/Login/Login';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AddBill from './components/AddBill/AddBill';
import CalendarView from './components/CalendarView/CalendarView';
import GridView from './components/GridView/GridView';
import Profile from './components/Profile/Profile';
import Logout from './components/Logout/Logout';
import Toast from 'react-native-toast-message';
import MenuButton from './components/MenuButton/MenuButton';

const App = () => {
  const [visible, setVisible] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const Stack = createStackNavigator();
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login">
            {props => <Login setVisible={setVisible} {...props} />}
          </Stack.Screen>
          <Stack.Screen name="AddBill">
            {props => <AddBill {...props} />}
          </Stack.Screen>
          <Stack.Screen name="CalendarView" component={CalendarView} />
          <Stack.Screen name="GridView" component={GridView} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Logout" component={Logout} />
        </Stack.Navigator>
        {visible && (
          <MenuButton
            visible={visible}
            showMenu={showMenu}
            setShowMenu={setShowMenu}
          />
        )}
      </NavigationContainer>
      <Toast />
    </SafeAreaProvider>
  );

}

export default App;