import { useEffect } from "react";
import { requestForToken } from "./firebase";

importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// firebase.initializeApp({
//     messagingSenderId: "951815921982"
// });
firebase.initializeApp(firebaseConfig);

const app = firebase.messaging();   

// const Noti = () => {
//     requestForToken();
// }

useEffect(() => {
    requestForToken();
})

// export default Msg;
