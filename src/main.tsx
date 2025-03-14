import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './styles/reset.css'
import './index.css'
import App from './App.tsx'

import { GlobalStyles } from './styles/global-styles.ts';
import { ThemeStyles } from './styles/default-theme-styles.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <ThemeStyles />
      <App />
    </BrowserRouter>
  </StrictMode>
)
