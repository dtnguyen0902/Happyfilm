import React from 'react';
import logo from './logo.svg';
import './App.css';
import Carousel from './components/Carousel/Carousel';
import Logo from "./components/header/logo";
import Navbar from "./components/navbar/navbar"
import Footer from "./components/footer/footer"

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
          <Logo />
          <Navbar />
          <Carousel />
          <Footer />
       
      </header>

    </div>
  );
}

export default App;
