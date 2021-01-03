import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBBHf4J_rMIfq3pT891krwdDno6FxcjNjg",
    authDomain: "whatsapp-clone-99e6a.firebaseapp.com",
    projectId: "whatsapp-clone-99e6a",
    storageBucket: "whatsapp-clone-99e6a.appspot.com",
    messagingSenderId: "563914462898",
    appId: "1:563914462898:web:b702c47850520395091bab",
    measurementId: "G-Y12SQFR37V"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;
