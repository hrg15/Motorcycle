import React from "react";

const MainBox = (props) => {
  return (
    <main>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 rounded-lg h-min">
            {props.children}
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainBox;
