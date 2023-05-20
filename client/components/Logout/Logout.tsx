import { Text } from '@rneui/base';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { View } from 'react-native';
import { Dialog } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import useToast from '../../hooks/useToast';

interface LogoutProps {
  toggleModal: boolean;
  setToggleModal: Dispatch<SetStateAction<boolean>>
  setShowMenu: Dispatch<SetStateAction<boolean>>
  setVisible: Dispatch<SetStateAction<boolean>>
}

const Logout = (props: LogoutProps) => {
  const navigation = useNavigation();
  const { message, setMessage, showToast } = useToast();

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
    setMessage({
      type: 'success',
      text1: 'Logout',
      text2: 'You have logged out successfully.'
    });
    navigation.navigate('Login' as never);
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