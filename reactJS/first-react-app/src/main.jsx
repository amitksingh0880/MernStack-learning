import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import Message from './components/Message.jsx'
import Languages from './components/Languages.jsx'
import Counter from './components/Counter.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <Message/>
    <Languages/> */}
    {/* <Counter/> */}
    {/* {App()} this can also be used */}
  </React.StrictMode>,
)
