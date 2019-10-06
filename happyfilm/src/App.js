import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Carousel from './components/Carousel/Carousel';
import Promotion from './components/Promotion/promotion';
import News from './components/News/news';

function App() {
  return (
    <div className="App">
     
        <Carousel />
        <Promotion/>
        <News/>
     
        
      
    </div>
  );
}

export default App;
