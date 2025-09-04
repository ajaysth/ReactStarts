import { useCallback, useRef, useEffect, useState } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [clicked, setClicked] = useState(false)
  const [password, setPassword] = useState()
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*(){}"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClick = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
    setClicked(true);
  }, [password])

  useEffect(() => { passwordGenerator(); setClicked(false); }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className='w-screen min-h-screen flex flex-col justify-center items-center bg-purple-700 px-4 py-8 gap-4'>
        <h1 className='text-center text-black text-xl sm:text-2xl'>The Password Generator</h1>
        <div className='w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl px-4 py-5 bg-yellow-100 text-black rounded-lg shadow-lg flex flex-col items-center gap-4'>
          <h1 className='text-center text-black text-xl sm:text-2xl py-1 mb-0'>Your Password</h1>
          <div className='flex shadow rounded-lg w-full overflow-hidden mb-4'>
            <input type="text" value={password} className='flex-1 outline-none text-base sm:text-lg py-2 px-3' placeholder='password' readOnly ref={passwordRef} />
            <button
              className={`px-3 py-2 shrink-0 min-w-[80px] sm:min-w-[100px] rounded text-sm sm:text-base ${clicked ? "bg-green-600 text-black" : "bg-blue-700 text-white"}`}
              onClick={copyPasswordToClick}
            >
              {clicked ? "✅ Copied!" : "Copy"}
            </button>
          </div>

          <div className='flex flex-col sm:flex-row text-sm sm:text-base mt-3 gap-2 sm:gap-x-4'>
            <div className='flex items-center gap-x-2'>
              <input type="range" min={8} max={15} value={length} onChange={(e) => { setlength(Number(e.target.value)) }} className='cursor-pointer w-20 sm:w-24' />
              <label className='text-black whitespace-nowrap'>Length: {length}</label>
            </div>
            <div className='flex items-center gap-x-2'>
              <input type="checkbox" defaultChecked={numberAllowed} id="numbers" onChange={() => { setNumberAllowed((prev) => !prev) }} />
              <label htmlFor="numbers" className='text-black'>Numbers</label>
            </div>
            <div className='flex items-center gap-x-2'>
              <input type="checkbox" defaultChecked={charAllowed} id="characters" onChange={() => { setCharAllowed((prev) => !prev) }} />
              <label htmlFor="characters" className='text-black'>Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
