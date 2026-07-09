import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LogoPreloader from './components/LogoPreloader/LogoPreloader'
import { StrictMode } from 'react'


createRoot(document.getElementById('root')).render(

  <StrictMode>
    <LogoPreloader>
      <App />
    </LogoPreloader>
  </StrictMode>
)
