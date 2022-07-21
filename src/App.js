import './App.css';
import Info from './componenets/Info.js'
import About from './componenets/About'
import Interests from './componenets/Interests'
import Footer from './componenets/Footer'
import React from 'react';

function App() {
  return (
    <div className="App">
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}

export default App;
