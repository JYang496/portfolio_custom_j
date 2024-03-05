import React from 'react';
import './styles/app.scss';
import {Header} from "./Header";
import {Hero} from "./Hero";
import {Main} from "./Main";
import {Footer} from "./Footer";

function App() {
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
