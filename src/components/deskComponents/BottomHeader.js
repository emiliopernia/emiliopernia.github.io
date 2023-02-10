import { List, ListItem, ListItemText, ListItemButton } from '@mui/material'
import NavLink from '../styledComponent/NavLink'

const BottomHeader = ({navMenu}) => {
  return (
    <List component='nav'
      sx={{
        display: "flex", flexDirection: "row", alignContent: "center",
        padding: "4px 20px", width: '70%', justifyContent: 'center'
      }}>
      {navMenu.map((navLink,i)=>{
        return(
        <ListItem key={i} sx={{justifyContent:'center'}}>
        <NavLink to={'/'+navLink}>
          <ListItemButton sx={{padding: '8px'}}>
            <ListItemText primary={navLink} primaryTypographyProps={{ fontSize: '0.9rem', fontWeight: '500' }}
              sx={{ textTransform: 'uppercase' }} />
          </ListItemButton>
        </NavLink>
      </ListItem>)
      })}
    </List>
  )
}

export default BottomHeader