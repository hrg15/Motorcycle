import React from "react";
import { XCircleIcon } from "@heroicons/react/solid";

const NameInput = ({
  motorName,
  IsTouched,
  MotorNameHandler,
  MotorNameIsTouchedHandler,
}) => {
  const touchHandler = () => {
    if (IsTouched) {
      MotorNameIsTouchedHandler(false);
    }
    MotorNameIsTouchedHandler(true);
  };
  const motorNameChangeHandler = (event) => {
    MotorNameHandler(event.target.value);
  };
  const motorNameHasError = motorName.trim() === "" && IsTouched;

  const motorNameClass = motorNameHasError
    ? "border border-solid border-red-500 rounded-lg p-1 my-1"
    : "border border-solid border-black rounded-lg p-1 my-1";
  return (
    <React.Fragment>
      <label htmlFor="motorname">Motorcycle name:</label>
      <input
        onBlur={touchHandler}
        value={motorName}
        onChange={motorNameChangeHandler}
        className={motorNameClass}
        type="text"
        placeholder="Motorcycle"
        id="motorname"
      />
      {motorNameHasError && (
        <div className="flex items-center">
          {
            <XCircleIcon
              className="text-red-400 mr-1 h-4 w-4 block"
              aria-hidden="true"
            />
          }
          <p className="text-red-500">Please enter a motor name.</p>
        </div>
      )}
    </React.Fragment>
  );
};

export default NameInput;
