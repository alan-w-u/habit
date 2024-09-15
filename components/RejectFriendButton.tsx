// RejectFriendButton.tsx
import React from 'react';
import { Button, StyleSheet, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface RejectFriendButtonProps {
  onPress: () => void;
}

const RejectFriendIcon: React.FC<RejectFriendButtonProps> = ({onPress}) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Icon name="times" size={30} color="grey" />
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
  },
});

export default RejectFriendIcon;
