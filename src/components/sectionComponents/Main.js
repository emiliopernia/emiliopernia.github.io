import React from 'react'
import { Box } from '@mui/system'
import VideoContainer from '../mainComponents/VideoContainer'
import BannerCateg from '../mainComponents/BannerCateg'
import SectionCategory from '../mainComponents/SectionCategory'
import SectionBanner2 from '../mainComponents/SectionBanner2'

const Main = ({responsive}) => {
  return (
    <Box sx={{display:'flex',
              width:'100%',
              flexDirection:'column'
      }} >
      <VideoContainer/>
      <BannerCateg responsive={responsive}/>
      <SectionCategory responsive={responsive}/>
      <SectionBanner2 responsive={responsive}/>
    </Box>
  )
}

export default Main