import React from 'react'

const CustomVideo = ({poster}) => {
  return (
    <div className="video-container">
      {/* Add poster attribute to display thumbnail */}
      <video controls poster={poster}>
        <source src="your-video-file.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="play-button"></div>
    </div>
  )
}

export default CustomVideo