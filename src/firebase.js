import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDLJK1cjK6RPgW06FJhWOtsts5NbiMhdzk",
  authDomain: "clothes-store-cc15c.firebaseapp.com",
  projectId: "clothes-store-cc15c",
  storageBucket: "clothes-store-cc15c.firebasestorage.app",
  messagingSenderId: "910365752285",
  appId: "1:910365752285:web:73bc9d80e7b7a24c191434",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
