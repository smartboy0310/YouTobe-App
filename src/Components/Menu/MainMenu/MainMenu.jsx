import React from 'react';
import './MainMenu.css';
import Home from '../../../Assets/Images/home.svg';
import Trending from '../../../Assets/Images/trend.svg';
import Subscriptions from '../../../Assets/Images/subscriptions.svg';
import { NavLink } from 'react-router-dom';

function MainMenu () {
   return (
      <>
         <ul className="mainmenu-list">
             <NavLink to='/'>
              <li className="mainmenu-list__item">
               <img className="item__img"
               src={Home} 
               alt="Home menu icon"
               width = "20" height = "20" />
               Home
              </li>
            </NavLink>
            <li className="mainmenu-list__item">
               <img className="item__img"
               src={Trending} 
               alt="Trending menu icon"
               width = "20" height = "20" />
               Trending
            </li>
            <li className="mainmenu-list__item">
               <img className="item__img"
               src={Subscriptions} 
               alt="Subscriptions menu icon"
               width = "20" height = "20" />
               Subscriptions
            </li>
         </ul>
     
      </>
   )
}
 export default MainMenu;