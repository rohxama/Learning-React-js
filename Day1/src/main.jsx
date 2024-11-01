import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Actual method in react for rendering elements

const reactElement = React.createElement (
  'a',
  { href: 'https://google.com', target: '_blank'},
  "Click me"
)

createRoot(document.getElementById('root')).render(
 
    /* <App /> */
    reactElement

)
