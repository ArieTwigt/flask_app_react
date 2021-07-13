import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [currentCar, setCurrentCar] = useState("No Car");

  useEffect(() => {
    fetch('/random_cars').then(res => res.json()).then(data => {
      setCurrentCar(data[0]);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">

      <h1>Random auto selector </h1>
      <hr></hr>
        <h3>Merk: {currentCar.merk}.</h3>
        <p>Model: {currentCar.handelsbenaming}.</p>
        <p>Kenteken: {currentCar.kenteken}.</p>
      </header>
    </div>
  );
}

export default App;