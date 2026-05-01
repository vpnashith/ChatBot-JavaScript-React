import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // This StrictMode component gives us some additional checks and warnings when developing the app
  <StrictMode> 
    <App />
  </StrictMode>,
)
