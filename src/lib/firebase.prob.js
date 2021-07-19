import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBPBCVAFsb4s-Bw_1yMgLZl2ui0m5Ju2uY",
  authDomain: "netflix-clone-e40ef.firebaseapp.com",
  projectId: "netflix-clone-e40ef",
  storageBucket: "netflix-clone-e40ef.appspot.com",
  messagingSenderId: "476001548364",
  appId: "1:476001548364:web:801602e8553d15798fdce9",
};

const firebase = Firebase.initializeApp(config);

export { firebase };
