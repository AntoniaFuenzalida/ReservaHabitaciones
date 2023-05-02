import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANUceU5lF2h99d4UnabyJ1x8NcT-eKFMg",
  authDomain: "proyectoconstru-c7c2c.firebaseapp.com",
  databaseURL: "https://proyectoconstru-c7c2c-default-rtdb.firebaseio.com/",
  projectId: "proyectoconstru-c7c2c",
  storageBucket: "proyectoconstru-c7c2c.appspot.com",
  messagingSenderId: "316944078663",
  appId: "1:316944078663:web:137ef9de03047f6abf5e62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);