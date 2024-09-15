// AddFriendComponent.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { acceptFriendRequest, rejectFriendRequest } from "../friendRequests.js"
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../firebaseConfig.js'; 


interface AcceptOrDenyFriendComponentProps {
  onAccept: () => void;
  requestId: string;
  requester: string;
}

const AcceptOrDenyComponent: React.FC<AcceptOrDenyFriendComponentProps> = ({ onAccept, requestId, requester}) => {
  const [name, setName] = useState<string>(''); 
  const [email, setEmail] = useState<string>(''); 
  const [error, setError] = useState<string | null>(null);

  // Event handler for accepting the friend request
  const handleRegisterClick = async () => {

    Alert.alert(
      "Friend Request", requester,
      [{
          text: "Reject",                 
          onPress: () => rejectFriendRequest(),
          style: "cancel",              
        },
        {
          text: "Accept",
          onPress: () => acceptFriendRequest(), 
        },
      ],
      { cancelable: true }
    );

    setError(null); 
    try {
      // const receiverId = await getReceiverIdByEmail(email);
      await acceptFriendRequest(requestId);
      console.log('Accepted friend request from:', requestId);
      onAccept();

    } catch (error) {
      setError('Accepting friend request failed');
      console.error(error);
    }
  };  

  return (
    <View style={styles.container}>
      <Button title="Pending Friend Request" onPress={handleRegisterClick} />
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

export default AcceptOrDenyComponent;


