// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDH_wnzE3U1iwA_21DHQ4ohL6uB-WgC76w',
  authDomain: 'tech-net-1e721.firebaseapp.com',
  projectId: 'tech-net-1e721',
  storageBucket: 'tech-net-1e721.appspot.com',
  messagingSenderId: '165458586383',
  appId: '1:165458586383:web:c1e8ce883a893e60532c7a',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
