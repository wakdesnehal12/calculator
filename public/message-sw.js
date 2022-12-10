importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');



// const firebaseConfig = {
//     apiKey: "AIzaSyDm6JPvNcYZ8NQQljgxWuOJce6SEAYenA4",
//     authDomain: "notification-app-3928f.firebaseapp.com",
//     projectId: "notification-app-3928f",
//     storageBucket: "notification-app-3928f.appspot.com",
//     messagingSenderId: "373783904649",
//     appId: "1:373783904649:web:466afb8b15805b49  0f2158"
    
//   };

//   firebase.initializeApp(firebaseConfig)


firebase.initializeApp({
    messagingSenderId: "951815921982"
});

const initMessaging = firebase.messaging();
console.log(initMessaging + 'test');

