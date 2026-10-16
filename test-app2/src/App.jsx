import { useState } from 'react'
import rock from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='i'>This my class</div>
     <img src={rock}alt=""  height={200}width={200} />
    </>
  )
}

export default App
