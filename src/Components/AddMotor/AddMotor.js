import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addMotor } from "../../Store/MotorReducer";
import FileInput from "../../Ui/inputs/FileInput";
import DescriptionInput from "../../Ui/inputs/DescriptionInput";
import NameInput from "../../Ui/inputs/NameInput";

function AddMotor() {
  const disatch = useDispatch();
  const imageRef = useRef();
  const [motorName, setMotorName] = useState("");
  const [motorNameIsTouched, setMotorNameIsTouched] = useState(false);
  const [discription, setDiscription] = useState("");
  const [discriptionIsTouched, setDiscriptionIsTouched] = useState(false);
  const [motorImage, setMotorImage] = useState("");
  const [fileError, setFileError] = useState(false);

  const createMotorId = (data) => {
    const id = (data.motorName + Math.random().toFixed(4)).toString();
    return id.trim();
  };

  const submitationHandler = (event) => {
    event.preventDefault();

    if (motorName === "") {
      setMotorNameIsTouched(true);
      return;
    }
    if (discription.trim().length < 3) {
      setDiscriptionIsTouched(true);
      return;
    }
    if (motorImage === "") {
      setFileError(true);
      return;
    }
    const motorId = createMotorId({ motorName });
    const motorInfo = { motorImage, motorName, motorId, discription };
    disatch(addMotor(motorInfo));
    imageRef.current.value = "";
    setMotorImage("");
    setMotorNameIsTouched(false);
    setMotorName("");
    setDiscription("");
    setDiscriptionIsTouched(false);
  };

  return (
    <form
      onSubmit={submitationHandler}
      className="text-left form justify-center flex flex-col w-1/4 content-center mx-auto"
    >
      <NameInput
        IsTouched={motorNameIsTouched}
        motorName={motorName}
        MotorNameIsTouchedHandler={setMotorNameIsTouched}
        MotorNameHandler={setMotorName}
      />
      <DescriptionInput
        IsTouched={discriptionIsTouched}
        discription={discription}
        discriptionHandler={setDiscription}
        discriptionIsTouchedHandler={setDiscriptionIsTouched}
      />
      <FileInput
        ref={imageRef}
        setIsFileError={setFileError}
        isFileError={fileError}
        getImage={setMotorImage}
      />

      <button className="button shadow-md rounded-md  bg-gray-600 text-gray-100 py-1 my-4 hover:bg-gray-700 ">
        Done
      </button>
    </form>
  );
}

export default AddMotor;
