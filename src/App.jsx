import { useCallback, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [allowNumber, setAllowNumber] = useState(false);
  const [allowChar, setAllowChar] = useState(false);
  const [password, setPassword] = useState("");

  let passwordGen = useCallback(() => {

    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(allowNumber) str += "0123456789"
    if(allowChar) str += "!@#$%^&*_-+={}[]~`"

    for (let i = 1; i <= length; i++) {

    let char = Math.floor(Math.random() * str.length + 1);
    pass = pass + str.charAt(char);
    setPassword(pass);
  }

  }, [length, allowNumber, allowChar, setPassword])
  

  useEffect(() => {
    passwordGen();
  }, [length, allowNumber, allowChar, passwordGen])
  

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md
      rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <div className='flex shadow rounded-lg overflow-hidded mb-4'>
          <input
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          />
          <button 
          className='outline-none bg-blue-700 text-white 
          px-3 py-0.5 shrink-0'>Copy</button>
        </div>

        <div 
        className='flex text-sm gap-x-2'>

          <div className='flex items-center gap-x-1'>
            <input
            type='range'
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
            type='checkbox'
            defaultChecked={allowNumber}
            id="numberInput"
            onChange={()=>{setAllowNumber((prev) => !prev)}}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
            type='checkbox'
            defaultChecked={allowChar}
            id="charInput"
            onChange={()=>{setAllowChar((prev) => !prev)}}
            />
            <label htmlFor='charInput'>Charecter</label>
          </div>

        </div>

      </div>
    </>
  )
}

export default App
