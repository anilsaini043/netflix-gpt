import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase.js';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from './Header';
import { checkValideData } from '../utils/validate.js';
import { addUser } from '../utils/store/userSlice.js';
import { BACKGROUND_IMAGE, USER_ICON } from "../utils/constants.js";

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleFormSubmit = (e) => {
        e.preventDefault()
        const message = checkValideData(email.current.value, password.current.value);
        setErrorMessage(message);
        if (message) return;

        // Sign in / sign up logic
        if (!isSignInForm) {
            // Sign up
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    // Update user profile after sign up
                    updateProfile(user, {
                        displayName: name.current.value, photoURL: USER_ICON
                    }).then(() => {
                        const { uid, email, displayName, photoURL } = auth.currentUser;  // Getting current updated user
                        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                    }).catch((error) => {
                        setErrorMessage(error.message)
                    });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage)
                });

        } else {
            // Sign in logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage)
                });
        }

    }

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    }

    return (
        <div>
            <Header />
            <div className='absolute inset-0'>
                <img src={BACKGROUND_IMAGE}
                    alt='logo'
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Overlay shadow */}
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="absolute inset-0 flex items-center justify-center">
                <form className="w-96 p-12 bg-black bg-opacity-80 rounded-md text-white opacity-80">
                    <h1 className="text-3xl font-semibold mb-6">
                        {isSignInForm ? "Sign In" : "Sign Up"}
                    </h1>
                    {!isSignInForm && <input
                        ref={name}
                        type="text"
                        placeholder="Full name"
                        className="w-full p-3 mb-4 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
                        onChange={(e) => {
                            const onlyChars = e.target.value.replace(/[^A-Za-z ]/g, "").toUpperCase();
                            name.current.value = onlyChars;
                        }}
                    />
                    }

                    <input
                        ref={email}
                        type="text"
                        placeholder="Email or phone number"
                        className="w-full p-3 mb-4 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
                    />

                    <input
                        ref={password}
                        type="password"
                        placeholder="Password"
                        className="w-full p-3 mb-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
                    />
                    <p className="text-red-500 text-xs ml-2 mb-4">{errorMessage}</p>
                    <button className="w-full bg-red-600 hover:bg-red-700 transition-colors p-3 rounded font-medium cursor-pointer" onClick={handleFormSubmit}>
                        {isSignInForm ? "Sign In" : "Sign Up"}
                    </button>
                    <p className="text-gray-400 mt-6 text-sm">
                        {isSignInForm ? "New to Netflix?" : "Already registered!"}
                        <span className="pl-1 text-white hover:underline cursor-pointer" onClick={toggleSignInForm}>
                            {isSignInForm ? "Sign Up now." : "Sign In now."}
                        </span>
                    </p>
                    <p className="text-gray-500 mt-4 text-xs leading-snug">
                        This page is protected by Google reCAPTCHA to ensure you're not a bot.
                        <span className="text-blue-500 hover:underline ml-1">Learn more.</span>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login;