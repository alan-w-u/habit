import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "./firebaseConfig";

/**
 * Function to get the receiver's Firestore document ID by email.
 * @param email - The email address of the user to look up.
 * @returns The Firestore document ID of the user, or null if not found.
 */
export async function getReceiverIdByEmail(email) {
    try {
        // Create a query against the 'users' collection where the email matches
        const q = query(collection(db, "users"), where("email", "==", email));

        // Execute the query
        const querySnapshot = await getDocs(q);

        // Check if no users were found
        if (querySnapshot.empty) {
            console.log("No user found with the given email.");
            return null; // Return null if no matching user
        }

        // Get the first matching document (assuming emails are unique)
        const doc = querySnapshot.docs[0]; // Taking the first match

        // Return the document ID (user's unique ID)
        return doc.id;
    } catch (error) {
        console.error("Error finding user by email:", error);
        return null;
    }
}
