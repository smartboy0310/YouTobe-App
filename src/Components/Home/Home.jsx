import React from 'react';
import './Home.css';

import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Main from '../Main/Main';
function Home () {
   return (
      <>
         <Header />
        <main className="home">
            <Menu />
            <Main />
        </main>
      </>
   )
}

export default Home;