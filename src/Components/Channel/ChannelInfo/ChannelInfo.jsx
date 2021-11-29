import React from 'react';
import './ChannelInfo.css';
import { NavLink } from 'react-router-dom';

import userBg from '../../../Assets/Images/user-fon.svg';
import userImg from '../../../Assets/Images/user-sub.svg';
import userNotification from '../../../Assets/Images/notifications-shape.svg';
import search from '../../../Assets/Images/search.svg';
import mainVideo from '../../../Assets/Images/main-video.svg';
import recommendedUser from '../../../Assets/Images/user-img.svg';

import ChannelVideo from '../ChannelVideo/ChannelVideo';


function ChannelInfo () {
   return (
      <>
            
        <div className="channel-info">
           <img className="user-bg-img"
               src={userBg}
               alt="User Backgraund"
               width="1080" height="200"/>
            <div className="channel-user">
                  <img className="user-img"
                  src={userImg}
                  alt="User icon"
                  width="70" height="70"/>
                  <p className="user-info">
                  <strong className="user-name">
                      Margaret Phelps
                  </strong>
                  <span className="user-subscribe">
                   245K subscribed
                  </span>
                  </p>
                  <img className="subscribed-img"
                  src={userNotification}
                  alt="Notification icon"
                  width="20" height="20"/>
                  <button className="subscribe-btn">
                  Subscribe 2.3m
                  </button>

            </div>
            <div className="channel-menu">
               <nav>
                  <ul className="channel-menu__list">
                     <li className="channel-menu__item">
                        Home
                     </li>
                     <li className="channel-menu__item">
                        Videos
                     </li>
                     <li className="channel-menu__item">
                     Playlists
                     </li>
                     <li className="channel-menu__item">
                     Channels
                     </li>
                     <li className="channel-menu__item">
                     Discussion
                     </li>
                     <li className="channel-menu__item">
                     About
                     </li>
                  </ul>
               </nav>
               <img className="channel-menu__search"
                  src={search} alt=""  />
               <p className="recommended-channel">
               Recommended channel
               </p>
            </div>
            <div className="channel-main-video">
               <NavLink to='/video'>
               <img className="main-video-img" 
                  src={mainVideo} alt="main-video-icon"
                  width="350" height="200"  />
               </NavLink>
               <div className="main-video-info">
                  <h3 className="main-video-heading">
                  Choosing The Best Audio Player Software For Your Computer
                  </h3>
                  <p className="main-video-paragraph">
                  Your cheap internet-based banner advertising will become one of the sought for ads there are. 
                  Today, the world of Internet advertising is rapidly evolving beyond banner ads and intrusive pop-ups. 
                  Bayles A common medium for advertising on the Internet is the use of banner ads. 
                  </p>
                  <span className="main-video-mount">
                  11k views  ·  6 months ago
                  </span>
               </div>
               <ul className="recommended-user-list">
                  <li className="recommended-user-item">
                     <img className="recommended-user-img"
                        src={recommendedUser} 
                        alt="recommended-user-icon" 
                        width="40" height="40" />
                        Flora Benson
                  </li>
                  <li className="recommended-user-item">
                     <img className="recommended-user-img"
                        src={recommendedUser} 
                        alt="recommended-user-icon" 
                        width="40" height="40" />
                        Violet Cobb
                  </li>
                  <li className="recommended-user-item">
                     <img className="recommended-user-img"
                        src={recommendedUser} 
                        alt="recommended-user-icon" 
                        width="40" height="40" />
                        Phillip Mullins
                  </li>
               </ul>
            </div>
            <ChannelVideo />
        </div>
      </>
   )
}

export default ChannelInfo;