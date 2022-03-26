import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCTDs3vAeE3NQop0s5jsrKPf5rRJRhHJ4g",
    authDomain: "twitter-clone-30f5a.firebaseapp.com",
    projectId: "twitter-clone-30f5a",
    storageBucket: "twitter-clone-30f5a.appspot.com",
    messagingSenderId: "216166400205",
    appId: "1:216166400205:web:6b4c7d0f42a60341e9a984"
  };

  // Initialize Firebase
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);


export default app;
export { db, storage };

