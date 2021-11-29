import React from 'react';
import '../Subscriptions/Subscriptions.css';
import { NavLink } from 'react-router-dom';
import Users from '../../../Assets/Images/user-sub.svg';
import Userss from '../../../Assets/Images/user-img.svg';
import Food from '../../../Assets/Images/food.svg'


function Subscriptions (){
   return (
      <>
      <ul className="subscriptionsmenu-list">
         <li className="subscriptionsmenu-list__item">
            <NavLink to='/channel'>
            <img className="item__img"
            src={Users} 
            alt="User icon"
            width = "26" height = "26" />
            Gussie Singleton
            </NavLink>
         </li>
         <li className="subscriptionsmenu-list__item">
         <NavLink to='/channel'>
            <img className="item__img"
            src={Userss} 
            alt="User icon"
            width = "26" height = "26" />
            Nora Francis
            </NavLink>
         </li>
         <li className="subscriptionsmenu-list__item">
         <NavLink to='/channel'>
            <img className="item__img"
            src={Food} 
            alt="User icon"
            width = "26" height = "26" />
            Food and Drink
            </NavLink>
         </li>
         <li className="subscriptionsmenu-list__item">
         <NavLink to='/channel'>
            <img className="item__img"
            src={Userss} 
            alt="User icon"
            width = "26" height = "26" />
            Nora Francis
            </NavLink>
         </li>
         <li className="subscriptionsmenu-list__item">
         <NavLink to='/channel'>
            <img className="item__img"
            src={Userss} 
            alt="User icon"
            width = "26" height = "26" />
            Nora Francis
            </NavLink>
         </li>
         <li className="subscriptionsmenu-list__item">
         <NavLink to='/channel'>
            <img className="item__img"
            src={Userss} 
            alt="User icon"
            width = "26" height = "26" />
            Nora Francis
            </NavLink>
         </li>
         
      </ul>
      
      </>
      )
   }
   
   export default Subscriptions;