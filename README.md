# NETFLIXGPT 

- Create a react app by using npx create-react-app 
- configure the tailwind css into your react app 
- Routing
- Login page (header, BG-Image, Signin and sign up)
- Form Validation 
- useRef Hook
- Firebase Setup
- Deploy the app 
- Create sign up user account
- Implement sign in user Api 
- create store using reduxtoolkit (userSlice)
- Implemented Sign out
- update displayname and profile picture (firebase update profile)
- If user not logged in redirect /browse to login page and if user logged in redirect login page to browse page
- unsubscribed to ononAuthStateChanged 
- login to TMDB website and generated access token 
- get data from TMBD now playing movies 
- create Movieslice and update store with movie data
- Fetch data for trailer video 
- update store with trailer data
- custom hooks for nowplayingmovie and movietrailer 
- Embedded youtube video and make it autoplay and mute
- Build second container 
- Build movie list and card 
- Custom hooks for popular,toprated, upcoming movies
- fetch data for all types of movies and update the store
- Gpt Search page
- Gpt search Bar
- Multi language feature in gpt search page
- Get Open AI Api Key 
- Gpt Search API Call
- fetched gptMoviesSuggestions from TMDB
- created gptSlice added data
- Resused Movie List component to make movie suggestion container
- Memoization
- Added .env file


# Features 

- Login page
    - sign in / sign up form 
    - redirect  to Browser page 
- Browser page ( after authentication)
    - Header 
    - Main movie
      - Trailer in BG
      - Movie name and description
    - Movies suggestion
      - movie list * n  
- NetflixGPT 
    - Search bar 
    - Movie Suggestions     