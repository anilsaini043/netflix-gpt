import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/store/userSlice";
import Browse from "./Browse";
import Login from "./Login";

const Body = () => {

    const dispatch = useDispatch();

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        }
    ])

    // Firebase auth state changed

    useEffect(()=> {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid, email, displayName, photoURL} = user;
              dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
            } else {
              dispatch(removeUser());
            }
          });
    }, []);

  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body;