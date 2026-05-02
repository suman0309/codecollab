import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'


function App() {
  const [color, setColor] = useState("olive")


  const changeColor = (color) => {
    setColor(color);
  }
  const resetColor=()=>{
    setColor("olive")
  }

  return (
    <>
      <div className="w-full h-screen duration-200"
        // syntax of style {{}}
        style={{ backgroundColor: color }}
      >
        {/* 
//botton bar */}
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">

          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "red" }} onClick={() => changeColor("red")}>RED</button>

            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "blue" }} onClick={() => changeColor("blue")}>BLUE</button>

            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "green" }} onClick={() => changeColor("green")}>GREEN</button>

            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "purple" }} onClick={()=>changeColor("purple")}>PURPLE</button>

            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "pink" }} onClick={() => changeColor("pink")}>PINK</button>

            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "orange" }} onClick={() => changeColor("orange")}>ORANGE</button>

<button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "black" }} onClick={() => resetColor()}>RESET</button>


          </div>

        </div>


      </div>

    </>
  );
}

export default App;

