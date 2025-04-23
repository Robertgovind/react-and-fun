import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // Here the use of simple functions can not reflect changes in UI.
  // So, Hooks are used and here useState hook is used
  const IncreaseCount = () => {
    setCount(count+1);
  }
  const DecreaseCount  = ()=> {
    if(count != 0){
    setCount(count-1);}
  }

  return (
    <>
      <div>
        <h2>Count : {count}</h2>
        <button onClick={IncreaseCount}>Increase</button>
        <button onClick={DecreaseCount}>Decrease</button>
      </div>
    </>
  )
}


export default App
