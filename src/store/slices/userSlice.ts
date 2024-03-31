import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";


// type

type State = {
  accessToken: null | string ;  
  permissions: null | string;
  loading: boolean;
};
const initialState: State = {
  accessToken: null,
  permissions: null,
  loading: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    authenticateAction: (state) => {
      state.loading = true;
    },
    authenticatedAction: (state, action) => {
      state.accessToken = action.payload;
      state.loading = false;
    },
    authorizeAction: (state) => {
      state.loading = true;
    },
    authorizedAction: (state, action) => {
      state.permissions = action.payload;
      state.loading = false;
    },
  },
});

export const selectUser = (state: RootState) => state.user;

export const { authenticateAction, authenticatedAction, authorizeAction, authorizedAction } =
  userSlice.actions;

export default userSlice.reducer;