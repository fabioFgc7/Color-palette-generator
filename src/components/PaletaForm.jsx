import React from "react";

export const PaletaForm = ({ setDeg }) => {
  const onChange = (e) => {
    const value = e.target.value;
    if (value !== "") {
      setDeg(value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setDeg();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className='p-1 border-slate-600 rounded-lg outline-none text-black'
          type='text'
          name='text'
          placeholder='0deg to 360deg '
          onChange={onChange}
        />
      </form>
    </>
  );
};
