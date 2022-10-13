import React, {useState} from "react";
import { PaletaForm } from "./PaletaForm";

export const PaletaGradientColors = ({
  colores,
  addColors,
  colore,
  colore1,
  colore2
}) => {
  const [deg, setDeg] = useState(90);

  return (
    <div className='grid place-content-center place-items-center space-y-3 text-center '>
      <h2 className='font-bold '>COLORS GRADIENT</h2>
      <div
        className='w-40 h-40 rounded-full bg-slate-800'
        style={{
          background: `linear-gradient(${deg}deg, ${colore1}, ${colore}, ${colores}, ${colore2}`,
        }}></div>

      <h2>
        linear-gradient
      {`(${deg}deg, ${colore1}, ${colore}, ${colores}, ${colore2})`}
      </h2>

      <PaletaForm  setDeg={setDeg}/>
      <button
        className='bg-blue-600 w-24 h-8 rounded-md cursor-pointer hover:bg-blue-400'
        onClick={addColors}>
        Color
      </button>
    </div>
  );
};
