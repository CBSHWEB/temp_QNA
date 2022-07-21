import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import firebaseConfig from './firebase.json'

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     databaseURL: process.env.REACT_APP_FIREBASE_DATA_BASEURL,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
//     appId: process.env.REACT_APP_FIREBASE_APPID,
//     measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID
// };
 

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };