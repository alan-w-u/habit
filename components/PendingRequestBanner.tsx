import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Importing Expo Vector Icons
import AcceptFriendIcon from "./AcceptFriendButton";
import RejectFriendIcon from "./RejectFriendButton";
import { acceptFriendRequest, rejectFriendRequest } from '@/friendRequests';

interface RegisterButtonProps {
  // onPending: () => void; 
}

const PendingRequestBox: React.FC<RegisterButtonProps> = ({ }) => {
  const [name, setName] = React.useState<string>('');

  return (
    <View style={styles.box}>
      <Text style={styles.name}>{name}</Text>

      <View style={styles.iconsContainer}>
        <Text> </Text>
        <AcceptFriendIcon onPress={acceptFriendRequest} />
        <RejectFriendIcon onPress={rejectFriendRequest} />
      </View>
    </View>
  );
};

export default PendingRequestBox;

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',          // Align items horizontally
    alignItems: 'center',          // Align items vertically in the center
    padding: 10,
    margin: 10,
    borderWidth: 1,                // Box border
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#f9f9f9',    // Background color of the box
  },
  name: {
    fontSize: 18,
    flex: 1,                      // Pushes the name to the left and icons to the right
  },
  iconsContainer: {
    flexDirection: 'row',          // Icons appear next to each other
  },
  iconButton: {
    marginLeft: 10,                // Space between icons
  },
});
