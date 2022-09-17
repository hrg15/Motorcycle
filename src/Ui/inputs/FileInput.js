import React from "react";
import { XCircleIcon } from "@heroicons/react/solid";

const FileInput = React.forwardRef((props, ref) => {
  const uploadFileHandler = (event) => {
    const image = event.target.files[0];
    const types = ["image/jpg", "image/jpeg", "image/png", "image/PNG"];
    if (image) {
      if (types.includes(image.type)) {
        props.getImage(event.target.files[0]);
        props.setIsFileError(false);
      } else {
        props.setIsFileError(true);
      }
    }
  };
  return (
    <React.Fragment>
      <input
        ref={ref}
        onChange={uploadFileHandler}
        accept="image/*"
        className="input my-2 file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-gray-300 file:text-gray-900
                  hover:file:bg-violet-100 "
        type="file"
        name="file"
        id="file"
      />
      {props.isFileError && (
        <div className="flex items-center">
          {
            <XCircleIcon
              className="text-red-400 mr-1 h-4 w-4 block"
              aria-hidden="true"
            />
          }
          <p className="text-red-500">Please upload the motor image.</p>
        </div>
      )}
    </React.Fragment>
  );
});

export default FileInput;
