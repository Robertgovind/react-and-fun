import './App.css'
import Card from './Card'

function App() {
  let obj = {s1:"Dribble", s2:"Shoot"}
  return (
    <>
    <h1 className='text-sky-500 text-md'>Props in React and Tailwind CSS</h1>
    <Card name="Pedri" myobj = {obj}/>
    <Card name="Lamine" myobj = {obj}/>
    </>
  )
}

export default App
