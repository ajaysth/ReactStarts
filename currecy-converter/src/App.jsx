import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [dark, setDark] = useState(false)

  const calculated = useMemo(
    () =>{
        return Calculation(count)
    },[count]
  )
  
  const cssStyle = {
    backgroundColor : dark ? "black" : "white",
    color : dark ? "white" : "black"
  }
  

  return (
    <>
      <div style={cssStyle}>
        <input className='bg-white text-black' type="number" onChange={(e)=>setCount(e.target.valueAsNumber || 0)} name="" value={count} />
        <h2>{count}</h2>
        <h1 >Calculation: {calculated}</h1>


        <button className='bg-black text-white' onClick={()=>{setDark(!dark)}}>Toggle</button>
      </div>
    </>
  )
}

function Calculation(num){
  console.log("calculation run!")
  
    num = num * 2

  return num

}

export default App
