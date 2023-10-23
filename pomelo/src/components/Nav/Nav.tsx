import { Link } from "react-router-dom"; 
import './Nav.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
const Nav = () =>{
  
  const [menuOpen,setMenuOpen] = useState(false)
  
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
           <div className="menu-icon-con" onClick={()=>{setMenuOpen(!menuOpen)}}>
                {
                  menuOpen?<CloseIcon className="menu-icon"/>:   <MenuIcon className="menu-icon"/>
                }
                
           </div>
       </div>
           <div className="res-menu">
              <div className={menuOpen?"res-nav-items":"res-nav-items-close"}>
                    <Link className="res-nav-item" to="/"  onClick={()=>{setMenuOpen(!menuOpen)}}>Home</Link>
                    <Link className="res-nav-item" to="/about" onClick={()=>{setMenuOpen(!menuOpen)}}>About</Link>
                    <Link className="res-nav-item" to="/faq" onClick={()=>{setMenuOpen(!menuOpen)}}>FAQs</Link>
                    <Link className="res-nav-item" to="/hire" onClick={()=>{setMenuOpen(!menuOpen)}}>We're hiring</Link>
              </div>
           </div>
     </>
   );
}

export default Nav;