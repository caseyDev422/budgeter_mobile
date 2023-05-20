import React, {useState} from 'react';
import { BottomSheet, ListItem } from '@rneui/themed';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native';
import { Menu } from '../../models/enums/MenuTitles';
import { MenuItem } from '../../models/MenuItem';
import { MenuProps } from '../MenuButton/MenuButton';
import { useNavigation } from '@react-navigation/native';
import Logout from '../Logout/Logout';

const BottomMenu = (props: MenuProps) => {
  const [toggleModal, setToggleModal] = useState(false)
  const navigation = useNavigation();
  const menu: MenuItem[] = Object.values(Menu).map((title) => ({
    title,
    onPress: () => {
      console.log(`${title} pressed`);
      if (title === Menu.LOGOUT) {
        handleLogoutModal();
      } else {
        navigation.navigate(title as unknown as never);
        props.setShowMenu(false);
      }
    },
  }));

  const handleLogoutModal = () => {
    console.log('LOGOUT MODAL START');
    props.setShowMenu(false);
    setToggleModal(true);
  }
  
 return (
   <SafeAreaView>
     {toggleModal ? (
       <Logout
         toggleModal={toggleModal}
         setToggleModal={setToggleModal}
         setShowMenu={props.setShowMenu}
         setVisible={props.setVisible}
       />
     ) : (
       <BottomSheet
         isVisible={props.showMenu}
         onBackdropPress={() => props.setShowMenu(false)}>
         {menu.map((item, i) => (
           <ListItem
             key={i}
             containerStyle={{backgroundColor: 'white', ...item.containerStyle}}
             onPress={item.onPress}
             android_ripple={{
               color: 'lightgray', // set a contrasting ripple color
               borderless: false,
               foreground: true,
             }}>
             <ListItem.Content>
               <ListItem.Title style={item.titleStyle}>
                 {item.title}
               </ListItem.Title>
             </ListItem.Content>
           </ListItem>
         ))}
       </BottomSheet>
     )}
   </SafeAreaView>
 );}

export default BottomMenu;