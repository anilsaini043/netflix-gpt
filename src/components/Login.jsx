import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    }

    return (
        <div >
            <Header />
            <div className='absolute inset-0'>
                <img src='https://assets.nflxext.com/ffe/siteui/vlv3/fa7be975-efc3-48c6-8188-f07fdd1aa476/web/IN-en-20250428-TRIFECTA-perspective_e045264e-b4d4-4a6f-b2cc-f95e3344a332_large.jpg'
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
                        type="text"
                        placeholder="Full name"
                        className="w-full p-3 mb-4 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
                    />
                    }
                    <input
                        type="text"
                        placeholder="Email or phone number"
                        className="w-full p-3 mb-4 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full p-3 mb-6 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
                    />
                    <button className="w-full bg-red-600 hover:bg-red-700 transition-colors p-3 rounded font-medium">
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