import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from 
"https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js"; 
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyBnP3EKZSY7fdBhP__NWuvQq6aFnj4Kt4Q",
  authDomain: "sign-up-login-form-eae80.firebaseapp.com",
  projectId: "sign-up-login-form-eae80",
  storageBucket: "sign-up-login-form-eae80.firebasestorage.app",
  messagingSenderId: "619047687216",
  appId: "1:619047687216:web:489d9672eada5a043ac9f5",
  measurementId: "G-6P7BKXETYP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app);
document.getElementById("signup-form").addEventListener('submit',(e)=>{
e.preventDefault();
let email=document.getElementById("signup-email").value;
let password=document.getElementById("signup-password").value;
createUserWithEmailAndPassword(auth, email, password)     
.then((userCredential) => {      
console.log("User signed up:", userCredential.user);     
alert("Signup successful!"); 
})    
.catch((error) => {     
console.error("Error:", error.message);      
 alert("Error: " + error.message);    
}); 
}); 

