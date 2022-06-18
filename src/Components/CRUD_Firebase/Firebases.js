import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
const firebaseConfig = {
  apiKey: "AIzaSyDNl1IeDHONvW_zUlQLk80CqVlOHoNsc4M",
  authDomain: "fir-8b5e2.firebaseapp.com",
  projectId: "fir-8b5e2",
  storageBucket: "fir-8b5e2.appspot.com",
  messagingSenderId: "217398063521",
  appId: "1:217398063521:web:d2ea418846689e30999be0"
};

firebase.initializeApp(firebaseConfig);
export const dataRef=firebase.database();
export default firebase;