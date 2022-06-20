import { configureStore } from "@reduxjs/toolkit";
import posts from "../features/post/postsSlice";
import users from "../features/users/usersSlice";

export const store = configureStore({
  reducer: {
    posts,
    users,
  },
});
