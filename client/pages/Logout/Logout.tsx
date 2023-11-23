import { Text } from '@rneui/base';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { View } from 'react-native';
import { Dialog } from '@rneui/themed';
import { RouteProp, useNavigation } from '@react-navigation/native';
import useToast from '../../hooks/useToast';
import { RootStackParamList } from '../../models/types/RootStackParamList.type';
import { StackNavigationProp } from '@react-navigation/stack';

interface LogoutProps {
  toggleModal: boolean;
  setToggleModal: Dispatch<SetStateAction<boolean>>
  setShowMenu: Dispatch<SetStateAction<boolean>>
  setVisible: Dispatch<SetStateAction<boolean>>
}

const Logout = (props: LogoutProps) => {
  const { message, setToast, showToast, hideToast, resetToast } = useToast();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  useEffect(() => {
    showToast();
  }, [message]);

  const handleCancel = () => {
    props.setToggleModal(false);
    props.setShowMenu(true);
  }

  const handleConfirm = () => {
    props.setShowMenu(false);
    props.setVisible(false);
    setToast(
      'success',
      'Logout',
      'You have logged out successfully.',
      () => {
        hideToast();
        resetToast();
      }
    );
    navigation.navigate('Login');
  }

  return (
    <View>
        <Dialog
        isVisible={true}
        onBackdropPress={() => props.setToggleModal(!props.toggleModal)}
        >
          <Text>Are you sure you want to logout?</Text>
          <Dialog.Button onPress={handleConfirm}>Logout</Dialog.Button>
          <Dialog.Button onPress={handleCancel}>Cancel</Dialog.Button>
        </Dialog>
    </View>
  )
}

export default Logout;