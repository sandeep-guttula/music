import React,{ useEffect, useState } from 'react'
import { useLocation} from 'react-router-dom'
import './player.css'
import apiClient from '../../spotify';

const Player = () => {
  const location = useLocation();
  const [tracks, setTracks] = useState([])
  const [currentTracks, setCurrentTracks] = useState({})
  const [currentIndex, setCurrentIndex] = useState(0)
  
  useEffect( () => {
    if(location.state){
      apiClient.get(`playlists/${location.state?.id}/tracks`)
      .then((res) => {
        setTracks(res.data.items);
        setCurrentTracks(res.data?.items[0]?.track)
      })
    }
  },[location.state])



  return (
    <div className='screen-container'>
      <div className='left-player-bod' >
      </div>
      <div className='right-player-body' >
        
      </div>
    </div>
  )
}

export default Player