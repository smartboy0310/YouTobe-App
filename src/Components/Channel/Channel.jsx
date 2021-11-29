import React from 'react';
import './Channel.css';

import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import ChannelInfo from './ChannelInfo/ChannelInfo';
function Channel () {
   return (
      <>
            <Header />
        <main className="channel">
            <Menu />
            <ChannelInfo />
        </main>
      </>
   )
}

export default Channel;