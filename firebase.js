// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCdWCqGN05TOUvEuY5iC3R9Y-d8wh_KjEk",
    authDomain: "clone-4a31e.firebaseapp.com",
    projectId: "clone-4a31e",
    storageBucket: "clone-4a31e.appspot.com",
    messagingSenderId: "781165361437",
    appId: "1:781165361437:web:e62c38f266f97e3d5509f4",
    measurementId: "G-FDK7QL1TK1"
  };

  const app = !firebaseConfig.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

  const db = app.firestore()

  export { db } 