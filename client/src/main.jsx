import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ClickProvider,  } from './context/ClickContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClickProvider>
          <App />
    </ClickProvider>

  </React.StrictMode>,
)
