import React,{useState} from 'react'
import { PaletaBgColors } from './PaletaBgColors';
import { PaletaGradientColors } from './PaletaGradientColors';

const colorsArray = ["A","B","C","D","E","F",0,1,2,3,4,5,6,7,8,9];

export const PaletaColorsApp = () => {
  const [colores, setColores] = useState('#2A6386');
  const [colore, setColore] = useState('#2A6386');
  const [colore1, setColore1] = useState('#6F68CD');
  const [colore2, setColore2] = useState('#23DB1AA6');
  const [decimalColor, setDecimalColor] = useState(' #104181');



  let num = 6;
  const addColors = ()=>{
    let text = "#";
    let text1 = "#";
    let text2 = "#";
    let text3 = "#";
    for (let i = 0; i <num; i++) {
      text += colorsArray[colorsRamdon()];
      
    }
    for (let i = 0; i <6; i++) {
      text1 += colorsArray[colorsRamdon()];
      
    }
    for (let i = 0; i <6; i++) {
      text2 += colorsArray[colorsRamdon()];
      
    }
    for (let i = 0; i <6; i++) {
      text3 += colorsArray[colorsRamdon()];
      
    }
    setColores(text);
    setColore(text1)
    setColore1(text2);
    setColore2(text3);

  }
const addDecimalColors=()=>{
  let text3 = "#";
  for (let i = 0; i <6; i++) {
    text3 += colorsArray[colorsRamdon()];
    
  }
  setDecimalColor(text3);


}
  const colorsRamdon=()=>{
    return Math.floor(Math.random()*colorsArray.length);

  }

  return (
    <div className='grid space-y-4 w-full '>
    <PaletaGradientColors colores={colores} addColors={addColors} colore={colore} colore1={colore1} colore2={colore2}/>
    <hr />
<PaletaBgColors decimalColor={decimalColor} addDecimalColors={addDecimalColors}/>
    </div>
  )
}
