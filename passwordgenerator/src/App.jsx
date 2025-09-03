import { useCallback, useEffect, useState } from 'react'
import './App.css'

function App() {
  const [length,setlength] = useState(8)
  const [numberAllowed, SetNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] =  useState(true)
  const [password, setPassword] = useState()
  const passwordGenerator = useCallback(() =>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*(){}"

    for( let i = 1;i <=length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)


    }
    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  useEffect(() => {passwordGenerator()},[length, numberAllowed, charAllowed, passwordGenerator])
  return (
    <>

      <div className='w-full max-w-md mx-auto my-8 px-4 pb-5 bg-amber-100 text-orange-500 rounded-lg'>
        <h1 className='text-center text-black py-1 mb-2'>Your Password</h1>
        <div className='flex shadow rounded-lg w-full text-black overflow-hidden '>
          <input type="text" value={password} className='outline-none text-lg w-full py-1 px-3' placeholder='password' readOnly/>
          <button className='outline-none bg-blue-700 text-white text-lg px-3 py-1 shrink-0'>Copy</button>
          
        </div>

        <div className='flex text-sm mt-3 gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={8} max={15} value={length} onChange={(e) => {setlength(Number(e.target.value))}} className='cursor-pointer' />
            <label className='text-black'>Length : {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" Checked={numberAllowed} id="" onChange={() => {SetNumberAllowed((prev) => !prev)}} />
            <label className='text-black'>Numbers</label>

          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox" Checked={charAllowed} id="" onChange={() => {setCharAllowed((prev) => !prev)}} />
            <label className='text-black'>Characters</label>

          </div>
        </div>
        
      </div>
      
    </>
  )
}

export default App
