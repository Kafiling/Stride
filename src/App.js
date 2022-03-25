import logo from './logo.svg';
import './App.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAByVAgqZdl4VGXO4l1aA5svaOHh_OCOaA",
  authDomain: "my-stride.firebaseapp.com",
  projectId: "my-stride",
  storageBucket: "my-stride.appspot.com",
  messagingSenderId: "902869156644",
  appId: "1:902869156644:web:601c5dd5cf9bcc5be629b1",
  measurementId: "G-NW7GVF488Q"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div className="App">

    </div>
  );
}

export default App;
