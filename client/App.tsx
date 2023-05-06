import React from 'react';
import Login from './components/Login/Login';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AddBill from './components/AddBill/AddBill';
import CalendarView from './components/CalendarView/CalendarView';
import GridView from './components/GridView/GridView';
import Profile from './components/Profile/Profile';
import Logout from './components/Logout/Logout';

const App = () => {
  const Stack = createStackNavigator();
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Add Bill' component={AddBill} />
          <Stack.Screen name='Calendar View' component={CalendarView} />
          <Stack.Screen name='Grid View' component={GridView} />
          <Stack.Screen name='Profile' component={Profile} />
          <Stack.Screen name='Logout' component={Logout} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )

}

export default App;