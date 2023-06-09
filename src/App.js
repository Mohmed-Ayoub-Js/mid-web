import React, { useState } from 'react';
import './App.css';
import Header from './component/header/Header';
import About from './component/about-us-area/about';
import Years from './component/years/Years';
import Wwdo from './component/what-we-do-offer/wwdo';
import Down from './component/down/Down';


function App() {
  return (

    <div class="header-app" id="element"> 
    <Header />
      <About />
  <Years />     
<Wwdo />
<Down />
    </div>
  
  );
}

export default App;
