import { Button, Card, IconButton, Typography, CardMedia, Box } from "@mui/material"
import { useEffect, useState, useCallback } from 'react';
import NavLink from '../styledComponent/NavLink';
import DeleteIcon from '@mui/icons-material/Delete'

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteItem,modifyItem } from '../../features/cart';
import Counter from "../styledComponent/Counter";

const ShoppingCart = () => {

    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.cartItems)
    const [total, setTotal] = useState(0);
    const [emptyMsg] = useState('Your shopping cart is empty')
    const [currency] = useState(' $ ')
    const [continueShopping] = useState('continue shopping')
    const [goToPayment] = useState('buy')
    const [totalAmount] = useState(`total: ${currency}`)
    const [title]= useState('My shopping cart')

    useEffect(() => {
        const fetchData = async () => {
            try {
                let sum = cartItems.reduce((acc, item) => {
                    return acc + Number(item.price * item.cartQuantity);
                }, 0);
                setTotal(sum.toFixed(2));
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [cartItems])

    const deleteFronCart = useCallback((id) =>{
        const filteredItems = cartItems.filter((cartItem)=>{
            return Number(cartItem.id)!==id
        })
        dispatch(deleteItem(filteredItems))
    }, [cartItems, dispatch]);

    const setUnitsOfItem = useCallback((newItem)=>{
        dispatch(modifyItem(newItem))
      }, [dispatch]);


    return (
        <Box sx={{ minHeight: '800px' }}>
         
            <Card sx={{p:2}}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    m: 2,
                }}>
                    <Typography variant='h4' component='h2' sx={{ textTransform: 'uppercase' }}>{title}</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                    {cartItems.length === 0 ?
                        <Typography sx={{ mt: 2, color: 'red' }}>{emptyMsg}</Typography>
                        :
                        cartItems.map((item) => {
                            return (
                                <CardMedia 
                                raised 
                                key={item.id}
                                sx={{
                                    border: '1px solid grey',
                                    borderRadius: 1,
                                    height: '220px',
                                    m: 2,
                                    p: 1,
                                    width:'100%',
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
                                            <Counter 
                                            max={item.max} 
                                            item={item}
                                            passUnits={setUnitsOfItem}/>
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
                <Box sx={{ border: 'solid 2px black', m:'24px 0', borderRadius: 2 }}>
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
                            onClick={() => alert('Redirect to payment, not implemented')}
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