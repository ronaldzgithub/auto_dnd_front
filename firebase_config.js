// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
// import "https://www.gstatic.com/firebasejs/ui/6.0.1/firebase-ui-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyANm47YWgqEwHI43Ho-P6PRzLd0SRaPQdY",
    authDomain: "auto-dnd-2ebcb.firebaseapp.com",
    projectId: "auto-dnd-2ebcb",
    storageBucket: "auto-dnd-2ebcb.appspot.com",
    messagingSenderId: "109641453328",
    appId: "1:109641453328:web:a517ce58e25dffbf3d9f95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log('app', app)

const ui = new firebaseui.auth.AuthUI(firebase.auth())
console.log('ui', ui)

export default app;