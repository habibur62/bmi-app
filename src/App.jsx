import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react';

function App() {
  const [weight, setweight] = useState(0);
  const [height, setheight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const  [message, setmessage] = useState("");

  const weighthandler = (e) =>{
    e.preventDefault();
    setweight(e.target.value);
  }

  useEffect(()=>{

  },[])

  const heighthandler = (e) =>{
    e.preventDefault();
    setheight(e.target.value);
  }

  useEffect(()=>{
  },[])


  const countBmi =(e)=>{
    e.preventDefault();
    let cal = .0254*height;
   cal = (weight/(cal*cal)) ;
   setBmi(cal.toFixed(1));  

   if(cal<=18.4){
    setmessage("Underwright")
   }else if(cal >=18.5 && cal<=24.9){
    setmessage("Normal")

   }else if(25<=cal && cal<= 39.9){
    setmessage("Overweight")

   }
   else{
    setmessage("Obese")

   }
  }

  return (
    <>
      <div className="container">
        <div className="app-body">
          <h2>BMI APP</h2>
          <form className='form-body' onSubmit={countBmi}>
            <input onChange={weighthandler} type="number"  name='weight' className='weight'placeholder='your weight in kg unit...' required/>
            <input  onChange={heighthandler} type="number" name='height' className='height' placeholder='your height in meters...' required/>
            <button type='submit'>Submit</button>
          
          </form>
          <p>BMI = {bmi}</p>
          <p>Message:{message}</p>
        </div>
      </div>
    </>
  )
}

export default App
