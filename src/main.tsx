import { createRoot } from 'react-dom/client'
import './style/index.scss'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename='/alfa_test/'>
    <App />
  </BrowserRouter>
)
