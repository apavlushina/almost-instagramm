import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// do it once to make a seed
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyDWPiIdimGG6MYoeHd3swT-fVyTP_LR84g',
  authDomain: 'almost-instagramm.firebaseapp.com',
  projectId: 'almost-instagramm',
  storageBucket: 'almost-instagramm.appspot.com',
  messagingSenderId: '619227423846',
  appId: '1:619227423846:web:481e85ee6c1f87197739a7'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// seedDatabase(firebase);

export { firebase, FieldValue };
