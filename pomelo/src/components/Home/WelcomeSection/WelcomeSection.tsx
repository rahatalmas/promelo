import './WelcomeSection.css';

const WelcomeSection = () =>{
    return(
        <>
          <div className="welcome-section">
             <div className='w-t-1'>
                <h1 className='w-h'>Money Transfer <br/> Solved</h1>
                <p className='w-p'>Send a Pomelo card to the Philippines and never worry about transfer fees and cash pickups again.</p>
             </div>

             <div className='w-t-2'>
                <h1 className='w-h-2'>$1 →₱60</h1>
                <span className='w-h-2span'>*Available for a limited time</span>
                <div className='w-input-section'><input/><button>Sign Up</button></div>
                <p className='input-s-para'>Applies to first $500 spent in 45 days for new customers. Rates applies to PHP transactions where Mastercard is accepted. Rates subject to change. See Terms and Conditions.</p>
             </div>
          </div>
        </>
    );
}

export default WelcomeSection;