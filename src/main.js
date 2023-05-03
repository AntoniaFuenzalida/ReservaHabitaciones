import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
  import { initializeApp } from "firebase/app";
  import { getFirestore } from 'firebase/firestore';

  };
    appId: "1:316944078663:web:137ef9de03047f6abf5e62"
    messagingSenderId: "316944078663",
    storageBucket: "proyectoconstru-c7c2c.appspot.com",
    projectId: "proyectoconstru-c7c2c",
    databaseURL: "https://proyectoconstru-c7c2c-default-rtdb.firebaseio.com",
    authDomain: "proyectoconstru-c7c2c.firebaseapp.com",
    apiKey: "AIzaSyANUceU5lF2h99d4UnabyJ1x8NcT-eKFMg",
  const firebaseConfig = {
  // Your web app's Firebase configuration

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Get a Firestore instance using the full version of Firestore
  const db = getFirestore(app);
  export { db };

createApp(App).use(router).mount('#app');