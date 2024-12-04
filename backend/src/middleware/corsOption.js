import dotenv from "dotenv";
dotenv.config();

export const corsOption = {
  origin:
    process.env.NODE_ENV === "production"
      ? process.env.CLIENT_URL
      : "http://localhost:5173",
  credentials: true,
};

// const WHITELIST = process.env.WHITELIST.split(',')
// const WHITELIST = [
//     'https://www.google.com',
//     'http://127.0.0.1:8000',
//     'http://localhost:5173',
// ]

// export const corsOption = {
//   origin: (origin, callback) => {
//     if (whitelist.indexOf(origin) !== -1 || !origin) {
//       console.log("CORS ORIGIN: ", origin);
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
// };
