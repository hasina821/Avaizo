import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./features/theme";
import { userSlice } from "./users/user";
import { messageSlice } from "./users/message";
import { authSlice } from "./users/auth";

const store=configureStore({
     reducer:{
          theme: themeSlice.reducer,
          user: userSlice.reducer,
          message: messageSlice.reducer,
          auth: authSlice.reducer,
     },
})

export default store;