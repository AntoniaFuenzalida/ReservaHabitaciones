import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
  import { initializeApp } from "firebase/app";
  import { getFirestore } from 'firebase/firestore';

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
  const app = initializeApp(firebaseConfig);

  // Get a Firestore instance using the full version of Firestore
  const db = getFirestore(app);
  export { db };

createApp(App).use(router).mount('#app');