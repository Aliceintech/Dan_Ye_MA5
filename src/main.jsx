import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import BoxCountProvider from './BoxCountProvider.jsx'
import BoxParent from './BoxParent.jsx'
//import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BoxCountProvider>
      <BoxParent>
        <App />
        </BoxParent>
    </BoxCountProvider>
  </React.StrictMode>,
)
