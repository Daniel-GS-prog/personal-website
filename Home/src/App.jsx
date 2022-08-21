import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import MainContent from './Components/MainContent';

import './App.css'
import SubContent1 from './Components/Subcontent1';
import Subcontent2 from './Components/Subcontent2';
import DisplayFlex from './Components/Display-flex';

const App = () => {
 

  return (
    <div className="App">
      <Navbar/>
      <MainContent />
      <DisplayFlex>
        <SubContent1/>
        <Subcontent2/>
      </DisplayFlex>
        
      
      
    </div>
  )
}

export default App
