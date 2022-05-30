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
