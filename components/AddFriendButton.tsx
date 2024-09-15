// AddFriendButton.tsx
import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

interface AddFriendButtonProps {
  onPress: () => void;
}

const AddFriendButton: React.FC<AddFriendButtonProps> = ({ onPress }) => {
  return (
    <View style={styles.buttonContainer}>
      <Button title="Add Friend" onPress={onPress} />
    </View>
  );
};


const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
  },
});

export default AddFriendButton;
