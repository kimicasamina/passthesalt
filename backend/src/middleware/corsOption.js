const WHITELIST = [
  "https://www.google.com",
  "http://127.0.0.1:9090",
  "http://127.0.0.1:9000",
  "http://127.0.0.1:8000",
  "http://127.0.0.1:8080",
  "http://localhost:5173",
];
export const corsOption = {
  origin: (origin, callback) => {
    if (WHITELIST.indexOf(origin) !== -1 || !origin) {
      console.log("CORS ORIGIN: ", origin);
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};
