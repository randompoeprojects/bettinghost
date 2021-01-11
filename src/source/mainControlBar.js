import { useState } from 'react';

function MainControlBar(props) {
  const [outcome, setOutcome] = useState('');
  let addOutcomeOnClick = () => {
    props.addOutcome(outcome);
  }
    return (
      <div className="control-bar">
          <div className="player-input-field-container">
            <input onChange={event => setOutcome(event.target.value)} className="player-input-field medium-input-field"></input>
          </div>
          <div className="player-input-button-container">
            <button onClick={addOutcomeOnClick} className="player-input-button large-button bet-button">Add outcome</button>
          </div>
          <div className="reset-bets-button-container">
            <button onClick={props.resetAll} className="reset-bets-button large-button bet-button">Reset all bets</button>
          </div>
      </div>
    );
  }
  
  export default MainControlBar;