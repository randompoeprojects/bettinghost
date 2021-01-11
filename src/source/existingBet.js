function ExistingBet(props) {
    return (
      <div className="existing-bet">
          <div className="existing-bet-player-container text-align-center border-right">
            <span className="existing-bet-player-name">{props.playerName}</span>
          </div>
          <div className="existing-bet-outcome-container text-align-center border-right">
            <span className="existing-bet-outcome-choice">{props.outcome}</span>    
          </div>
          <div className="existing-bet-amount-container text-align-center">
            <span className="existing-bet-amount-amount">{props.amount}</span>    
          </div>
      </div>
    );
  }
  
  export default ExistingBet;