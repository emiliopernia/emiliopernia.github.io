import { Box } from '@mui/material'
import React from 'react'
import ReactPlayer from 'react-player'
import video from '../../video/rebajas.mp4'


const VideoContainer = () => {
  return (
   
        <Box component='a' href='https://www.pacomartinez.com/es/rebajas.html' 
        sx={{display:'flex', width:'100%', position:'relative'}}>
            <ReactPlayer 
                playing={true}
                muted={true}
                url={video}
                loop
                width='100%'
                height='100%'
            />
        </Box>
        
    
  )
}

export default VideoContainer