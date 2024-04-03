import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";


// type

export type State = {
  user: {
    name: undefined | string;
    surname: undefined | string;
    email: undefined | string;
  }
  accessToken: null | string ;  
  permissions: null | string;
  loading: boolean;
};
const initialState: State = {
  user:{
    name: undefined,
    surname: undefined,
    email: undefined
  },
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
    setUserAction : (state, action) => {
      state.user = action.payload;

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

export const { setUserAction, authenticateAction, authenticatedAction, authorizeAction, authorizedAction } =
  userSlice.actions;

export default userSlice.reducer;