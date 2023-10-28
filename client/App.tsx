import React, { useState } from 'react';
import Login from './pages/Login/Login';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderBackButton } from '@react-navigation/elements';
import AddBill from './pages/AddBill/AddBill';
import CalendarView from './pages/CalendarView/CalendarView';
import GridView from './pages/GridView/GridView';
import Profile from './pages/Profile/Profile';
import Logout from './pages/Logout/Logout';
import Toast from 'react-native-toast-message';
import MenuButton from './components/MenuButton/MenuButton';
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';
import SignUp from './pages/SignUp/SignUp';

const httpLink = new HttpLink({ uri: 'http://10.0.2.2:4000/graphql'});

const client = new ApolloClient({
  link: httpLink, // TODO: this will need to be updated to be dynamic (for diff envs)
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
          <Stack.Navigator screenOptions={{headerLeft: () => null}}>
            <Stack.Screen name="Login">
              {props => <Login setVisible={setVisible} {...props} />}
            </Stack.Screen>
            <Stack.Screen name="Add bill">
              {props => <AddBill {...props} />}
            </Stack.Screen>
            <Stack.Screen name="Calendar" component={CalendarView} />
            <Stack.Screen name="Grid" component={GridView} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="SignUp" options={{headerLeft: props => <HeaderBackButton {...props} />, headerTitle: 'Sign up' }} component={SignUp}/>
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