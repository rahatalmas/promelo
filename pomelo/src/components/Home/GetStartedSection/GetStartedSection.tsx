import './GetStartedSection.css';

const GetStartedSection = () =>{
    return(
        <>
          <div className="GetStarted-section-container">
              <h1 style={{textAlign:"center",fontSize:"45px"}}>How to get Started:</h1>
              <div className='getstart-menu-item'>
                  <div className='gs-menu-logo'>
                      <img src='./assets/l1.png'/>
                  </div>
                  <div className='gs-menu-content'>
                      <h1 style={{fontSize:"25px",fontWeight:500}}>1.Apply</h1>
                      <p>To apply, you must be 18 years or older and have an SSN. Depending on your credit history, you may be required to place a security deposit by connecting your bank.</p>
                  </div>
              </div>
              <div className='getstart-menu-item'>
                  <div className='gs-menu-logo'>
                     <img src='./assets/l2.png'/>
                  </div>
                  <div className='gs-menu-content'>
                      <h1 style={{fontSize:"25px",fontWeight:500}}>2.Invite</h1>
                      <p>Add up to 3 authorized cardholders in the Philippines. They will need a smartphone and a valid ID (see list of accepted IDs). Your account won't be activated until at least one beneficiary completes their set-up!</p>
                  </div>
              </div>
              <div className='getstart-menu-item'>
                  <div className='gs-menu-logo'>
                      <img src='./assets/l3.png'/>
                  </div>
                  <div className='gs-menu-content'>
                      <h1 style={{fontSize:"25px",fontWeight:500}}>3.Spend</h1>
                      <p>🇵🇭 Cards arrive in 10 days or less after you approve your beneficiary. 🇺🇸 You get a card too. They spend in the Philippines, you pay off the balance monthly.</p>
                  </div>
              </div>
          </div>
        </>
    );
}

export default GetStartedSection;