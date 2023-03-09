import { Paper, Typography } from '@mui/material'
import { useSelector } from 'react-redux';

const UserPage = () => {

    const user = useSelector((state)=>state.user.value)

  return (
    <div>
        <Paper sx={{p:6}}>
           <Typography variant='h5'>Hello: {user.email}!!!</Typography> 
        </Paper>
        
    </div>
  )
}

export default UserPage