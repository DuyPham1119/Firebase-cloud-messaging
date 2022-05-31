const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging()

function SubcribeUser() {
    Notification.requestPermission().then(permission => {
        console.log(permission)
        if (permission == 'granted') {
            messaging.getToken({ vapidKey: "" })
                .then(currentToken => {
                    console.log(currentToken)
                    document.getElementById("TokenId").innerHTML = currentToken
                })
        }
    })
}

messaging.onMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
    };
    
    if (notificationTitle && notificationOptions) {
        navigator.serviceWorker.ready.then(function(registration) {
            registration.showNotification(notificationTitle, notificationOptions)})
    }
  });
