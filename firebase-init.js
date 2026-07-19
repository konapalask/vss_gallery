// Firebase SDK Configuration & Initialization
// Replace these placeholders with your actual Firebase project configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBF07-DNoECLPVMV0_afsMSnHNCBbt9QOM",
    authDomain: "vsspro-12509.firebaseapp.com",
    projectId: "vsspro-12509",
    storageBucket: "vsspro-12509.firebasestorage.app",
    messagingSenderId: "751077158459",
    appId: "1:751077158459:web:84c027532803067c4df61e",
    measurementId: "G-74QJN80L3S"
};

// Initialize Firebase
try {
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const db = getFirestore(app);
    const storage = getStorage(app);
    const auth = getAuth(app);
    
    // Auth Guard: Check if user is logged in
    // If not logged in and not on the login page (index.html), redirect to login
    onAuthStateChanged(auth, (user) => {
        const isLoginPage = window.location.pathname.endsWith('index.html') || window.location.pathname === '/';
        
        if (!user && !isLoginPage) {
            // Redirect to login page, handling nested directories like imgpages/
            const depth = window.location.pathname.split('/').length - 1;
            const prefix = window.location.pathname.includes('/imgpages/') ? '../' : './';
            window.location.href = prefix + 'index.html';
        } else if (user && isLoginPage) {
            // If logged in and on login page, redirect to gallery
            window.location.href = './gallery.html';
        }
    });

    console.log("Firebase successfully initialized");
    
    // Expose to window for global access
    window.firebase = { app, analytics, db, storage, auth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup };
} catch (error) {
    console.error("Firebase initialization error:", error);
}
