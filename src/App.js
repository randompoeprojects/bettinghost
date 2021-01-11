import './App.css';
import { useState, useEffect } from 'react';
import MainControlBar from './source/mainControlBar.js';
import BettingControlPanel from './source/bettingControlPanel.js';
import PayoutsControlPanel from './source/payoutsControlPanel.js';
import ExistingBetsPanel from './source/existingBets'

class Bet {
   constructor(player,outcome,amount) {
    this.player=player;
    this.outcome=outcome;
    this.amount=amount;
  }
}

class Outcome {
  constructor(outcomeName, winner) {
    this.outcomeName = outcomeName;
    this.winner = winner;
  }
}

class Payout {
  constructor(playerName, amount) {
    this.playerName = playerName;
    this.amount = amount;
  }
}


function App() {
  const [outcomes, setOutcomes] = useState([new Outcome("Qt wins", false), new Outcome("Dyrus wins", false)]);
  const [bets, setBets] = useState([new Bet("soda","Qt wins", 100), new Bet("vigor","Qt wins", 300), new Bet("op","Dyrus wins", 1000), new Bet("calvin","Dyrus wins", 200)]);
  const [payouts, setPayouts] = useState([]);
  const [houseCut, setHouseCut] = useState(5);

  
let addOutcome = (outcomeName) => {
  const tempOutcomes = [...outcomes];
  tempOutcomes.push(new Outcome(outcomeName, false));
  setOutcomes(tempOutcomes);
}

let addBet = (player,outcome,amount) => {
  let tempBets = [...bets];
  tempBets.push(new Bet(player,outcome,amount));
  setBets(tempBets);
}

let setWinner = (outcomeName, winner) => {
  let tempOutcomes = [...outcomes];
  for(var i = 0; i < tempOutcomes.length; i++){
    if(tempOutcomes[i].outcomeName === outcomeName){
      tempOutcomes[i].winner = winner;
    }
  }
  setOutcomes(tempOutcomes);
}

let resetAll = () => {
  setBets([]);
  setOutcomes([]);
}

let getAllWinningOutcomes = () => {
  let winnerOutcomes = new Set();
  for(var i = 0; i < outcomes.length; i++){
    if(outcomes[i].winner === true){
      winnerOutcomes.add(outcomes[i].outcomeName);
    }
  }
  return winnerOutcomes;
};

let getTotalBetAmount = () => {
  let totalAmount = 0;
  for(var i = 0; i < bets.length; i++){
    totalAmount += parseInt(bets[i].amount);
  }
  return totalAmount;
};

let getTotalWinnerBetAmount = (winnerOutcomes) => {
  let totalAmount = 0;
  for(var i = 0; i < bets.length; i++){
    if(winnerOutcomes.has(bets[i].outcome)){
      totalAmount += parseInt(bets[i].amount);
    }
  }
  return totalAmount;
};

let calculatePayout = () => {
  let winnerOutcomes = getAllWinningOutcomes();
  let totalBetAmount = getTotalBetAmount();
  let totalWinnerBetAmount = getTotalWinnerBetAmount(winnerOutcomes);
  let calculatedPayouts = [];
  console.log(bets);
  console.log(winnerOutcomes.values());
  for(var i = 0; i < bets.length; i++){
    if(winnerOutcomes.has(bets[i].outcome)){
      let calculatedPayoutAmount = (bets[i].amount * totalBetAmount)/totalWinnerBetAmount;
      let tax = (calculatedPayoutAmount - bets[i].amount) * (houseCut/100)
      calculatedPayouts.push(new Payout(bets[i].player, Math.floor(calculatedPayoutAmount - tax)));
    }
  }
  setPayouts(calculatedPayouts);
  
};

let bettingControlPanel = <BettingControlPanel setWinner={setWinner} outcomes={outcomes} addBet={addBet}/>;

useEffect(() => {
},[outcomes]);

  return (
    <div className="betting-host">
      <header className="betting-host-header">
        <h1 className='header'>Generic Betting App</h1>
      </header>
      <div className='main-body' id='mainBody'>
        <div className='left-side-panel bordered-panel'>
          <h2 className="betting-area-header">Add outcomes</h2>
          <MainControlBar addOutcome={addOutcome} resetAll={resetAll}/>
          <h2 className="betting-area-header">Betting</h2>
          {bettingControlPanel}
          <h2 className="betting-area-header">Calculate Payouts</h2>
          <PayoutsControlPanel calculatePayout={calculatePayout} setHouseCut={setHouseCut} payouts={payouts}/>
        </div>
        <div className='right-side-panel bordered-panel'>
          <ExistingBetsPanel bets={bets} houseCut={houseCut}/>
        </div>
      </div>
    </div>
  );
}

export default App;
