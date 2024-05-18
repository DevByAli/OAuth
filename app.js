import { app } from "./server.js";
import authRouter from "./router/auth.router.js";
import userRouter from "./router/user.router.js";

// Routes
app.use("/auth", authRouter);

app.use("/home", (req, res) => {
  res.render("home", { user: req.user });
});

app.use("/profile", userRouter);

app.use("*", (req, res) => {
  res.send("<h1>Page Not Found!</h1>");
});
