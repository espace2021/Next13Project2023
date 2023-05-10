'use client';
import React from "react";
import Image from 'next/image';
import { auth } from "../../firebaseConfig";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const Welcome = () => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  return (
    <main className="welcome">
      <h2>Welcome to our Chat.</h2>
       <p>Sign in with Google to chat with our staff.</p>
      <button className="sign-in">
      <Image
            onClick={googleSignIn}
            src="/images/GoogleSignin.png"
            alt="sign in with google"
            type="button"
            width="40"
            height="40"
            priority={true} 
          />
      </button>
    </main>
  );
};

export default Welcome;