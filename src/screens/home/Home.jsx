import React, { useState , useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Library from '../library/Library'
import Feed from '../feed/Feed'
import Trending from '../trending/Trending'
import  Player  from '../player/Player'
import  Favorites  from '../favorites/Favorites'
import SideBar from '../../components/sidebar/Sidebar'
import Login from '../auth/Login'


import './home.css'
import { setClientToken } from '../../spotify'

const Home = () => {

  const [token, setToken] = useState('')

  useEffect(() => {

    const token = window.localStorage.getItem('token')
    const hash = window.location.hash;
    window.location.hash = ''
    if(!token &&  hash){
      const _token =  hash.split('&')[0].split('=')[1]
      window.localStorage.setItem('token', _token)
      setToken(_token)
      setClientToken(_token)
    } else {
      setToken(token)
      setClientToken(token)
    }
  })

  return !token ? (
    <Login/>
  ): (
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