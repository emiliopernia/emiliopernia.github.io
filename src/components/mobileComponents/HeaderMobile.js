import ScrollMenu from "../styledComponent/ScrollMenu";
import { AppBar, Toolbar, IconButton, Typography, List, ListItem, Grid } from "@mui/material"
import { Box } from "@mui/system";
import { ShoppingBagOutlined, PersonOutlineOutlined, FavoriteBorderOutlined } from '@mui/icons-material'
import NavLink from "../styledComponent/NavLink";
import UserMenu from '../styledComponent/UserMenu';




const HeaderMobile = ({ title, navMenu, cartItemsSize,user }) => {



    return (
        <AppBar component='div' color='inherit' sx={{ boxShadow: 'none', position: 'static' }}>
            <Toolbar disableGutters>
                <Grid container spacing={2}
                    sx={{
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '16px',
                        margin: '0',
                        '&>.MuiGrid-item': {
                            padding: 0
                        }
                    }}>
                    <Grid item xs={1}>
                        <Box sx={{ display: "flex", flexDirection: "row nowrap" }}>
                            <ScrollMenu navMenu={navMenu} />
                        </Box>
                    </Grid>
                    <Grid item xs={7}>
                        <Box>
                            <Typography component="h1" sx={{
                                textAlign: 'center', textTransform: 'uppercase',
                                fontFamily: 'Aldrich', letterSpacing: '6px', fontSize: '3.2vw'
                            }}>{title}</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box>
                            <List sx={{ display: "flex", flexDirection: "row nowrap" }}>
                                <ListItem>
                                    <IconButton>
                                        <FavoriteBorderOutlined />
                                    </IconButton>
                                </ListItem>
                                <ListItem>
                                    <UserMenu user={user} />
                                </ListItem>
                                <ListItem>
                                    <Box sx={{ display: 'flex' }}>
                                        <IconButton>
                                            <NavLink to={'/cart'}>
                                                <ShoppingBagOutlined />
                                            </NavLink>
                                        </IconButton>
                                        <Box sx={{
                                            backgroundColor: 'rgba(130,130,130,0.2)',
                                            borderRadius: '50%',
                                            zIndex: 2, height: '20px',
                                            width: '20px',
                                            display: "flex",
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            ml: -2.2,
                                        }}>
                                            <Typography sx={{ fontSize: '10px', color: 'black' }}>{cartItemsSize}</Typography>
                                        </Box>
                                    </Box>
                                </ListItem>
                            </List>
                        </Box>
                    </Grid>
                </Grid>
            </Toolbar>

        </AppBar>
    )
}

export default HeaderMobile