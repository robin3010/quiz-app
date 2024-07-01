import React from 'react'
import ReactDOM from 'react-dom/client'
import StoreProvider from 'store/storeProvider'
import App from './App'
import './styles/_index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>
)
