import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

import Logo from '../../Assets/Images/logo.svg';
import HumburgerImg from '../../Assets/Images/menu.svg';
import Search from '../../Assets/Images/search.svg';

import User from './User/User'

function Header () {
   return (
   <>
      <header className="header">
      <div className="logo">
         <button className="humburger">
            <img className="humburger__img"
            src={HumburgerImg}
            alt="Humburger menu icon"  
            width = "20" height ="20"/>
         </button>
         <NavLink to='/'>
            <img className="logo__img"
            src={Logo}
            alt="Logo icon"  
            width = "120" height ="25"/>
         </NavLink>
      </div>
      <div className="search">
         <input className="search__input" type="text" placeholder="Search" autoComplete="off"/>
         <button className="search__button">
            <img className="search__button__img"
            src={Search} 
            alt="Search button icon"
            width="20" height="20" />
         </button>
      </div>
      <div className="user">
         <User />
      </div>
      </header>
   </>
   )
}

export default Header;