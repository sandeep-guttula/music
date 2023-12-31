import React, { useEffect, useState } from 'react'
import SidebarButton from './SidebarButton'
import { MdFavorite } from "react-icons/md";
import { FaGripfire, FaPlay } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import './sidebar.css'
import apiClient from '../../spotify';

const Sidebar = () => {
  const [image, setImage] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS58iTyerFdO7bi-Uzil7Hs2HlCE9bNDggr8w&usqp=CAU')
  useEffect(() => {
    apiClient.get("me").then(response => { setImage(response.data.images[0].url)})

  })
  return (
    <div className='sidebar-container'>
      <img src={image} className='profile-img' alt='profile' />
      <div>
        <SidebarButton title="" to="/feed" icon={<MdSpaceDashboard/>} />
        <SidebarButton title="trending" to="trending" icon={<FaGripfire />} />
        <SidebarButton title="Player" to="/player" icon={<FaPlay />} />
        <SidebarButton title="Favorites" to="favorites" icon={<MdFavorite />} />
        <SidebarButton title="Library" to="/" icon={<IoLibrary />} />
      </div>
      <SidebarButton title="Sign Out" to="" icon={<FaSignOutAlt />} />
   </div>
  )
}

export default Sidebar