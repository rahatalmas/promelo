import './AddSection.css';

const AddSection = () =>{
    return(
        <>
          <div className="Add-section-container">
               <div className='ad-img-container'>
                    <img className='add-section-img' src='./assets/phoneapp.jpg' style={{width:"100%"}}/>
               </div>
               <div className='ad-text-container'>
                    <h1 style={{margin:0,fontSize:"40px"}}>Pomelo Card +</h1>
                    <h1 style={{margin:0,fontSize:"40px"}}>Pomelo App = </h1>
                    <h1 style={{margin:0,fontSize:"40px",color:"pink"}}>Pomelo Power</h1>
                    <p style={{fontWeight:300}}>
                    We've reinvented money transfer using the power of credit. Apply now to send a Pomelo Mastercard™ to anyone, anywhere in the Philippines. They can spend it anytime, anywhere Mastercard is accepted. Send now, pay later, zero APR. <br/>
                    <br/>With the Pomelo App, you have full control. Decide how much credit to share with each person. Pause at any time. Monitor every transaction. Pay it once a month, even put it on autopay.
                    </p>
                    <div className='card-service-logos'>
                        <img className='card-service-logo' src='./assets/mastercard.svg'/>
                        <img className='card-service-logo' src='./assets/gpay.svg'/>
                        <img className='card-service-logo' src='./assets/applepay.svg'/>
                    </div>
               </div>
          </div>
        </>
    );
}

export default AddSection;