import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {


//as the value of counter is changing is better to use let instead of const
 const [counter,chaiCounter]= useState(15)
  
  // let counter=5;

  const addValue=()=>{
    console.log("clicked",counter,Math.random())
  //  counter=counter+1
  if(counter<20){
  chaiCounter(counter+1)
  } 
  }

  const removevalue=()=>{
    if(counter>0){
    chaiCounter(counter-1)
    }
  }
  return (
    <>
      <h1>chai aur Reacttt</h1>
      <h2>counter value {counter}</h2>

      <button onClick={addValue} >Add Value  {counter}</button>
      <br></br>
      <button onClick={removevalue}>Remove Value {counter} </button>
<footer>{counter}</footer>
    </>
  )
}

export default App
