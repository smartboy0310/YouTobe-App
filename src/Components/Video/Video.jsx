import React from 'react';
import './Video.css';

import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import SingelVideo from './SingelVideo/SingelVideo';
function Video () {
   return (
      <>
         <Header />
        <main className="video">
            <SingelVideo />
        </main>
      </>
   )
}

export default Video;