import React from 'react';
import './Additional.css';

import Library from '../../../Assets/Images/library.svg';
import History from '../../../Assets/Images/history.svg';
import WatchLater from '../../../Assets/Images/watch-later.svg';
import Favourites from '../../../Assets/Images/favourites.svg';
import LikedVideos from '../../../Assets/Images/liked.svg';
import Games from '../../../Assets/Images/games.svg';
import Music from '../../../Assets/Images/music.svg';
import ShowRow from '../../../Assets/Images/show-row.svg';


function Additional (){
   return (
      <>
      <ul className="additionalmenu-list">
        
        <li className="additionalmenu-list__item">
            <img className="item__img"
            src={Library} 
            alt="Library menu icon"
            width = "20" height = "20" />
            Library
         </li>
        
         <li className="additionalmenu-list__item">
            <img className="item__img"
            src={History} 
            alt="History menu icon"
            width = "20" height = "20" />
            History
         </li>
         <li className="additionalmenu-list__item">
            <img className="item__img"
            src={WatchLater} 
            alt="Watch later menu icon"
            width = "20" height = "20" />
            Watch later
         </li>
         <li className="additionalmenu-list__item">
            <img className="item__img"
            src={Favourites} 
            alt="Favourites menu icon"
            width = "20" height = "20" />
            Favourites
         </li>
         <li className="additionalmenu-list__item">
            <img className="item__img"
            src={LikedVideos} 
            alt="Liked videos menu icon"
            width = "20" height = "20" />
            Liked videos
         </li>
         <li className="additionalmenu-list__item">
            <img className="item__img"
            src={Music} 
            alt=" Music menu icon"
            width = "20" height = "20" />
            Music
         </li>
         <li className="additionalmenu-list__item">
            <img className="item__img"
            src={Games} 
            alt="Games menu icon"
            width = "20" height = "20" />
            Games
         </li>
         <li className="additionalmenu-list__item">
            <img className="item__img"
            src={ShowRow} 
            alt="row icon"
            width = "20" height = "20" />
            Show more
         </li>
      </ul>
      
      </>
      )
   }
   
   export default Additional;