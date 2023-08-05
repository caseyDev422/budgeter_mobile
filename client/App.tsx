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
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';

const httpLink = new HttpLink({ uri: 'http://10.0.2.2:4000/graphql'});

const client = new ApolloClient({
  link: httpLink, // TODO: this will need to be updated to be dynamic (I think)
  cache: new InMemoryCache()
});

const App = () => {
  const [visible, setVisible] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const Stack = createStackNavigator();
  return (
    <ApolloProvider client={client}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name='Login'>
              {props => <Login setVisible={setVisible} {...props} />}
            </Stack.Screen>
            <Stack.Screen name='AddBill'>
              {props => <AddBill {...props} />}
            </Stack.Screen>
            <Stack.Screen name='CalendarView' component={CalendarView} />
            <Stack.Screen name='GridView' component={GridView} />
            <Stack.Screen name='Profile' component={Profile} />
          </Stack.Navigator>
          {visible && (
            <MenuButton
              visible={visible}
              showMenu={showMenu}
              setShowMenu={setShowMenu}
              setVisible={setVisible}
            />
          )}
        </NavigationContainer>
        <Toast />
      </SafeAreaProvider>
    </ApolloProvider>
  );

}

export default App;