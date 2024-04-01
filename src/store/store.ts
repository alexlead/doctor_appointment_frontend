import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import modalSlice from "./slices/modalSlice";

const store = configureStore({
    reducer: {
        user: userSlice,
        modal: modalSlice
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
