import ExistingBet from "./existingBet"

function ExistingBetsControlPanel(props) {

    const betsList = props.bets.map((bet) => {
        return  <ExistingBet playerName={bet.player} outcome={bet.outcome} amount={bet.amount}/>
    });
    return (
      <div id="ExistingBetsPanel" className="existing-bets-panel">
          <div className="existing-bets-header-container">
              <div className="flex-grow-3 existing-bets-h2-container">
                  <h2 className="existing-bets-h2">Bets</h2>
              </div>
              <div className="flex-grow-1 existing-house-cut-container">
                  <span className="existing-bets-house-cut">{"House cut: " + props.houseCut + "%"}</span>
              </div>
          </div>
          <ExistingBet playerName="Player" outcome="Outcome" amount="Amount" />
          {betsList}
      </div>
    );
  }
  
  export default ExistingBetsControlPanel;