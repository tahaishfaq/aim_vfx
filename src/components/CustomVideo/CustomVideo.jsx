import React from 'react'
import customVideoPoster from '../../assets/Screenshot 2024-01-29 at 12.00 1.png'
const CustomVideo = () => {
  return (
    <div className="video-container">
      {/* Add poster attribute to display thumbnail */}
      <video controls poster={customVideoPoster}>
        <source src="your-video-file.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="play-button"></div>
    </div>
  )
}

export default CustomVideo