import React, { useState } from 'react'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Card, CardActionArea } from '@mui/material';
import { Box } from '@mui/system';


const ActionAreaCard = ({ image, title, price}) => {

    const [currency] = useState('$ ')

    return (
        <Card sx={{
            maxWidth: '300px', height: '600px', margin: '15px 5px', padding: '5px',
            display: 'flex', flexDirection: 'column'
        }}>
            <CardActionArea sx={{ height: '500px' }}>
                <CardMedia
                    component="img"
                    height="100%"
                    image={image}
                    alt={title}
                    sx={{
                        '&.MuiCardMedia-img': {
                            objectFit: 'contain',
                            height: '100%',
                            width: '100%',
                        }
                    }}
                />
                <CardContent sx={{ height: '100px', display: 'flex', flexDirection: 'column', m: 1, p: 1 }}>
                    <Box sx={{
                        height: '80px', overflow: 'hidden', mb: 1,
                        "&:hover": {
                            backgroundColor: 'rgb(225,225,225)',
                            overflow:'auto',
                            "&>.MuiTypography-root":{fontSize:'14px'}
                        }
                    }}>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                    </Box>
                    <Box sx={{ height: '80px', mb: 1 }}>
                        <Typography variant="body1" color="text.secondary" >
                            {currency+price}
                        </Typography>
                    </Box>

                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default ActionAreaCard