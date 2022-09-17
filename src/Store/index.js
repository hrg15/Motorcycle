import { configureStore } from "@reduxjs/toolkit";
import MotorReducer from "./MotorReducer";

const store = configureStore({
  reducer: { motors: MotorReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ["motors/addMotor"],
        ignoredActionPaths: ["motorimg.jpg", "payload.motorImage"],
        ignoredPaths: ["motors.motors"],
      },
    }),
});

export default store;
