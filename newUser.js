import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseConfig';

export const registerUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log('User registered:', user);
  } catch (error) {
    console.error('Error registering user:', error.message);
  }
};

