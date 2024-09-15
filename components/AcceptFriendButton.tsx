// AddFriendButton.tsx
import React from 'react';
import { Button, StyleSheet, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface AddFriendButtonProps {
  onPress: () => void;
}

const AcceptFriendIcon: React.FC<AddFriendButtonProps> = ({ onPress }) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Icon name="check" size={30} color="green" />
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
  },
});

export default AcceptFriendIcon;
