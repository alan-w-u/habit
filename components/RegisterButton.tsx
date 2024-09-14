// RegisterButton.tsx
import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

interface RegisterButtonProps {
  onPress: () => void;
}

const RegisterButton: React.FC<RegisterButtonProps> = ({ onPress }) => {
  return (
    <View style={styles.buttonContainer}>
      <Button title="Register" onPress={onPress} />
    </View>
  );
};


const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
  },
});

export default RegisterButton;
