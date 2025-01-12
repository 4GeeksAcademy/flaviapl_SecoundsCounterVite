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

let intervalID = setInterval(timeStartCounter, 1000);
let count = 0

function timeStartCounter() {
  console.log("pasa 1 segundo");


  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <SecondsCounter seconds={count} stop={stopCounter} restart={restartCounter} resume= {resumeCounter} />
    </React.StrictMode>,
  )
  count++;
}

function stopCounter() {
  clearInterval(intervalID);
}

function resumeCounter() {
  intervalID = setInterval(timeStartCounter, 1000);
  console.log("pasa 1 segundo de resume");
}

function restartCounter() {
  clearInterval(intervalID);
  count = 0
  intervalID = setInterval(timeStartCounter, 1000);
  console.log("pasa 1 segundo de restart");
}

