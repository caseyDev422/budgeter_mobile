import React from 'react';
import { BottomSheet, ListItem } from '@rneui/themed';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native';
import { Menu } from '../../models/enums/MenuTitles';
import { MenuItem } from '../../models/MenuItem';

interface BottomMenuProps {
  navigation: any; // TODO: fix any type
  showMenu: boolean;
  onToggleMenu: (showMenu: boolean) =>  void;
}

const BottomMenu = ({navigation, showMenu, onToggleMenu}: BottomMenuProps) => {
  const menu: MenuItem[] = Object.values(Menu).map((title) => ({
    title,
    onPress: () => {
      navigation.navigate(title);
      console.log(`${title} pressed`);
    },
  }));
  
 return (
  <SafeAreaView>
    <BottomSheet isVisible={showMenu} onBackdropPress={() => onToggleMenu(false)}>
    {menu.map((item, i) => (
  <ListItem
    key={i}
    containerStyle={{ backgroundColor: 'white', ...item.containerStyle }}
    onPress={item.onPress}
    android_ripple={{
      color: 'lightgray', // set a contrasting ripple color
      borderless: false,
      foreground: true
    }}
  >
    <ListItem.Content>
      <ListItem.Title style={item.titleStyle}>{item.title}</ListItem.Title>
    </ListItem.Content>
  </ListItem>
))}

    </BottomSheet>
  </SafeAreaView>

)}

export default BottomMenu;