import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
const App = lazy(() => import('./App.jsx'))
import { BrowserRouter } from 'react-router-dom'
import Loader from './components/Loader.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <Suspense fallback={ <Loader />}>
          <App />
        </Suspense>
    </BrowserRouter>
    
  </StrictMode>,
)
