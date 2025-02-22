import { useState, useEffect } from "react";
import Description from "./Components/Description/Description";
import Options from "./Components/Options/Options";
import Feedback from "./Components/Feedback/Feedback";
import "./App.css";

function App() {
  const [goodIncr, setGoodIncr] = useState(0);
  const [neutrIncr, setNeutrIncr] = useState(0);
  const [badIncr, setBadIncr] = useState(0);

  const dataGood = JSON.parse(localStorage.getItem("good"));
  const dataNeutr = JSON.parse(localStorage.getItem("neutral"));
  const dataBad = JSON.parse(localStorage.getItem("bad"));

  useEffect(() => {
    if (dataGood !== null) setGoodIncr(dataGood);
  }, []);
  useEffect(() => {
    if (dataNeutr !== null) setNeutrIncr(dataNeutr);
  }, []);
  useEffect(() => {
    if (dataBad !== null) setBadIncr(dataBad);
  }, []);

  useEffect(() => {
    localStorage.setItem("good", JSON.stringify(goodIncr));
  }, [goodIncr]);
  useEffect(() => {
    localStorage.setItem("neutral", JSON.stringify(neutrIncr));
  }, [neutrIncr]);
  useEffect(() => {
    localStorage.setItem("bad", JSON.stringify(badIncr));
  }, [badIncr]);

  const totalFeedBack = goodIncr + neutrIncr + badIncr;

  const positive = Math.round((goodIncr / totalFeedBack) * 100);

  function Reset() {
    setGoodIncr(0);
    setNeutrIncr(0);
    setBadIncr(0);
  }

  function increaseGood() {
    setGoodIncr((goodIncr) => goodIncr + 1);
  }

  function increaseNeutr() {
    setNeutrIncr(neutrIncr + 1);
  }
  function increaseBad() {
    setBadIncr(badIncr + 1);
  }
  return (
    <>
      <Description />
      <Options
        goodIncr={goodIncr}
        onIncreaseGood={increaseGood}
        neutrIncr={neutrIncr}
        onIncreaseNeutr={increaseNeutr}
        badIncr={badIncr}
        onIncreaseBad={increaseBad}
        onReset={Reset}
      />
      <Feedback
        goodIncr={goodIncr}
        neutrIncr={neutrIncr}
        badIncr={badIncr}
        totalFeedBack={totalFeedBack}
        positive={positive}
      />
    </>
  );
}

export default App;
