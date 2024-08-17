export const APP_LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStjt304IEFaJ1QzAbNkeifMxnd5Q6Alxl59mx1hkyPhQOdla4gaIBBZQLOqqMwA9EcOp8&usqp=CAU";

export const MOVIE_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const MOVIE_IMG_URL = "https://image.tmdb.org/t/p/w500/";

export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/19fc1a4c-82db-4481-ad08-3a1dffbb8c39/IN-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_24a485f6-1820-42be-9b60-1b066f1eb869_small.jpg";

export const MULTILANGUAGE = [
  { identifier: "en", name: "English" },
  { identifier: "ta", name: "Tamil" },
  { identifier: "fr", name: "French" },
  { identifier: "es", name: "Spanish" },
];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY