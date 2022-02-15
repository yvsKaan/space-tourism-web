import React,  {useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import './Header.css';
import logo from '../../assets/shared/logo.svg';
import hamburger from '../../assets/shared/icon-hamburger.svg';
import close from '../../assets/shared/icon-close.svg';

function Header() {
  const [navigator, setNavigator] = useState('desktop');
  const [headerActive, setHeaderActive] = useState('home');
  const transitionNavBar = ()=>{
    if(window.innerWidth < 1000 && window.innerWidth > 760){
      setNavigator('tablet');
    }else if(window.innerWidth <= 760){
      setNavigator('mobile');
    }
    else {
      setNavigator('desktop');
    }
  }

  useEffect(()=>{
    window.addEventListener('resize', transitionNavBar);
    return () => window.removeEventListener("resize", transitionNavBar); 
  },[])
  return <div className="header">
      <Link to='/'><img src={logo} className="logo" alt=""/></Link>
      <div className="menu">
        {navigator === "desktop" ? <div className="line"/> : ""}
        {navigator !== "mobile" ? <div className="nav">
            <Link to="/" className={"link " + (headerActive === "home" ? "active" : "")} onClick={e => setHeaderActive("home")}>
              <h1>00</h1> home
            </Link>
            <Link to="destination"className={"link " + (headerActive === "destination" ? "active" : "")} onClick={e => setHeaderActive("destination")}>
              <h1>01</h1> destination
            </Link>
            <Link to="crew" className={"link " + (headerActive === "crew" ? "active" : "")} onClick={e => setHeaderActive("crew")}>
              <h1>02</h1> crew
            </Link>
            <Link to="technology" className={"link " + (headerActive === "technology" ? "active" : "")} onClick={e => setHeaderActive("technology")}>
              <h1>03</h1> technology
            </Link>
        </div> : ""}
        {navigator === "mobile" ? <div className="hamburger">
            <img src={hamburger} alt=""/>
        </div> : ""}
      </div>
  </div>;
}

export default Header;
