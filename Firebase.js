// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVX0lxVzGlccYTxZwZsvsAf6NPmf0VwbE",
  authDomain: "mysocialapp-71268.firebaseapp.com",
  databaseURL: "https://mysocialapp-71268-default-rtdb.firebaseio.com",
  projectId: "mysocialapp-71268",
  storageBucket: "mysocialapp-71268.appspot.com",
  messagingSenderId: "95488573632",
  appId: "1:95488573632:web:c93222a157b22378d0ad25",
};

// Initialize Firebase 
 const app = initializeApp(firebaseConfig);
 export default app