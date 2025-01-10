import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
import SecondsCounter from './components/secondsCounter';


setInterval(timeStartCounter, 1000);
let count = 0

function timeStartCounter() {
  console.log("pasa 1 segundo");

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <SecondsCounter seconds={count} />
    </React.StrictMode>,
  )
  count++;
}