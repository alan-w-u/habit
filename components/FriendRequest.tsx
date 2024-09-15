import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import AcceptFriendIcon from './AcceptFriendButton';
import RejectFriendIcon from './RejectFriendButton';
import { acceptFriendRequest } from '../friendRequests';
import { rejectFriendRequest } from '../friendRequests';
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { auth } from '@/firebaseConfig';
import { useEffect, useState } from 'react';
import React from 'react';

const imageMap: { [key: string]: any } = {
  1: require('@/assets/profile-pictures/pfp1.png'),
  2: require('@/assets/profile-pictures/pfp2.png'),
  3: require('@/assets/profile-pictures/pfp3.png'),
  4: require('@/assets/profile-pictures/pfp4.png'),
  5: require('@/assets/profile-pictures/pfp5.png'),
  6: require('@/assets/profile-pictures/pfp6.png')
};

interface FriendRequestProps {
  name: string;
  pictureNumber: number;
  senderId: string;
}

const FriendRequest: React.FC<FriendRequestProps> = ({ name, pictureNumber }) => {
  const profileImage = imageMap[pictureNumber];
  const [userName, setUserName] = useState<string | null>(null);
  const senderId = auth.currentUser?.uid;
  const [requests, setRequests] = React.useState([]);

  useEffect(() => {
    const fetchUserName = async () => {
      if (senderId) {
        const userRef = doc(getFirestore(), 'users', senderId);
        const userDoc = await getDoc(userRef);
        if (userDoc.exists()) {
          setUserName(userDoc.data().name || 'Unknown'); // Update state with user's name
        }
      }
    }
  });


  // try {
  //   // Query the 'friendRequests' collection where the recipient is the current user
  //   const friendRequestsQuery = query(collection(db, 'friendRequests'), where('senderId', '==', senderId));
  //   const querySnapshot = await getDocs(friendRequestsQuery);


  //   // Create an array to store the requests
  //   const requestsArray = [];

  //   // Iterate over all friend requests
  //   querySnapshot.forEach((doc) => {
  //     const requestData = doc.data();
  //     const requestId = requestData.senderId;
  //     const senderName = requestData.name;
  //     requestsArray.push({ id: requestId, senderName });
  //   });
  // } catch (error) {
  //   console.error('Error fetching friend requests:', error);
  // }

  return (
    <View style={[styles.requestContainer]}>
      <Image source={profileImage} style={{ width: 50, height: 50, borderRadius: 100 }} />
      <Text style={styles.text}>{name}</Text>
      <View style={styles.requestButtons}>
        <View style={styles.acceptButton}>
          <AcceptFriendIcon onPress={acceptFriendRequest} />
        </View>
        <View style={styles.denyButton}>
          <RejectFriendIcon onPress={rejectFriendRequest} />
        </View>
      </View>
    </View>
  );
};


//   return (
//     <View style={[styles.requestContainer]}>
//       {/* <Image source={profileImage} style={{ width: 50, height: 50, borderRadius: 100 }} /> */}
//       {requests.map((request) => (
//         <View key={request.senderId} style={styles.box}>
//           <Text style={styles.text}>{request.senderName}</Text>
//           <View key={request.id} style={styles.box}>
//             <View style={styles.acceptButton}>
//               <AcceptFriendIcon onPress={acceptFriendRequest} />
//             </View>
//             <View style={styles.denyButton}>
//               <RejectFriendIcon onPress={rejectFriendRequest} />
//             </View>
//           </View>
//         </View>
//       ))}
//     </View>
//   )
// };

const styles = StyleSheet.create({
  requestContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: 300,
    height: 75,
    paddingHorizontal: 10,
    backgroundColor: '#fcefb4',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 'auto'
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#343a40'
  },
  requestButtons: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 'auto'
  },
  acceptButton: {
    backgroundColor: '#cdf0e0',
    borderRadius: 10,
    marginRight: 5
  },
  acceptText: {
    width: 50,
    height: 50,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  denyButton: {
    backgroundColor: '#ffd6dd',
    borderRadius: 10,
    marginLeft: 5
  },
  denyText: {
    width: 50,
    height: 50,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
  },
});

export default FriendRequest;
