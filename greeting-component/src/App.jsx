import { useState } from 'react'
import './App.css'
import Greeting from '../component/Greeting'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Greeting/>
      <Greeting name = 'John'/>

      <Greeting name = 'Steven'>
        <p>It is a wonderful day</p>
      </Greeting>
    </>
  )
}

export default App
