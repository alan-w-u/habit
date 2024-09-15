// AddFriendComponent.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { sendFriendRequest } from "../friendRequests.js"
import { getDocs, collection, query, where, addDoc} from 'firebase/firestore';
import { db } from '../firebaseConfig'; 

interface AddFriendComponentProps {
  onAdd: () => void;
  senderId: string;
}

const AddFriendComponent: React.FC<AddFriendComponentProps> = ({ onAdd, senderId }) => {
  const [email, setEmail] = useState<string>(''); // State to capture recipient's email
  const [error, setError] = useState<string | null>(null);

  // Event handler for sending the friend request
  const handleRegisterClick = async () => {
    setError(null); // Reset error state before the async operation
    try {
      // Get the receiver's ID using their email (asynchronously)
      const receiverId = await getReceiverIdByEmail(email);

      // Send the friend request once receiverId is obtained
      await sendFriendRequest(senderId, receiverId);
      console.log('Sent friend request to:', receiverId);

      // Call onAdd callback to notify the parent component
      onAdd();

    } catch (error) {
      setError('Sending friend request failed');
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add Friend</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <Button title="Send Friend Request" onPress={handleRegisterClick} />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

async function getReceiverIdByEmail(email: string): Promise<string | null> {
  const q = query(collection(db, 'users'), where('email', '==', email));
  const querySnapshot = await getDocs(q);
  
  if (querySnapshot.empty) {
    return null;
  } else {
    const doc = querySnapshot.docs[0];
    return doc.id; // Returning the user ID of the first match
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: '100%',
    maxWidth: 400,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
});

export default AddFriendComponent;


