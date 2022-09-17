import React, { Fragment } from "react";
import MotorItem from "./MotorItem";
import { useSelector } from "react-redux";

const Motorcycles = () => {
  const motors = useSelector((state) => state.motors.motors);
  const isLoading = useSelector((state) => state.motors.isLoading);

  return (
    <Fragment>
      <ul className="w-1/2 text-center p-8 mx-auto bg-white ">
        {isLoading && <p className="text-center text-bold">Loading...</p>}
        {motors.length < 1 && (
          <p className="text-center text-bold">There is no Motorcycle!</p>
        )}
        {motors.map((motor) => (
          <MotorItem key={motor.motorid} motor={motor} />
        ))}
      </ul>
    </Fragment>
  );
};

export default Motorcycles;
