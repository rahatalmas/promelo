import "./FeesTableSection.css";

const FeesTableSection = () => {
  return (
    <>
      <div className="FeesTable-section-container">
        <div className="table-section">
          <h1 className="table-section-head">Never pay transfer fees again</h1>
          <table className="table">
            <tr className="table-row1">
              <th className="table-col" style={{borderTopLeftRadius:"20px"}}></th>
              <th className="table-col" >FX Rate</th>
              <th className="table-col" style={{borderTopRightRadius:"20px"}}>Fee</th>
            </tr>
            <tr className="table-row">
              <th className="table-col">Remitly</th>
              <th className="table-col">₱54.07</th>
              <th className="table-col">$4.99</th>
            </tr>
            <tr className="table-row">
              <th className="table-col">Xoom</th>
              <th className="table-col">₱54.30</th>
              <th className="table-col">$5.99</th>
            </tr>
            <tr className="table-row">
              <th className="table-col">Western Union</th>
              <th className="table-col">₱55.01</th>
              <th className="table-col">$6.99</th>
            </tr>
            <tr className="table-row">
              <th className="table-col">MoneyGram</th>
              <th className="table-col">F₱55.82</th>
              <th className="table-col">$5.99</th>
            </tr>
          </table>
          <p className="table-section-psg">
            When comparing $300 via cash pick-up paying with debit card.
            Information is based on competitor websites as of 9/29/2023 11 PM.
          </p>
        </div>
        <div className="no-fees-img-section">
          <img className="no-fees-img" src="./assets/nofees.svg" />
        </div>
      </div>
    </>
  );
};

export default FeesTableSection;
