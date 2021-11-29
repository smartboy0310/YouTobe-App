import React from 'react';
import './SingelVideo.css';
import { NavLink } from 'react-router-dom';

import singelVideo from '../../../Assets/Images/singel-video.svg';
import likeImg from '../../../Assets/Images/like.svg';
import dislikeImg from '../../../Assets/Images/dislike.svg';
import shareImg from '../../../Assets/Images/share.svg';
import moreImg from '../../../Assets/Images/more.svg';
import userImg from '../../../Assets/Images/food.svg';

import Videos from '../Videos/Videos';


function SingelVideo () {
   return (
      <>
      <div className="singel-video">
         <div className="singel-video-info">
         <img className="singel-video__play"
            src={singelVideo} 
            alt="singel-video__play" 
            width="1000" height="500" />
            <h2 className="singel-video__heading">
                Dude You Re Getting A Telescope
            </h2>
            <div className="singel-video__blok">
               <span className="singel-video__span">
                   123k views
               </span>
               <button className="like-btn">
                     <img className="like-btn-img"
                     src={likeImg} alt="like-btn-img"  
                     width="14" height="14"/>
               </button>
               <button className="dislike-btn">
                     <img className="dislike-btn-img"
                     src={dislikeImg} alt="dislike-btn-img"  
                     width="14" height="14"/>
               </button>
               <button className="share-btn">
                     <img className="share-btn-img"
                     src={shareImg} alt="share-btn-img"  
                     width="14" height="14"/>
                     Share
               </button>
               <button className="more-btn">
                     <img className="more-btn-img"
                     src={moreImg} alt="more-btn-img"  
                     width="14" height="14"/>
               </button>
            </div>
            <div className="singel-video__channel">
                <NavLink to='/channel'>
                   <img className="user-img"
                        src={userImg}
                        alt="User icon"
                        width="70" height="70"/>
                </NavLink>
                  <div className="user-info">
                  <strong className="user-name">
                        Food & Drink
                  </strong>
                  <span className="user-subscribe">
                     Published on 14 Jun 2019
                  </span>
                  <p className="user-info__paragraph">
                        A successful marketing plan relies heavily on the pulling-power of advertising copy. 
                        Writing result-oriented ad copy is difficult, as it must appeal to, entice, 
                        and convince consumers to take action. There is no magic formula to write perfect ad copy; 
                        it is based on a number of factors, including ad placement, demographic, even the consumer’s 
                        mood when they see your ad. 
                  </p>
                  </div>
                  <button className="subscribe-btn">
                  Subscribe 2.3m
                  </button>
                  </div>
         </div>
            <Videos />
      </div>
        
      </>
   )
}

export default SingelVideo;