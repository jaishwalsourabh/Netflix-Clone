import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDiSrxj6dykIJZV43SoW_dbly2njrEk2Yo",
  authDomain: "netflix-clone-web-2959b.firebaseapp.com",
  projectId: "netflix-clone-web-2959b",
  storageBucket: "netflix-clone-web-2959b.appspot.com",
  messagingSenderId: "1081226032257",
  appId: "1:1081226032257:web:1481a7087a3dc929064980",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;