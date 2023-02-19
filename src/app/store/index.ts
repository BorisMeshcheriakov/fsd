import { configureStore } from "@reduxjs/toolkit";

import { authModalReducer } from "entities/auth";

export const store = configureStore({
  reducer: authModalReducer,
});
