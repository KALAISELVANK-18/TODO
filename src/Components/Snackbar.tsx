import React, { useState } from 'react';
import { Snackbar } from 'react-native-paper';

interface SnackbarComponentProps {
  visible: boolean;
  onDismiss: () => void;
  message: string;
}

const SnackbarComponent: React.FC<SnackbarComponentProps> = ({ visible, onDismiss, message }) => {
  return (
    <Snackbar
      visible={visible}
      onDismiss={onDismiss}
      duration={Snackbar.DURATION_SHORT}
    >
      {message}
    </Snackbar>
  );
};

export default SnackbarComponent;
