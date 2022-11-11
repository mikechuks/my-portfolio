import "./menu.css";
import {useState} from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  /*const[fix, setFix] = useState(false);
   
  const setFixed = () => {
      if(window.scrollY >= 200 ){
        setFix(true)
      }else{
        setFix(false)
      }
  }
  window.addEventListener("scroll", setFixed)*/
  return (
    <div>
    <div className='Container'>
    <div className="menuContainer">
            <h1 className="logo"></h1>
            <div className="rightMenu">
              <span><Link to='/' className="linkBar">Home</Link></span>
              <span><Link to='/certificates' className="linkBar">Certificates</Link></span>
              <span><Link to='/contact' className="linkBar">Contact Me</Link></span>
              <span><Link to='/' className="linkBar">Home To Tutor</Link></span>
              </div>
        </div>
      <img className="imgContainer" src="./mike/mike.jpg" alt="my pics"/>
      <div className="aboutContainer">
      <h1 className="nwoye">Nwoye  Chukwudi Michael</h1>
      <br/><br/>
      <p className="aboutNwoye">I am a software developer with 4 years of experience. 
        <br/>I intend to bring value to your organization with my skill sets 
        <br/>while I grow my career and advance my skill. I am goal oriented,
        <br/> focused and fast learner.
      </p>
      </div>
      </div>
         {/* <div className={fix ? 'heardContainer' :'heardContent'}>
            <h1 className="logo"></h1>
            <div className="rightMenu">
            <span><Link to='/' className="linkBar">Home</Link></span>
              <span><Link to='/certificates' className="linkBar">Certificates</Link></span>
              <span><Link to='/' className="linkBar">Contact</Link></span>
              <span><Link to='/' className="linkBar">Home To Tutor</Link></span>
              </div>
  </div>*/}
        <div className="menuContainer">
        <h1 className="logo"></h1>
            <div className="rightMenu">
            <span><Link to='/' className="linkBar">Home</Link></span>
              <span><Link to='/certificates' className="linkBar">Certificates</Link></span>
              <span><Link to='/contact' className="linkBar">Contact Me</Link></span>
              <span><Link to='/' className="linkBar">Home To Tutor</Link></span>
              </div>
        </div>
        <div className="smallContainer">
        <h1 className="logo"></h1>
            <div className="dropMenu">
              <div className="menu">Menu</div>
            <div className="rightMenu colormenu">
            <span><Link to='/' className="linkBar">Home</Link></span>
              <span><Link to='/certificates' className="linkBar">Certificates</Link></span>
              <span><Link to='/contact' className="linkBar">Contact Me</Link></span>
              <span><Link to='/' className="linkBar">Home To Tutor</Link></span>
              </div>
              </div>
        </div>
        </div>
  )
}
export default Menu