// import React, { useEffect, useState } from 'react';
// import { toast } from 'react-toastify';
// import Toaster from 'toaster';
// import { requestForToken } from './firebase';

// export default function Message() {
//     const [notification, setNotification] = useState({title: '', body: ''});

//     const notify = () => toast(<ToastDisplay/>);
//     function ToastDisplay(){
//         return(
//             <div>
//                 <p>{notification.title}</p>
//                 <p>{notification.body}</p>
//             </div>
//         );
//     }

//     useEffect(() => {
//         if (notification?. title){
//             notify()
//         }
//     }, [notification])

//     requestForToken();

//     onMessageListener()
//         .then((payload) => {
//             setNotification({title: payload?.notification?.title, body: payload?.notification?.body})
//         })

//         .catch((err) => console.log('failed', err));
//   return (
//     <div>
//         <Toaster/>
//     </div>
//   )
// }