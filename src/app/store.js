import { configureStore } from "@reduxjs/toolkit";
import { postSlice } from "../posts/postSlice";

export default configureStore({
  reducer: {
    posts: postSlice.reducer,
  },
});
