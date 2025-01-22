import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import BookApp from './BookApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    < BookApp />
  </StrictMode>,
)
