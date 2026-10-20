import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// TODO (Day 1): create a QueryClient and wrap <App /> in <QueryClientProvider>.
//   Which defaults would you change (retry, staleTime)? Why?

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
