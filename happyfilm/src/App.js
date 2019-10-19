import React from 'react';
import './App.scss';
import Carousel from './components/Carousel/Carousel';
import Promotion from './components/Promotion/promotion';
import News from './components/News/news';
import Header from "./components/header/header";
import Navbar from "./components/Navbar/navbar"
import ListPhim from './components/ListPhim/ListPhim';
import Rap from './components/Rap/Rap';
import ManagerFooter from './components/Footer/ManagerFooter';
import Sticker from './components/IconSticker.js/Sticker';

function App() {
  return (
    <div className="App">
        <Header/>
        <Navbar/>
        <Carousel />
        <ListPhim />
        <Sticker />
        <Rap />
        <Promotion/>
        <News/>
        <ManagerFooter />
    </div>
  );
}

export default App;
