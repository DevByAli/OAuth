import { Router } from "express";
import passport from "passport";

const router = Router();

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/logout", (req, res) => {
  // res.send("<h1>Logging out user</h1>");
  req.logout();
  res.redirect("/home");
});

/**
 * This send the request to google which will get the code or we can say a token
 * from the google which will again send to get the info in '/google/redirect'
 */
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile"],
  })
);

/**
 The req come back from the google with query parameter of code
 Then we send that code to google by this URL to get the info of the user profile
 This line do this 'passport.authenticate("google")' 
 */
router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  res.redirect("/profile");
});

export default router;
