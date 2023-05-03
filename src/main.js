import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANUceU5lF2h99d4UnabyJ1x8NcT-eKFMg",
  authDomain: "proyectoconstru-c7c2c.firebaseapp.com",
  databaseURL: "https://proyectoconstru-c7c2c-default-rtdb.firebaseio.com",
  projectId: "proyectoconstru-c7c2c",
  storageBucket: "proyectoconstru-c7c2c.appspot.com",
  messagingSenderId: "316944078663",
  appId: "1:316944078663:web:137ef9de03047f6abf5e62"
};

// Initialize Firebase
const db = initializeApp(firebaseConfig);

export default db


createApp(App).use(router).mount('#app')
