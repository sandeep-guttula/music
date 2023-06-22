import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Library from '../library/Library'
import Feed from '../feed/Feed'
import Trending from '../trending/Trending'
import  Player  from '../player/Player'
import  Favorites  from '../favorites/Favorites'
import SideBar from '../../components/sidebar/Sidebar'

import './home.css'

const Home = () => {
  return (
    <Router>
        <div className='main-body' >
          <SideBar/>
            <Routes>
                <Route path="/" element={<Library/>} />
                <Route path="/feed" element={<Feed/>} />
                <Route path="/trending" element={<Trending/>} />
                <Route path="/player" element={<Player/>} />
                <Route path="/favorites" element={<Favorites/>} />
            </Routes>
        </div>
    </Router>
  )
}

export default Home