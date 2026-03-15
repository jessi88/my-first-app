import { useState } from 'react'
import './App.css'
import * as d3 from "d3";

const data = [4, 8, 15, 16, 23, 42];
console.log("Max:", d3.max(data));

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello World!</h1>
      <p>How are you?!
      </p>
    </>
  )
}

export default App
