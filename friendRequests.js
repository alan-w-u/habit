import { db } from "./firebaseConfig";

// Function to send a friend request
export async function sendFriendRequest(senderId, receiverId) {
    try {
        await addDoc(collection(db, "friendRequests"), {
            senderId,
            receiverId,
            status: "pending",
            timestamp: new Date()
        });
        console.log("Friend request sent.");
    } catch (e) {
        console.error("Error sending friend request: ", e);
    }
}

// Function to accept a friend request
export async function acceptFriendRequest(requestId) {
    try {
        const requestRef = doc(db, "friendRequests", requestId);
        await updateDoc(requestRef, { status: "accepted" });

        // Fetch request details
        const requestDoc = await getDoc(requestRef);
        const { senderId, receiverId } = requestDoc.data();

        // Add sender to receiver's friends list
        await updateDoc(doc(db, "friends", receiverId), {
            friendIds: arrayUnion(senderId)
        });

        // Add receiver to sender's friends list
        await updateDoc(doc(db, "friends", senderId), {
            friendIds: arrayUnion(receiverId)
        });

        console.log("Friend request accepted.");
    } catch (e) {
        console.error("Error accepting friend request: ", e);
    }
}

// Function to reject a friend request
export async function rejectFriendRequest(requestId) {
    try {
        const requestRef = doc(db, "friendRequests", requestId);
        await updateDoc(requestRef, { status: "rejected" });
        console.log("Friend request rejected.");
    } catch (e) {
        console.error("Error rejecting friend request: ", e);
    }
}

// Function to get pending friend requests for a user
export async function getPendingFriendRequests(userId) {
    try {
        const q = query(collection(db, "friendRequests"), where("receiverId", "==", userId), where("status", "==", "pending"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
        });
    } catch (e) {
        console.error("Error getting pending friend requests: ", e);
    }
}

//   export default {sendFriendRequest, acceptFriendRequest, rejectFriendRequest, getPendingFriendRequests}