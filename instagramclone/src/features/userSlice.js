import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: null,
  isLoading: true,
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
    },
    logoutUser: (state) => {
      state.user = null;
    },
    setloading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});
export const {
  loginUser,
  logoutUser,
  setloading: setLoading,
} = userSlice.actions;
