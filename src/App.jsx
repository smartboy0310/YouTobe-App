import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import VideoPage from './Pages/VideoPage/VideoPage';
import HomePage from './Pages/HomePage/HomePage';
import ChannelPage from './Pages/ChannelPage/ChannelPage';

function App() {
  return (
    <>
      <div className="app">
        
        
      
      </div>
          
      <Routes>
				<Route path='/' element={<HomePage />} />

				<Route path='/channel/*' element={<ChannelPage />} />

				<Route path='/video/*' element={<VideoPage />} />
			</Routes>
    </>
  );
}

export default App;
