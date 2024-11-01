import { useState } from 'react'
import './App.css'

function App() {

// Use state(hook) and setCounter is a convention
let [counter, setCounter] = useState(0)

// Function for adding value
let addRandomValue = () => {
  // console.log("Value", counter)
  // counter = counter + 1;
  if(counter < 20){
    setCounter(counter + 1);
  } else{
    setCounter(counter);
  }
}

// Function to remove value
let removeRandomValue = () => {
  if(counter > 0){
    setCounter(counter - 1);
  } else{
    setCounter(counter);
  }
}


  return (
    <>
      <h1>Rona or React</h1>
      <h3>Counter value: {counter} </h3>
      <button
      onClick={addRandomValue}>Add</button>
      <button onClick={removeRandomValue}>Remove</button>
    </>
  )
}

export default App
