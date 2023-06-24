import React,{ useState,useEffect } from 'react'
import APIKit from '../../spotify'
import { IconContext } from "react-icons";
import { AiFillPlayCircle } from "react-icons/ai";
import './library.css'
import { useNavigate } from "react-router-dom";



const Library = () => {

  const [playlists, setPlaylists] = useState(null)


  useEffect(() => {
    APIKit.get('me/playlists').then(function(response){
      setPlaylists(response.data.items)
    }).catch(function(error){
      console.log(error)
    })
  }, [])

  const navigate = useNavigate();

  const playPlaylist = (id) => {
    navigate("/player", { state: { id: id } });
  };


  return (
    <div className='screen-container'>
      <div className='library-body'>
        {
          playlists?.map((playlist) => 
            <div className='playlist-card' key={playlist.id} onClick={() => playPlaylist(playlist.id)} >
              <img src={
                playlist.images.length > 0 ? playlist.images[0].url : 'https://thumbs.dreamstime.com/b/vinyl-player-good-design-textile-t-shirt-print-flyer-posters-background-vector-illustration-image-playlist-vinyl-228018032.jpg'
              } className="playlist-image" alt="Playlist-Art"/>
              <p className="playlist-title">{playlist.name}</p>
              <p className="playlist-subtitle">{playlist.tracks.total} Songs</p>
              <div className="playlist-fade">
                <IconContext.Provider value={{ size: "50px", color: "#E99D72" }}>
                  <AiFillPlayCircle />
                </IconContext.Provider>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Library