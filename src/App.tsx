import React,{useState} from 'react';
import './App.css';
import {Missions} from './components/Mission/index'
import {MissionInfo} from './components/MissionInfo/index'

function App() {

  const [uName,setUName]=useState<any>('')


  const getName= (e:React.FormEvent<EventTarget>,selectedAnswer:any)=>{
    e.preventDefault()
    console.log('selectedAnswerFromMissionList',selectedAnswer)
    setUName(selectedAnswer)
}

  return (
    <div className="App">

      <Missions callback={getName}/>
      <MissionInfo userName={uName}/>

    </div>
  );
}

export default App;
