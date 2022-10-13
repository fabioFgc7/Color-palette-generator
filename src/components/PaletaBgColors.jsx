import React from "react";

export const PaletaBgColors = ({ decimalColor, addDecimalColors }) => {
  return (
    <div className='grid place-content-center place-items-center space-y-5  '>
      <h2 className='font-bold '>COLOR EXADECIMAL</h2>
      <div
        className='w-40 h-40 rounded-full bg-sky-700'
        style={{ background: `${decimalColor}` }}></div>
      <p>{decimalColor}</p>
      <button
        className='bg-blue-600 w-24 h-8 rounded-md cursor-pointer hover:bg-blue-400'
        onClick={addDecimalColors}>
        Color
      </button>
    </div>
  );
};
