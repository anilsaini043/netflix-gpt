# Netflix GPT
    - Created project setup
    - Installed tailwind
    - Header
    - Route setup
    - Sign in and sign up form conditionally
    - Form validation
    - useRef hook
    - Firebase authentication (using google firebase)
    - Firebase setup
    - Deployed at firebase production and get url to open app
    - Create signup user account
    - Create React Redux Toolkit store
    - User store created
    - Update profile after create/sign up user using firebase
    - Signout user
    - useSelector, useNavigation, useDispatch hook used
    - Bugfix : Sign up user displayName and profile picture update
    - Bugfix : If the user is not logged in redirect "/browse" to Login page and vice-versa
    - Unsubscribe to the onAuthStateChanged callback
    - Added hardcoded values or urls in constants.js file
    - Register on TMDB and get access token and use nowPlaying get api
    - Fetch nowPlayingMovies data in custom hook and store in the movie slice store
    - Fetch trailer movie with key and auto play background and embed iframe
    - Custom hook for trailer video and update the movie slice store
    - Done main container with youtube autoplay video

- Created app using VITE  
    - npm create vite@latest

- Configured tailwind css

# Features

- Login/Signup
    - Sign in / Sign up form
    - Redirect to Browse page

- Browse (after authentication)
    - Header
    - Main movie
        - Trailer in background
        - Title and description
        - Movie suggestion
            - MovieLists
    - Search bar
    - Movie suggestions
    