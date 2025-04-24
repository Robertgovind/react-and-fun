import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('green')

  return (
    <div className='w-full h-screen duration-300'
    style={{backgroundColor: color}}>

      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'> 
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button 
          onClick={() => setColor("red")}
          className='outline-none px-4 rounded-full text-white shadow-lg' 
          style={{background:"red"}}>
             Red
            </button>
            <button
            onClick={() => setColor("blue")}
            className='outline-none px-4 rounded-full text-white shadow-lg' 
          style={{background:"blue"}}>
             Blue
            </button>
            <button 
            onClick={() => setColor("green")}
            className='outline-none px-4 rounded-full text-white shadow-lg' 
          style={{background:"green"}}>
             Green
            </button>
            <button 
            onClick={() => setColor("yellow")}
            className='outline-none px-4 rounded-full text-white shadow-lg' 
          style={{background:"yellow"}}>
             Yellow
            </button>
            <button 
            onClick={() => setColor("violet")}
            className='outline-none px-4 rounded-full text-white shadow-lg' 
          style={{background:"violet"}}>
             Violet
            </button>
            <button 
            onClick={() => setColor("purple")}
            className='outline-none px-4 rounded-full text-white shadow-lg' 
          style={{background:"purple"}}>
             Purple
            </button>
            <button 
            onClick={() => setColor("olive")}
            className='outline-none px-4 rounded-full text-white shadow-lg' 
          style={{background:"olive"}}>
             Olive
            </button>
            <button 
            onClick={() => setColor("crimson")}
            className='outline-none px-4 rounded-full text-white shadow-lg' 
          style={{background:"crimson"}}>
             Crimson
            </button>
            <button 
            onClick={() => setColor("indigo")}
            className='outline-none px-4 rounded-full text-white shadow-lg' 
          style={{background:"indigo"}}>
             Indigo
            </button>
        </div>
      </div>

    </div>
  )
}

export default App
