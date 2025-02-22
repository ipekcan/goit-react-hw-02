import { useState } from 'react';

import stylesOpt from './Options.module.css';



const Options = ({onIncreaseGood, onIncreaseNeutr, onIncreaseBad, onReset}) => {
    
  return (
    <div className={`${stylesOpt.optionsDiv}`}>
      <ul className={`${stylesOpt.optionsList}`}>
        <li>
          <button onClick={onIncreaseGood}>Good</button>
        </li>
        <li>
          <button onClick={onIncreaseNeutr}>Neutral</button>
        </li>
        <li>
          <button onClick={onIncreaseBad}>Bad</button>
        </li>
        <li>
          <button onClick={onReset}>Reset</button>
        </li>
      </ul>
    </div>
  );
};

export default Options;
