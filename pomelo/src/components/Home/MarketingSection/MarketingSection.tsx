import './MarketingSection.css';

const MarketingSection = () =>{
    return(
        <>
          <div className="marketing-section">
               <div className='marketing-card'>
                  <img className='m-card-img' src="./assets/marketing1.svg"/>
                  <h1 className='m-card-title'>Goodbye cash pickups</h1>
                  <p className='m-card-text'>Say goodbye to the hassle of cash pickups and banks that are offline</p>
               </div>
               <div className='marketing-card'>
                  <img className='m-card-img' src="./assets/marketing2.svg"/>
                  <h1 className='m-card-title'>Where's my money?</h1>
                  <p className='m-card-text'>Never wonder where your money is. It never leaves until you pay the bill.</p>
               </div>
               <div className='marketing-card'>
                  <img className='m-card-img' src="./assets/marketing3.svg"/>
                  <h1 className='m-card-title'>Ready for emergencies</h1>
                  <p className='m-card-text'>The Pomelo Card™ makes money ready 24/7 so you are ready for life’s surprises.</p>
               </div>
          </div>
        </>
    );
}

export default MarketingSection;