import React from 'react';
import './App.css';
import italy from './italy.jpeg';
import Destination from './Destination/Destination';
import Travel from './Travel/Travel';
import switzerland from './switzerland.jpeg';
import china from './china.jpeg';
import uk from './uk.jpeg';
function App() {
  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;600&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />

      <div className="main-container">
        <img src={italy} className="italy-image" alt="Lake in Italy"/>
        <p className="TooTravel">
          TooTravel
        </p>
        <p className="main-text">
          The most beautiful places in the world!
        </p>
        <p className="supplementary-text">
          Plan your vacation to the most beautiful places in the world
        </p>
        <button>Get Started</button>
      </div>

      <div className="Right">
        <nav>
          <h1 className="Discover">Discover</h1>
          <ul>
            <li className="Popular">Popular</li>
            <li>Adventure</li>
            <li>Tour</li>
          </ul>
        </nav>
        
        <div className="destinations">
          <div className="image-container">
            <Destination img={switzerland} location="Switzerland" photos="32" rating="5.0" alt="Scenic Switzerland"/>
            <Destination img ={china} location="China" photos="56" rating="4.8" alt="Scenic China"/>
            <Destination img={uk} location="UK" photos="32" rating="4.6" alt="scenic UK"/>
            <Destination img ={china} location="China" photos="32" rating="5.0" alt="scenic China"/>
          </div>
        </div>

        <div className="travel">
         <h2 className="Types-of-Travel">Types of Travel</h2> 
          <div className="travel-container">
            <Travel emoji="✈️" type="All"/>
            <Travel emoji="👨" type="Solo"/>
            <Travel emoji="⭐️" type="Luxury"/>
            <Travel emoji="🦁" type="Safari"/>
            <Travel emoji="🍣" type="Food"/> 
          </div>
        </div>

      </div>

    </div>
  );
}

export default App;
