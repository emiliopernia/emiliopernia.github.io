import { useState } from "react";
import{Menu, MenuItem,IconButton } from "@mui/material";
import NavLink from "../styledComponent/NavLink";
import MenuIcon from '@mui/icons-material/Menu';


const ScrollMenu = ({navMenu}) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <IconButton id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}>
                <MenuIcon />

            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {navMenu.map((itemMenu) => {
                    return (
                        <MenuItem key={itemMenu}
                            onClick={handleClose}
                            sx={{ textTransform: 'uppercase' }}
                        >
                            <NavLink to={'/' + itemMenu}>{itemMenu}</NavLink>
                        </MenuItem>
                    )
                })}

            </Menu>
        </>

    )
}

export default ScrollMenu