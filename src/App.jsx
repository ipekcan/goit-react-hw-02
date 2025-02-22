import { useState } from 'react'
import Description from './Components/Description/Description';
import Options from './Components/Options/Options'
import Feedback from './Components/Feedback/Feedback';
import './App.css'

function App() {

  const [goodIncr, setGoodIncr] = useState(0);
  const [neutrIncr, setNeutrIncr] = useState(0);
  const [badIncr, setBadIncr] = useState(0);

  const totalFeedBack = goodIncr + neutrIncr + badIncr;

  const positive = Math.round((goodIncr / totalFeedBack) * 100);

  function Reset() {
      setGoodIncr(0);
      setNeutrIncr(0);
      setBadIncr(0);
  }

  return (
    <>
      <Description />
      <Options 
      goodIncr = {goodIncr} onIncreaseGood = {()=>setGoodIncr(goodIncr + 1)}
      neutrIncr = {neutrIncr} onIncreaseNeutr = {()=>setNeutrIncr(neutrIncr + 1)}
      badIncr = {badIncr} onIncreaseBad = {()=>setBadIncr(badIncr + 1)} 
      onReset={Reset}
      />
       <Feedback
        goodIncr = {goodIncr} 
        neutrIncr = {neutrIncr} 
        badIncr = {badIncr} 
        totalFeedBack = {totalFeedBack}
        positive = {positive}
       />
    </>
  )
};




export default App;
