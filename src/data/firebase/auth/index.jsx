import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { checkUser } from "../firestore";
import { setUser } from "../../local";

const auth = getAuth();
const provider = new GoogleAuthProvider();

export default function signIn (signInCallback) {
    
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // console.log(user);
    checkUser(user).then(x => { 
      signInCallback(x);
      setUser({uid: x.id});
    });
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
} 
