import { useState } from 'react'
import { PersonOutlineOutlined } from '@mui/icons-material'
import { IconButton, Menu, MenuItem } from '@mui/material'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {logoutUser} from '../../features/user'

const UserMenu = ({ user }) => {
    
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <>
            <IconButton onClick={handleClick} data-testid="user-menu-button">
                <PersonOutlineOutlined />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {user ? (
                    [
                        <MenuItem key={1} onClick={() => {navigate('/user')}}>Profile</MenuItem>,
                        <MenuItem key={2}>Setup</MenuItem>,
                        <MenuItem key={3} onClick={() => {navigate('/login'); dispatch(logoutUser(null))}}>Logout</MenuItem> 
                    ]
                ) : (
                    <MenuItem onClick={() => {navigate('/login')}}>Login</MenuItem>
                )}
            </Menu>
        </>
    )
}

export default UserMenu