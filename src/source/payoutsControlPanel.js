import PayoutResult from './payoutResult'

function payoutControlPanel(props) {

    const payoutsList = props.payouts.map((payout) => {
        return <PayoutResult playerName={payout.playerName} winAmount={payout.amount}/>
    });
    return (
      <div id="payoutControlPanel" className="payout-control-panel">
          <div className="payout-control-bar">
              <div className="flex-grow-1">
                <span className="house-cut-span">House cut:</span>
                <input onChange={event => props.setHouseCut(event.target.value)} type="number" className="house-cut-input"></input>
              </div>
              <div className="flex-grow-3">
                <button onClick={props.calculatePayout} className="calculate-payout-button">Calculate payout</button>
              </div>
          </div>
          <div className="payout-results-panel">
              {payoutsList}
          </div>
      </div>
    );
  }
  
  export default payoutControlPanel;