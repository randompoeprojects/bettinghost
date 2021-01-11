import BettingControlBar from "./bettingControlBar.js"

function BettingControlPanel(props) {
    const outcomesList = props.outcomes.map((outcome) => {
        return <BettingControlBar setWinner={props.setWinner} key={outcome.outcomeName} addBet={props.addBet} outcome={outcome}/>
    });

    return (
      <div id="bettingControlPanel" className="betting-control-panel">
          {outcomesList}
      </div>
    );
  }
  
  export default BettingControlPanel;