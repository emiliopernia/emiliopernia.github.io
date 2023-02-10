import { Card,Box,Typography,Grid,CardMedia,Button } from "@mui/material"
import StarBorderIcon from '@mui/icons-material/StarBorder';

const ItemCardDesk = ({item,addToCart,currency}) => {
  return (
    <Card sx={{ height: '800px', p: 2 }}>
                <Box sx={{ height: '5%' }}>
                    <Typography variant='body'
                        gutterBottom
                        sx={{
                            textTransform: 'uppercase'
                            , borderBottom: 'solid 1.5px #ccc',
                            p: 0.5,
                            m: 0.5
                        }}
                    >{item.category}</Typography>
                </Box>
                <Grid container spacing={2} sx={{ height: '90%' }}>
                    <Grid item xs={6}>
                        <Card raised sx={{ height: '80%', width: "80%" }}>
                            <CardMedia
                                component="img"
                                image={item.image}
                                alt={item.title}
                                sx={{
                                    '&.MuiCardMedia-img': {
                                        objectFit: 'contain',
                                        height: '100%',
                                        width: '100%',
                                    }
                                }}
                            />
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Box sx={{ height: '100%' }}>
                            <Box sx={{ height: '35%', mb: 2 }}>
                                <Typography variant="h3" component="div">{item.title}</Typography>
                            </Box>
                            <Box sx={{ height: '20%', mb: 2 }}>
                                <Typography variant='h6' sx={{ mb: 1.5 }} >{currency} {item.price}</Typography>
                                <Box sx={{ display: 'flex', flecFlow: 'row noWrap', alignContent: 'center', mb: 1 }}>
                                    <Typography variant='subtitle2'
                                        sx={{ p: '1px' }} >Rating: {item.rating.rate}
                                    </Typography>
                                    <StarBorderIcon color='warning' />
                                </Box>

                                <Button variant="contained" color='success' onClick={() => addToCart(item)} >Add to cart</Button>
                            </Box>
                            <Box sx={{ height: '30%', mb: 2, display: 'flex', flexDirection: 'column' }}>
                                <Typography variant="h5">Description:</Typography>
                                <Typography variant="body">{item.description}</Typography>
                            </Box>
                        </Box>
                    </Grid>

                </Grid>

            </Card>
  )
}

export default ItemCardDesk