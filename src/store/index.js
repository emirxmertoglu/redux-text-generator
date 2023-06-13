import { configureStore } from "@reduxjs/toolkit";
import generatorReducer from "@/reducers/generatorReducer";

export default configureStore({
  reducer: {
    generator: generatorReducer,
  },
});
