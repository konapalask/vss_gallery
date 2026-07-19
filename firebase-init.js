// Firebase SDK Configuration & Initialization
// Replace these placeholders with your actual Firebase project configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js";

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
    console.log("Firebase successfully initialized");
    
    // Example: Expose to window for global access if needed
    window.firebase = { app, analytics, db, storage };
} catch (error) {
    console.error("Firebase initialization error:", error);
}
