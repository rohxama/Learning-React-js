import { useState } from 'react'
import './App.css'

function App() {

  // Use state(hook) used for store and update data and setbg is a convention
  let [bgcolor, setbg] = useState('#000'); // by default

  // Array of colors and their labels
  const colors = [
    { hex: '#8d99ae', label: '~_~' },
    { hex: '#274c77', label: '^_-' },
    { hex: '#6096ba', label: '⚆_⚆' },
    { hex: '#a3cef1', label: '^_^' },
  ];


  // function to change bg of body in which i took color as a parameter
  let setColor = (color) => {
    // change setbg color with random color
    setbg(color);
    // selecting body and change its bg
    document.body.style.backgroundColor = color;
  }

  return (
    <>
      <h1>Color Changer</h1>
      {
        // map function 
        colors.map((color) => {
          return (
            // key for maintaining order and identification
            <button key={color.hex} onClick={() => setColor(color.hex)} style={{ backgroundColor: color.hex, border: '1px solid white', outline: 'none' }}>{color.label}</button>
          )
        })
      }
    </>
  )
}

export default App

