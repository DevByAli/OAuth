import User from "../models/user.js";

export const CreateUser = async (data) => {
  let user = await User.findOne({ googleId: data.googleId });
  if (!user) {
    user = await User.create(data);
  }
  return user;
};
