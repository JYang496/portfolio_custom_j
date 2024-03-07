import React, {useEffect} from 'react';
import './styles/app.scss';
import {Header} from "./Header";
import {Hero} from "./Hero";
import {Main} from "./Main";
import {Footer} from "./Footer";
import AOS from 'aos';

function App() {
    useEffect(()=>{
        AOS.init()
    },[])
  return (
    <div className="app">
        <Header/>
        <Hero/>
        <Main/>
        <Footer/>
    </div>
  );
}

export default App;
