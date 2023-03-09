import { Typography, List, ListItem, IconButton, Grid,Box } from '@mui/material'
import {
  SearchOutlined, LocationOnOutlined, LocalPostOfficeOutlined, ShoppingBagOutlined, FavoriteBorderOutlined
} from '@mui/icons-material'
import { useToggle } from '../../hooks/useToggle';
import SearchBar from '../styledComponent/SearchBar';
import NavLink from '../styledComponent/NavLink';
import UserMenu from '../styledComponent/UserMenu';



const MediumHeader = ({ title,cartItemsSize,responsive,user }) => {

  const { status: openSearch, toggleStatus } = useToggle(false)

  return (

    <Grid container spacing={2}
      sx={{
        alignItems: 'center',
        padding: '16px',
        margin: '0',
        '&>.MuiGrid-item': {
          padding: 0
        }
      }}>
      <Grid item xs={2}>
        {!openSearch ?
          <List sx={{ display: "flex", flexDirection: "row", alignContent: "center", width: '50%' }}>
            <ListItem>
              <IconButton>
                <LocationOnOutlined />
              </IconButton>
            </ListItem>
            <ListItem>
              <IconButton onClick={() => toggleStatus(true)}>
                <SearchOutlined />
              </IconButton>
            </ListItem>
          </List>
          :
          <SearchBar responsive={responsive} toggleStatus={() => toggleStatus(false)} />
        }
      </Grid>

      <Grid item xs={8}>
        <Typography component="h1" sx={{
          textAlign: 'center', textTransform: 'uppercase',
          fontFamily: 'Aldrich', letterSpacing: '6px', fontSize: '3.2vw'
        }}>{title}</Typography>
      </Grid>

      <Grid item xs={2}>
        <List sx={{ display: "flex", flexDirection: "row" }}>
          <ListItem>
            <IconButton>
              <LocalPostOfficeOutlined />
            </IconButton>
          </ListItem>
          <ListItem>
            <IconButton>
              <FavoriteBorderOutlined />
            </IconButton>
          </ListItem>
          <ListItem>
            <UserMenu user={user}/>
          </ListItem>
          <ListItem>
            <Box sx={{display:'flex'}}>
              <IconButton>
                <NavLink to={'/cart'}>
                  <ShoppingBagOutlined />
                </NavLink>
              </IconButton>
              <Box sx={{backgroundColor:'rgba(130,130,130,0.2)',
              borderRadius: '50%',
              zIndex:2, height:'20px', 
              width:'20px',
              display: "flex", 
              alignItems:'center',
              justifyContent:'center',
              ml:-2
              }}>
                <Typography sx={{fontSize: '10px',color:'black'}}>{cartItemsSize}</Typography>
              </Box>
            </Box>
          </ListItem>
        </List>
      </Grid>

    </Grid>
  )
}

export default MediumHeader