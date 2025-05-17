import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { addUser, removeUser } from '../utils/store/userSlice';
import { LOGO } from '../utils/constants';

const Header = () => {
  const userStore = useSelector((state) => state?.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Firebase auth state changed

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // Unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth).then(() => {}).catch((error) => {
      console.log("error sign out-- ", error) // We will build the error page
    });
  }

  return (
    <div className='absolute w-screen flex justify-between items-center px-8 py-2 bg-gradient-to-b from-black z-10'>
      <img className='w-44' src={LOGO}
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