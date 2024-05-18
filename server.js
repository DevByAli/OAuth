import path from "path";
import express from "express";
import { configDotenv } from "dotenv";
import cookieSession from "cookie-session";

import { connectDb } from "./db/connect.js";
import passport from "./middleware/passport.middleware.js";

configDotenv("dotenv");
export const app = express();

const PORT = process.env.PORT;

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    secret: process.env.COOKIE_SECRET_KEY,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.listen(PORT, () => {
  connectDb();
  console.log(`Server is listening on PORT: ${PORT}`);
});
