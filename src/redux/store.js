import { configureStore } from "@reduxjs/toolkit";
import buildReducer from "./features/builPc/buildPcSlice";

const store = configureStore({
  reducer: {
    buildPc: buildReducer,
  },
});

export default store;
