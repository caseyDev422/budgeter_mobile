import React, { useState } from 'react';
import Toast, { ToastShowParams } from 'react-native-toast-message';

const useToast = () => {
  const MESSAGE_INIT_STATE: ToastShowParams = {
    type: undefined,
    text1: "",
    text2: "",
    onPress: () => Toast.hide()
  }
  const [message, setMessage] = useState(MESSAGE_INIT_STATE);

  const showToast = () => {
    console.log('SHOW TOAST');
    Toast.show(message);
  }

  const hideToast = () => {
    Toast.hide();
  }
  
  return {
    message,
    setMessage,
    showToast,
    hideToast
  }
}

export default useToast;

