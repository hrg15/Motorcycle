import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  motors: [],
  motorAdded: false,
  isLoading: false,
};

const motorSlice = createSlice({
  name: "motors",
  initialState: initialState,
  reducers: {
    addMotor(state, action) {
      state.motorAdded = true;
      state.motors = [
        ...state.motors,
        {
          motorname: action.payload.motorName,
          motorid: action.payload.motorId,
          discription: action.payload.discription,
          motorimg: action.payload.motorImage,
        },
      ];
    },
    replaceMotor(state, action) {
      state.motors = action.payload;
    },

    changeMotorAdded(state) {
      state.motorAdded = false;
    },
    removeMotor(state, action) {
      console.log(typeof action.payload);
      const filterMotor = state.motors.filter(
        (motor) => motor.motorid !== action.payload
      );
      state.motors = filterMotor;
    },
    isLoadingHandler(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const {
  addMotor,
  changeMotorAdded,
  replaceMotor,
  removeMotor,
  isLoadingHandler,
} = motorSlice.actions;
export default motorSlice.reducer;
