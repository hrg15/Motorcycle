import { useDispatch } from "react-redux";
import { removeMotor } from "../../Store/MotorReducer";
import { removeMotorData } from "../../Store/MotorAction";

const MotorItem = ({ motor }) => {
  const disptch = useDispatch();
  let imageStatus = false;
  const defaultImg =
    "https://firebasestorage.googleapis.com/v0/b/motorcycle-hrg.appspot.com/o/image-2935360_960_720.png?alt=media&token=5e22979f-ed4c-42ee-9092-3ed6d33e010d";
  if (typeof motor.motorimg === "string") {
    imageStatus = true;
  } else {
    imageStatus = false;
  }
  const removeMotorHandler = (id) => {
    disptch(removeMotorData(id));
  };
  return (
    <li className="flex flex-nowrap text-left flex-row p-2 shadow-md rounded-md my-2 ">
      <div className="image basis-20 mr-2 rounded-full overflow-hidden w-32">
        <img
          src={imageStatus ? motor.motorimg : defaultImg}
          alt={motor.motorimg.name}
        />
      </div>
      <div className="grow-0 truncate">
        <h2 className="font-bold my-2">{motor.motorname}</h2>
        <p className="text-sm truncate">{motor.discription}</p>
      </div>
      <div className="flex grow justify-end items-center ">
        <button
          onClick={() => removeMotorHandler(motor.motorid)}
          className="hover:bg-red-500 rounded-md transition duration-300 h-full "
        >
          {" "}
          Delete{" "}
        </button>
      </div>
    </li>
  );
};

export default MotorItem;
