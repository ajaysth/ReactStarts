import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Lets from './try.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <App />
    {/* <Lets /> */}
  </>
)
