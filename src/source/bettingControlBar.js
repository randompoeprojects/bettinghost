import { useState, useEffect } from "react";

function BettingControlBar(props) {

    const [playerName, setPlayerName] = useState('');
    const [amount, setAmount] = useState('');
    const [winner, setWinner] = useState(props.outcome.winner);
    const outcomeName = props.outcome.outcomeName
    let addBetOnClick = () => {
      props.addBet(playerName,outcomeName,amount);
    }

    useEffect(() => {
        props.setWinner(outcomeName, winner);
    },[winner]);

    return (
      <div className="betting-control-bar">
        <button className="remove-outcome-button">X</button>
        <span className="outcome-name-span">{props.outcome.outcomeName}</span>
        <span className="add-bet-player-span">Player:</span>
        <input onChange={event => setPlayerName(event.target.value)} className="add-bet-player-input"></input>
        <input onChange={event => setAmount(event.target.value)} type="number" className="add-bet-amount-input"></input>
        <button onClick={addBetOnClick} className="add-bet-button">Add bet</button>
        <div className="winner-check-div">
          <label className="winner-check-label">Winner?</label>
          <input onChange={event => setWinner(event.target.checked)} checked={winner} id="winnerCheckCheckbox" type="checkbox" className="winner-check-checkbox"></input>
        </div>
      </div>
    );
  }
  
  export default BettingControlBar;