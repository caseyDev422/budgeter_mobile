import React, { Dispatch, SetStateAction, useState } from 'react';
import { View } from 'react-native';
import BottomMenu from '../BottomMenu/BottomMenu';
import { FAB } from 'react-native-elements';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../models/types/RootStackParamList.type';
import { useNavigation } from '@react-navigation/native';

export interface MenuProps {
  showMenu: boolean;
  visible: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
  setVisible: Dispatch<SetStateAction<boolean>>
}

const MenuButton = (props: MenuProps) => {
  return (
    <View>
      <FAB
        visible={props.visible}
        placement="right"
        onPress={() => props.setShowMenu(!props.showMenu)}
        icon={{name: 'add', color: 'white'}}
        color="green"
      />
      <BottomMenu {...props} />
    </View>
  );
}

export default MenuButton;