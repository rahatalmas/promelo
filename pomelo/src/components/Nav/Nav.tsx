import { Link } from "react-router-dom"; 
import './Nav.css';

const Nav = () =>{
   return(
     <>
       <div className="nav-container">
           <div className="logo-container">
                <Link className="nav-link" to="/"><img className="pomelo-logo" src="./assets/pomelo.svg"/></Link>
           </div>
           <div className="nav-items">
                <Link className="nav-item" to="/about">About</Link>
                <Link className="nav-item" to="/faq">FAQs</Link>
                <Link className="nav-item" to="/hire">We're hiring</Link>
           </div>
       </div>
     </>
   );
}

export default Nav;