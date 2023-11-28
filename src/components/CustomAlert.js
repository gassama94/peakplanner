import React from "react";

export default function CustomAlert({ message }) {
  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-3 py-4  rounded relative" role="alert">
      <span className="block sm:inline">{message}</span>
    </div>
  );
}
