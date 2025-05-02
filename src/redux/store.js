import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthSlice";
import medicationsReducer from "./Medications";

const store = configureStore({
  reducer: {
    auth: authReducer,
    medications: medicationsReducer,
  },
});

export default store;
