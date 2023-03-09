import { Box, MenuItem, List, ListItem, ListItemText, Divider, Select, InputLabel, FormControl,Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import CopyrightIcon from '@mui/icons-material/Copyright';

const DeskFooter = ({ selectCountry, selected, allOptions, onChange, trademark,tmDescription }) => {


  const StyledList = styled(List)(() => ({
    '&>:first-of-type': {
      textTransform: 'uppercase',
      '&>:first-of-type': {
        '&>.MuiListItemText-primary': {
          fontWeight: '600'
        }
      }
    }
  }))

  const StyledListItem = styled(ListItem)(() => ({
    textAlign: 'left'
  }))

  return (
    <Box sx={{ margin: '72px 0' }}>
      <Divider/>
      <Box component='footer' sx={{ display: 'flex', flexFlow: 'row nowrap', justifyContent: 'space-around', marginTop: '24px',p:'16px' }}>
        <FormControl variant="standard" 
        sx={{ mr:'16px',width:'15%', marging: '0', '&>.MuiInputBase-root': { marginTop: 0 } }}>
           <InputLabel id="country-label" sx={{
            padding: '0', transformOrigin: 'bottom',
            lineHeight: '1.6rem', textTransform: 'uppercase'
          }} />
          <Select
            labelId="country-label"
            id="demo-simple-select-standard"
            value={selected}
            label="country-label"
            onChange={(e) => { e.preventDefault(); onChange(e.target.value) }}
            sx={{textTransform:'uppercase'}}
          >
            {selectCountry.map((country) => {
              return <MenuItem key={country} value={country} sx={{ textTransform: 'uppercase' }}>{country}</MenuItem>
            })}
          </Select>
        </FormControl>

        {allOptions.map((option) => {
          return (
            <StyledList key={option} sx={{width:'18%'}}>
              {option.map((value, index) => {

                return <StyledListItem key={index} sx={{'&:hover': {
                  cursor: 'pointer',
                },}}>
                  <ListItemText primary={value} />
                </StyledListItem>

              })}
            </StyledList>
          )

        })}

        <Box sx={{ mt: '24px', pr: '16px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start',width:'18%' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CopyrightIcon sx={{ fontSize: 'small' }} />
            <Typography sx={{ fontSize: 'small', ml: '2px' }}>{trademark}</Typography>
          </Box>

          <Typography sx={{ fontSize: 'small' }}>{tmDescription}</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default DeskFooter