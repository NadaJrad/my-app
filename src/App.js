import React from "react";
import ReactDOM from "react-dom/client";

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


ReactDOM.createRoot(
  <div>
    <h1>My favorites Foods</h1>
    <ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
   </ul>  

  </div>,
  document.getElementById("root")
)

export default App;
