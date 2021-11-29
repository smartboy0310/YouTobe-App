import React from 'react';
import './User.css';
import LiveVideo from '../../../Assets/Images/video-shape.svg';
import AppShape from '../../../Assets/Images/app-shape.svg';
import NotificationsShape from '../../../Assets/Images/notifications-shape.svg';
import UserImg from '../../../Assets/Images/user-img.svg';


function User () {
   return (
   <>
      <ul className="user-list">
         <li className="user-list__item">
            <img className="user__video"
            src={LiveVideo} 
            alt="Live video icon"
             width="25" height="25"  />
         </li>
         <li className="user-list__item">
            <img className="user__app"
            src={AppShape} 
            alt="app icon"
            width="25" height="25"  />
         </li>
         <li className="user-list__item">
            <img className="user__notifications"
            src={NotificationsShape} 
            alt="notifications icon"
            width="25" height="25"  />
         </li>
         <li className="user-list__item">
            <img className="user__img"
            src={UserImg} 
            alt="User img icon"
            width="40" height="40"  />
         </li>
      </ul>
   </>
   )
}

export default User;