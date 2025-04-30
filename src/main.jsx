import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { DatosPersonales } from './PrimerComponente.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    


    <DatosPersonales />
    {/* <DatosPersonales /> */}
  </StrictMode>,
)
