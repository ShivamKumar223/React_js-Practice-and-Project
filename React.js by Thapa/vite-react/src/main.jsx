import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx';
import "./components/todoApp/time.css"
import {HeadingWithDate} from "./components/todoApp/time.jsx"
import {FromButton} from "./components/todoApp/form.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <HeadingWithDate/>
    <FromButton/>
  
  </StrictMode>,
)
