import React from 'react';
import { useSelector } from 'react-redux';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const userStore = useSelector((state) => state?.user);
  const navigate = useNavigate();

  console.log("userStore", userStore)

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      console.log("error sign out-- ", error) // We will build the error page
    });
  }

  return (
    <div className='absolute w-screen flex justify-between items-center px-8 py-2 bg-gradient-to-b from-black z-10'>
      <img className='w-44' src='https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
        alt='logo'
      />
      {
        userStore && (
          <div className='flex items-center p-2'>
            <img className='w-12 h-12' src={userStore?.photoURL} alt='user_logo' />
            <button className='text-white pl-2 cursor-pointer' onClick={handleSignOut}>SignOut</button>
          </div>
        )
      }
    </div>
  )
}

export default Header;  