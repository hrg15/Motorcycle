import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import MainPage from "./TailwindTools/MainPage";
import { useSelector, useDispatch } from "react-redux";
import { sendMotorData, reciveMotorData } from "./Store/MotorAction";
import { changeMotorAdded } from "./Store/MotorReducer";

function App() {
  const dispatch = useDispatch();
  const motors = useSelector((state) => state.motors.motors);
  const motorAdded = useSelector((state) => state.motors.motorAdded);

  useEffect(() => {
    dispatch(reciveMotorData());
  }, [dispatch]);

  useEffect(() => {
    if (motorAdded) {
      dispatch(sendMotorData(motors[motors.length - 1]));
      dispatch(changeMotorAdded());
    }
  }, [dispatch, motors, motorAdded]);
  return (
    <BrowserRouter>
      <MainPage />
    </BrowserRouter>
  );
}

export default App;
