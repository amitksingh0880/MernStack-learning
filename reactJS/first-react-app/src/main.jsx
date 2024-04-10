import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Message from './components/Message.jsx'
import Languages from './components/Languages.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Message/>
    <Languages/>
    {/* {App()} this can also be used */}
  </React.StrictMode>,
)
