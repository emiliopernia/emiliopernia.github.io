import {LinearProgress, Typography,Box } from '@mui/material'

const LoadingBar = () => {
  return (
    <Box sx={{ height: '800px', display: 'flex',flexDirection:'column', alignItems: 'center', pt: 6 }}>
        <Typography variant='h6'>LOADING...</Typography>
        <Box sx={{ width: '50%' }}>
           <LinearProgress color='primary'/>
        </Box>
       
      </Box>
  )
}

export default LoadingBar