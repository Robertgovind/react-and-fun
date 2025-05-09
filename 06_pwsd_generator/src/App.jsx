import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);


  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numAllowed) str += "0123456789";
    if(charAllowed) str += "!@#$%^&*()_+=-[]*/";

    for(let i=1;i<=length; i++) {
      let index = Math.floor(Math.random()*str.length+1);
      pass += str.charAt(index);
    }

    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword])

  useEffect(() => {passwordGenerator()}, [numAllowed, charAllowed, length, passwordGenerator])

  let passwordRef = useRef(null);
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password])
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md 
      rounded-lg px-4 my-8 bg-gray-700
      text-orange-500">
        <h1 className='text-white text-center'>Password Generator</h1>
        <div className='flex shadow rounded-lg 
        overflow-hidden mb-4'>
          <input 
          type='text'
          value={password}
          className='outline-none w-full py-1 px-3 bg-white'
          placeholder='Password'
          readOnly
          ref={passwordRef}
          />
          <button className='outline-none bg-blue-700 text-white 
          px-3 py-0.5 shrink-0'
          onClick={() => {
            copyPasswordToClipboard()
          }}
          >copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
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
          <div className='flex item-center gap-x-1'>
            <input 
            type='checkbox'
            defaultChecked={numAllowed}
            id='numberInput'
            onChange={() => {setNumAllowed((prev) => !prev)}}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex item-center gap-x-1'>
            <input 
            type='checkbox'
            defaultChecked={charAllowed}
            id='characterInput'
            onChange={() => {setCharAllowed((prev) => !prev)}}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
