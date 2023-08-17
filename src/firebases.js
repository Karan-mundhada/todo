import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseApp = initializeApp({
  apiKey: "AIzaSyBwvfgwqw-5MMWHlh900yer9CSU9ePfT8E",
  authDomain: "todo-app-3f466.firebaseapp.com",
  projectId: "todo-app-3f466",
  storageBucket: "todo-app-3f466.appspot.com",
  messagingSenderId: "993212233804",
  appId: "1:993212233804:web:6150798e361276e09c1ce9",
  measurementId: "G-BXVJ8HNSLY"
});
const db = getFirestore(firebaseApp)

export default db;