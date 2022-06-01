const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
};

const MasterKey = ""
const bin = "6295c2f905f31f68b3afb3c4"
const server_key = ""

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
                    sendKey(currentToken, server_key)
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


function sendKey(registration_id, server_key) {

    let body = {
        "registration_id": registration_id,
        "server_key": server_key
    }

    let options = {
        method: "PUT",
        headers: new Headers({
            "X-Master-Key": MasterKey,
            "Content-Type": "application/json"
        }),
        body: JSON.stringify(body)
    }

    let url = `https://api.jsonbin.io/v3/b/${bin}`

    fetch(url, options)
    .then(res => {console.log(res)})
    .catch(e => console.log(e))
}