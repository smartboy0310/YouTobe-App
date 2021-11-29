import React from 'react';
import './Menu.css';



import MainMenu from './MainMenu/MainMenu';
import Additional from './AdditionalMenu/Additional';
import Subscriptions from './Subscriptions/Subscriptions'

function Menu () {
   return (
      <>
      
      <nav className="nav">
      <ul className="menu">
         <li className="menu__item">
            <MainMenu />
         </li>
         <li className="menu__item">
           <Additional />
         </li>
         <li className="menu__item">
        <strong className="subscriptions-strong"> Subscriptions</strong>
           <Subscriptions />
         </li>
      </ul>
      </nav>
      

      </>
   )
}

export default Menu;