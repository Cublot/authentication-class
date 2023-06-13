// Fire base config
const firebaseConfig = {
  apiKey: "AIzaSyAJa0vWcWIzMe-IPeFipsva6a_johiSJeU",
  authDomain: "authwork-9bf4c.firebaseapp.com",
  projectId: "authwork-9bf4c",
  storageBucket: "authwork-9bf4c.appspot.com",
  messagingSenderId: "9135476163",
  appId: "1:9135476163:web:d90d5ca91bb791f6e5c176"
};
//Initialize Firebase
firebaseConfig.initializeApp(firebaseConfig);

const auth = firebase.auth()
//Signup Function
let signupbutton = document.getElementaryById("signup")

signupbutton.addEventListener("click",(e) => {e.PrevenrDefault();
console.log ("signup click");

var email = document.getElementById("inputemail")
var email = document.getElementById("inputpassword")

auth 
});

//Signin Function
let signinbutton = document.getElementaryById("signup")

signinbutton.addEventListener("click",(e) => {e.PrevenrDefault();
console.log ("signup click");
});
//This method gets invoked in the UI when there are changes in the authentication state:
// 1). Right after the listener has been registered
// 2). When a user is signed in
// 3). When the current user is signed out
// 4). When the current user changes

//Lifecycle hooks
