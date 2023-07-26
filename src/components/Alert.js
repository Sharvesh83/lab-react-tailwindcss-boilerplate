import React from "react";

const Alert = () => {
  return (
    <div className="p-4 px-10">
      <button className="text-white active:bg-blue-400 p-2 bg-blue-500 text-xs font-bold rounded">
        Button one
      </button>
      <div
        className="bg-red-100 border border-red-500 rounded text-red-600 px-5 py-2 my-4"
        role="alert"
      >
        <strong>Alert! </strong>
        <span>This is awesome!</span>
      </div>
    </div>
  );
};

export default Alert;
