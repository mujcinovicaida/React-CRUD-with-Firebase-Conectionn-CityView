import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCBS1ZCvt3imM7VbijwZajjfie3QQ85080",
    authDomain: "city-view-245b1.firebaseapp.com",
    projectId: "city-view-245b1",
    storageBucket: "city-view-245b1.appspot.com",
    messagingSenderId: "1027294795972",
    appId: "1:1027294795972:web:f136bb7da2935d93d95191"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

 

// import firebase from "firebase";
// import "firebase/firestore"

// const firebaseConfig = {
//     apiKey: "AIzaSyCBS1ZCvt3imM7VbijwZajjfie3QQ85080",
//     authDomain: "city-view-245b1.firebaseapp.com",
//     projectId: "city-view-245b1",
//     storageBucket: "city-view-245b1.appspot.com",
//     messagingSenderId: "1027294795972",
//     appId: "1:1027294795972:web:f136bb7da2935d93d95191"
// }

// firebase.initializeApp(firebaseConfig)

// export default firebase;