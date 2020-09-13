import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Missions} from './components/Mission/index'
import {MissionInfo} from './components/MissionInfo/index'

function App() {
  return (
    <div className="App">
      <Missions/>
      <MissionInfo/>
    </div>
  );
}

export default App;
