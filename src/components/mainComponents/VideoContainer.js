import React from 'react'
import ReactPlayer from 'react-player'
import video from '../../video/rebajas.mp4'
import NavLink from '../styledComponent/NavLink'


const VideoContainer = () => {
  return (

    <NavLink to={'/products'}
      sx={{ display: 'flex', width: '100%' }}>
      <ReactPlayer
        playing={true}
        muted={true}
        url={video}
        loop
        width='100%'
        height='100%'
      />
    </NavLink>




  )
}

export default VideoContainer