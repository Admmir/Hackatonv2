import { configureStore } from "@reduxjs/toolkit";
import ucenikActions from "./ucenik-slice";

const store = configureStore({
  reducer: { userData: ucenikActions.reducer },
});

export default store;
