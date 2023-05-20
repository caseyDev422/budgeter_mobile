import React from 'react';
import { BottomSheet, ListItem } from '@rneui/themed';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native';
import { Menu } from '../../models/enums/MenuTitles';
import { MenuItem } from '../../models/MenuItem';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../models/types/RootStackParamList.type';
import { MenuProps } from '../MenuButton/MenuButton';
import { useNavigation } from '@react-navigation/native';

const BottomMenu = (props: MenuProps) => {
  const navigation = useNavigation();
  const menu: MenuItem[] = Object.values(Menu).map((title) => ({
    title,
    onPress: () => {
      console.log(`${title} pressed`);
      navigation.navigate(title as unknown as never);
    },
  }));
  
 return (
  <SafeAreaView>
    <BottomSheet isVisible={props.showMenu} onBackdropPress={() => props.setShowMenu(false)}>
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