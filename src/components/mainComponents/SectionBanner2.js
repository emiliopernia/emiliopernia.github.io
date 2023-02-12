import { FormControl, Input, Checkbox,FormControlLabel, Button, ButtonGroup, Typography} from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const SectionBanner2 = ({responsive}) => {
  return (
    <Box sx={{marginTop:'48px', alignItems:'center'}}>
      <Typography component='h3' variant='h4' sx={{textAlign:'center'}}>Únete a nuestro newsletter</Typography>
      <Box component='form' sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <FormControl>
          <Input type='email' placeholder='Introduce tu mail' sx={{textAlign:'center'}} />
        </FormControl>
        <FormControlLabel
          label="He leído y acepto la política de privacidad"
          control={<Checkbox color='success'/>}/>
          <Button variant='outlined' sx={{textTransform:'uppercase', width:'fit-content'}}>subscribirse</Button>
          {(responsive.desk) ? 
          <ButtonGroup variant='text' sx={{marginTop:'16px'}}>
            <Button sx={{textTransform:'uppercase'}}>facebook</Button>
            <Button sx={{textTransform:'uppercase'}}>instagram</Button>
            <Button sx={{textTransform:'uppercase'}}>pinterest</Button>
            <Button sx={{textTransform:'uppercase'}}>linkedin</Button>
          </ButtonGroup>
          : 
          <Box sx={{marginTop:'16px', width: '50%'}}>

            <ButtonGroup variant='text' sx={{display:'flex', alignItems:'center', justifyConent:'center'}}>
            <Button sx={{textTransform:'uppercase'}}>facebook</Button>
            <Button sx={{textTransform:'uppercase'}}>instagram</Button>
          </ButtonGroup>
          <ButtonGroup variant='text' sx={{display:'flex', alignItems:'center', justifyConent:'center'}}>
            <Button sx={{textTransform:'uppercase'}}>pinterest</Button>
            <Button sx={{textTransform:'uppercase'}}>linkedin</Button>
          </ButtonGroup>
          </Box>
          }
          <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', marginTop:'64px'}}>
            <Typography component='h3' variant='h2'>for everyday</Typography>
            <Typography component='h3' variant='h2' sx={{textTransform:'uppercase'}}>travellers</Typography>
          </Box>

      </Box>

    </Box>
  )
}

export default SectionBanner2