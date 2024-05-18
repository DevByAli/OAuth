import passport from "passport";

import User from "../models/user.js";
import GoogleStretegy from "./oauth.middleware.js";

// OAuth Middleware
passport.use(GoogleStretegy);

passport.serializeUser((user, done) => {
  // cookie made which contain the user Id and send that cookie in response
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  // cookie is deserialized to get the user id and find the user from DB
  // Then make the user a part of the request object and used in the controllers
  User.findById(id).then((user) => {
    done(null, user);
  });
});

export default passport;
