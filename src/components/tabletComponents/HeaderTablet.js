
import SearchBar from "../styledComponent/SearchBar";
import { Box } from "@mui/system";
import { AppBar, Toolbar, IconButton, Typography, List, ListItem, Grid } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { ShoppingBagOutlined, PersonOutlineOutlined, FavoriteBorderOutlined } from '@mui/icons-material';
import { useToggle } from "../../hooks/useToggle";
import ScrollMenu from "../styledComponent/ScrollMenu";
import NavLink from "../styledComponent/NavLink";
import UserMenu from '../styledComponent/UserMenu';

const HeaderTablet = ({ title, navMenu, cartItemsSize,responsive, user }) => {

    const { status: openSearch, toggleStatus } = useToggle(false)

    return (
        <AppBar component='div' color='inherit' sx={{ boxShadow: 'none', position: 'static' }}>
            <Toolbar>
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
                    <Grid item xs={2}>

                        <Box sx={{ display: "flex", flexDirection: "row nowrap", alignItems: 'center' }}>

                            <ScrollMenu navMenu={navMenu} />
                            {!openSearch ?
                                <IconButton onClick={() => { toggleStatus(true) }}>
                                    <SearchIcon />
                                </IconButton>
                                :
                                <SearchBar responsive={responsive} toggleStatus={() => toggleStatus(false)} />
                            }
                        </Box>
                    </Grid>
                    <Grid item xs={8}>
                        <Box>
                            <Typography component="h1" sx={{
                                textAlign: 'center', textTransform: 'uppercase',
                                fontFamily: 'Aldrich', letterSpacing: '6px', fontSize: '3.2vw'
                            }}>{title}</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={2}>
                        <Box>
                            <List sx={{ display: "flex", flexDirection: "row nowrap" }}>
                                <ListItem>
                                    <IconButton>
                                        <FavoriteBorderOutlined />
                                    </IconButton>
                                </ListItem>
                                <ListItem>
                                <UserMenu user={user}/>
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
                                            ml: -2
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

export default HeaderTablet