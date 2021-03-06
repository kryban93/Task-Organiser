import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import firebaseConfig from './config/config';

const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
export const database = firebase.firestore();
export default app;
