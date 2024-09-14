import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseConfig';

const signInUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log('User signed in:', user);
  } catch (error) {
    console.error('Error signing in user:', error.message);
  }
};
