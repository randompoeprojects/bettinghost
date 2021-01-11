function PayoutResult(props) {
    return (
      <div className="payout-result">
          <div className="payout-result-player-container text-align-center border-right">
            <span className="payout-result-player-name">{props.playerName}</span>
          </div>
          <div className="payout-result-win-container text-align-center">
            <span className="payout-result-win-amount">{props.winAmount}</span>    
          </div>
      </div>
    );
  }
  
  export default PayoutResult;