import React from 'react'
import video from '../assets/videoes/video1.mp4'
const VideoPlayer = () => {
  return (
    <div>
      <video width="550" height="400" controls>
        <source src={video} type="video/mp4"/>
      </video>
    </div>
  )
}

export default VideoPlayer
