import React from "react";
import { XCircleIcon } from "@heroicons/react/solid";

const DescriptionInput = ({
  discription,
  discriptionIsTouchedHandler,
  discriptionHandler,
  IsTouched,
}) => {
  const textEreaChangeHandler = (event) => {
    discriptionHandler(event.target.value);
  };
  const textEreaOnBlurHandler = () => {
    if (IsTouched) {
      discriptionIsTouchedHandler(false);
    }
    discriptionIsTouchedHandler(true);
  };
  const discriptionHasError = discription.trim().length < 3 && IsTouched;
  const discriptionClass = discriptionHasError
    ? "border border-solid border-red-500 rounded-lg p-1 my-1"
    : "border border-solid border-black rounded-lg p-1 my-1";
  return (
    <React.Fragment>
      <label htmlFor="discription">Discription:</label>

      <textarea
        value={discription}
        onBlur={textEreaOnBlurHandler}
        onChange={textEreaChangeHandler}
        className={discriptionClass}
        name="discription"
        id="discription"
        cols="30"
        rows="4"
        placeholder="About Motorcycle..."
      ></textarea>
      {discriptionHasError && (
        <div className="flex items-center">
          {
            <XCircleIcon
              className="text-red-400 mr-1 h-4 w-4 block"
              aria-hidden="true"
            />
          }
          <p className="text-red-500">Please enter a discription.</p>
        </div>
      )}
    </React.Fragment>
  );
};

export default DescriptionInput;
