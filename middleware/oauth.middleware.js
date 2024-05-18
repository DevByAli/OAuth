import { configDotenv } from "dotenv";
import { OAuth2Strategy } from "passport-google-oauth";

import { CreateUser } from "../services/user.service.js";

configDotenv("dotenv");

const options = {
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: "/auth/google/redirect",
};

const callback = (accessToken, refreshToken, profile, done) => {
  const { id, displayName, photos } = profile;
  const user = { googleId: id, name: displayName, photo: photos[0].value };

  CreateUser(user).then((userData) => {
    // This user Id is send to passport.serialization then send to client in request cookie
    done(null, userData);
  });
};

export default new OAuth2Strategy(options, callback);
