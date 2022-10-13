import "./App.css";
import { PaletaColorsApp } from "./components/PaletaColorsApp";

function App() {
  return (
    <div className=' m-10 text-center grid place-content-center text-white'>
    <h1 className="font-serif text-xl mb-10">Color palette generator</h1>
      <PaletaColorsApp />
    </div>
  );
}

export default App;
