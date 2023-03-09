
import { Box } from '@mui/system'
import VideoContainer from '../mainComponents/VideoContainer'
import BannerCateg from '../mainComponents/BannerCateg'
import SectionCategory from '../mainComponents/SectionCategory'
import SectionBanner2 from '../mainComponents/SectionBanner2'


const Main = (props) => {
  return (
    <Box sx={{display:'flex',
              width:'100%',
              flexDirection:'column'
      }} >
      <VideoContainer/>
      <BannerCateg responsive={props.responsive}/>
      <SectionCategory responsive={props.responsive}/>
      <SectionBanner2 responsive={props.responsive}/>
    </Box>
  )
}

export default Main