import { Button, Card, IconButton, Typography, CardMedia, Box } from "@mui/material"
import { useEffect, useState } from 'react';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import NavLink from '../styledComponent/NavLink';
import DeleteIcon from '@mui/icons-material/Delete'

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../../features/cart';

const ShoppingCart = () => {

    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.value)
    const [total, setTotal] = useState(0);
    

    useEffect(() => {
        let sum = 0;
        cartItems.map((item) => {
            sum += Number(item.price);
        })
        setTotal(sum.toFixed(2))
    }, [cartItems])



    const [ratingsTitle] = useState('Ratings: ')
    const [emptyMsg] = useState('Your shopping cart is empty')
    const [currency] = useState(' $ ')
    const [continueShopping] = useState('continue shopping')
    const [goToPayment] = useState('buy')
    const [totalAmount] = useState(`total: ${currency}`)
    const [title]= useState('My shopping cart')
    

    const deleteFronCart = (id) =>{
        const filteredItems = cartItems.filter((cartItem)=>{
            console.log(cartItem.id,id)
            return Number(cartItem.id)!==id
        })
        dispatch(deleteItem(filteredItems))
    }

    return (
        <Box sx={{ minHeight: '800px' }}>
            <Card>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    m: 4
                }}>
                    <Typography variant='h4' component='h2' sx={{ textTransform: 'uppercase' }}>{title}</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                    {!cartItems ?
                        <Typography>{emptyMsg}</Typography>
                        :
                        cartItems.map((item) => {
                            return (
                                <CardMedia raised sx={{
                                    border: 'solid 2px #ccc',
                                    borderRadius: 2,
                                    height: '200px',
                                    m: 2,
                                    p: 1,
                                    width: '90%',
                                    display: 'flex',
                                    flexFlow: 'row noWrap',
                                    justifyContent: 'space-between'
                                }}>
                                    <Box sx={{ width: '35%', p: 1 }}>
                                        <Card sx={{ height: '100%' }}>
                                            <CardMedia
                                                component="img"
                                                image={item.image}
                                                alt={item.title}
                                                sx={{
                                                    p: 2,
                                                    height: '100%',
                                                    '&.MuiCardMedia-img': {
                                                        objectFit: 'contain',
                                                        height: '100%',
                                                        width: '100%',
                                                    }
                                                }}
                                            />
                                        </Card>
                                    </Box>

                                    <Box sx={{ height: '100%', width: '45%', p: 1 }}>
                                        <Box sx={{ height: '55%', mb: 1, overflow: 'hidden' }}>
                                            <Typography variant="h5" component="div">{item.title}</Typography>
                                        </Box>
                                        <Box sx={{ height: '20%', mb: 1 }}>
                                            <Typography variant='h6' sx={{ mb: 1.5 }} >{currency} {item.price}</Typography>
                                            <Box sx={{ display: 'flex', flecFlow: 'row noWrap', alignContent: 'center', mb: 1 }}>
                                                <Typography variant='subtitle2'
                                                    sx={{ p: '1px' }} >{ratingsTitle}{item.rating.rate}
                                                </Typography>
                                                <StarBorderIcon color='warning' />
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box sx={{ width: '10%',mr:0.5 }}>
                                        <IconButton 
                                        aria-label="delete" 
                                        color="black"
                                        onClick={()=>{deleteFronCart(item.id)}}
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </Box>
                                </CardMedia>
                            )
                        })

                    }
                </Box>
                <Box sx={{ border: 'solid 2px black', m: 3, borderRadius: 2 }}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>


                        <Button variant="contained" sx={{ width: '80%', m: 2 }}>
                            <NavLink to='/products'>
                                {continueShopping}
                            </NavLink>
                        </Button>

                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                        <Typography sx={{
                            fontWeight: 'bolder',
                            textAlign: 'center',
                            textTransform: 'uppercase',
                            borderBottom: 'solid 2px black'
                        }}>
                            {totalAmount}{total}
                        </Typography>

                        <Button variant='contained'
                            color='success'
                            onClick={() => alert('Redirecciona a metodos de pago, aun no implementado')}
                            sx={{ width: '80%', m: 2 }}>
                            {goToPayment}
                        </Button>
                    </Box>
                </Box>

            </Card>
        </Box>
    )
}

export default ShoppingCart