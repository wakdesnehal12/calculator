import {initializeApp} from 'firebase/app';
import {getMessaging, getToken, onMessage} from 'firebase/messaging';

const firebaseConfig = {
  apiKey: "AIzaSyAumLfr0-dxHQzGqj7avVxaAx_86mknahc",
  authDomain: "my-notification-95f2d.firebaseapp.com",
  projectId: "my-notification-95f2d",
  storageBucket: "my-notification-95f2d.appspot.com",
  messagingSenderId: "951815921982",
  appId: "1:951815921982:web:55b67a5e09864e73670c6f",
  measurementId: "G-PH32FD4JPK"
};
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig); 
const messaging = getMessaging(app);

export const requestForToken = () => {
    return getToken(messaging, {vapidKey: "BNz6I-Wl-PU6T_vXaOIc0qp5dmTjLFmUdrqAdZdEo7fcAMQR2V57rXBockn2e42B9QzKKtUWdaDLH5PqhaSZdOY"})
      .then((currentToken) => {
        if (currentToken) {
          console.log('Token: ', currentToken);
        }else{
          console.log('NO reguiilkl.');
        }
      })
      .catch((err) => {
        console.log('error ocurred', err);
      });
  };
console.log(messaging);
  // export const message = () => {
  //     new Promise((resolve) => {
  //         onMessage(messaging, (payload) => {
  //             resolve(payload);
  //         });
  //     });
  // }
