import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import { app, db } from './firebaseConfig';


// Function to get pending requests
export async function getPendingRequests(userId) {
  const friendRequestsRef = collection(db, 'friendRequests');
  const q = query(friendRequestsRef, where('receiverId', '==', userId), where('status', '==', 'pending'));

  try {
    const querySnapshot = await getDocs(q);
    const pendingRequests = [];
    querySnapshot.forEach((doc) => {
      pendingRequests.push(doc.data());
    });
    return pendingRequests;
  } catch (error) {
    console.error('Error fetching pending requests:', error);
    return [];
  }
}

export default getPendingRequests;