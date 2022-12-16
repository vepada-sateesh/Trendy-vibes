import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDOvPHPwLh2f61gKgGqrihMNCWX8-iOFyE",
  authDomain: "diligent-pies-1359.firebaseapp.com",
  databaseURL: "https://diligent-pies-1359-default-rtdb.firebaseio.com",
  projectId: "diligent-pies-1359",
  storageBucket: "diligent-pies-1359.appspot.com",
  messagingSenderId: "640446507684",
  appId: "1:640446507684:web:3e77a5256af824acbad431",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
