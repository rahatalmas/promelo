import './HowItWorksSection.css';

const HowItWorksSection = () =>{
    return(
        <>
          <div className="HowItWorks-section-container">
               <div className='hiw-text-sec'>
                   <h1 style={{fontWeight:550,fontSize:"40px"}}>How it works</h1>
                   <p style={{fontWeight:350}}>Pomelo is a Family Plan for sharing credit internationally. You are the primary cardholder. You can invite up to 3 authorized users. Each will get their own card, designed with ❤️ in San Francisco, delivered to the Philippines 🇵🇭 in 10 days or less.</p>
               </div>
               <div className='hiw-img-sec'>
                    <img src='./assets/pomelocard.svg'/>
               </div>
          </div>
        </>
    );
}

export default HowItWorksSection;