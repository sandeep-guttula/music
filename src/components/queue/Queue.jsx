import React from 'react'
import './queue.css'

const Queue = ({ tracks,setCurrentIndex }) => {
  return (
    <div className='queue-container flex' >
      <div className='queue flex' >
        <p className='upNext' > Up Next </p>
        <div className='queue-list'>
          {
            tracks.map( (track,index) => (
              <div className='queue-item flex' key={index} onClick={() => setCurrentIndex(index)}>
                <p className='track-name' >{track?.track?.name}</p>
                <p>3:00</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Queue