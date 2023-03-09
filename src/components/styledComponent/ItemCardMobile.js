import { Card, CardActions, CardContent, CardMedia, Button, Typography, Box } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useState } from 'react';
import Counter from './Counter';

const ItemCardMobile = ({ item, addToCart, currency }) => {

    const [newItem,setNewItem]=useState(item)

    const setUnitsOfItem = (itemUpdated)=>{
      setNewItem(itemUpdated)
    }
    return (
        <Card sx={{ maxWidth: '100%', m:1, p:1 }}>
            <CardMedia
                component="img"
                alt={item.title}
                height="100%"
                image={item.image}
                sx={{
                    '&.MuiCardMedia-img': {
                        objectFit: 'contain',
                        height: '100%',
                        width: '100%',
                    }
                }}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {item.description}
                </Typography>
                <Box sx={{display:'flex', justifyContent:'space-between',m:1, alignItems:'center'}}>
                    <Counter max={item.max} item={item} passUnits={setUnitsOfItem}/>
                    <Typography variant='h6' >{currency} {item.price}</Typography>
                    <Box sx={{ display: 'flex', flecFlow: 'row noWrap', alignItems: 'center'}}>
                        <Typography variant='h6'
                            sx={{ p: '1px' }} >Rating: {item.rating.rate}
                        </Typography>
                        <StarBorderIcon color='warning' />
                    </Box>
                </Box>
            </CardContent>
            <CardActions>
                <Button variant="contained"
                 color='success' 
                 onClick={() => addToCart(newItem)}
                 sx={{width:'100%'}}
                 >add to cart</Button>
            </CardActions>
        </Card>
    )
}

export default ItemCardMobile