import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, getFirestore } from 'firebase/firestore';
import { auth, db } from './firebaseConfig';

export const registerUser = async (name, email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    const userId = user.uid;
    const userRef = doc(db, 'users', userId);
    const userData = {
      name: name,
      email: email,
    };
    await setDoc(userRef, userData);
  } catch (error) {
    console.error('Error registering user:', error.message);
  }
};

