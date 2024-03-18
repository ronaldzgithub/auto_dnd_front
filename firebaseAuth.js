// If user is not authenticated, redirect to login page
// If user is authenticated, retrieve and return the ID token

export function initializeFirebaseAndGetToken() {
    const firebaseConfig = {
        apiKey: "AIzaSyAVDZif0BAgnypHbgUhyIBUbOel72iXFaY",
        authDomain: "lustrous-optics-227404.firebaseapp.com",
        projectId: "lustrous-optics-227404",
        storageBucket: "lustrous-optics-227404.appspot.com",
        messagingSenderId: "826365850161",
        appId: "1:826365850161:web:e2460759f02c49b28c9b10"
    };

    // Initialize Firebase
    const app = firebase.initializeApp(firebaseConfig);

    // Check for authentication state change
    return new Promise((resolve, reject) => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                console.log("User is authenticated with ID:", user.uid);
                // Retrieve and return the ID token
                user.getIdToken().then(idToken => {
                    resolve({idToken, email: user.email});
                }).catch(error => {
                    console.log("Error retrieving user ID token:", error);
                    reject(error);
                });
            } else {
                console.log("No user is authenticated.");
                window.location.href = "/login.html";
                reject("No user is authenticated.");
            }
        });
    });
}
