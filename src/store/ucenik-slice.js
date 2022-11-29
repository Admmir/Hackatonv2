import { createSlice } from "@reduxjs/toolkit";

const ucenikSlice = createSlice({
  name: "user",
  initialState: {
    user: "",
    authentificated: false
  },
  reducers: {
    isLogged(state, action) {
      state.user = action.payload;
    },
    isAuthentificated(state) {
      state.authentificated = !state.authentificated
    }
  },

});

export const ucenikActions = ucenikSlice.actions;

export default ucenikSlice;
