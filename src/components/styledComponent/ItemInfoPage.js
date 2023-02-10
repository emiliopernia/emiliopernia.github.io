import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import { useEffect, useState } from 'react';

import LoadingBar from './LoadingBar';
import ItemCardDesk from './ItemCardDesk';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { cartItems } from '../../features/cart';
import ItemCardMobile from './ItemCardMobile';


const ItemInfoPage = ({responsive}) => {

    const items = useSelector((state)=>state.items.value)
    const itemsAddedToCart = useSelector((state)=>state.cart.value)
    const dispatch=useDispatch();
    const navigate = useNavigate();

    const itemId = useParams();
    const [item, setItem] = useState(null)
    
    const [currency] = useState('$')

    const addToCart = (item) => {
        const exists = itemsAddedToCart.find((product)=>{return Number(product.id)===Number(item.id)})
        if(exists){
            alert('PRODUCTO YA SELECCIONADO (de momento no se controlan cantidades ni se compra mas de una unidad. En desarrollo')
        }else{
            dispatch(cartItems(item));
            navigate('/cart')
        }
        
    }

    useEffect(() => {
        setItem(items.find(item=>item.id===Number(itemId.id)))
    }, [itemId,item])


    if (item&& responsive.desk) {
        return (
            <ItemCardDesk item={item} addToCart={addToCart} currency={currency}/>
        )
    }else if (item){
        return (
            <ItemCardMobile item={item} addToCart={addToCart} currency={currency}/>
            )
    }
     else {
        return <LoadingBar/>
    }


}

export default ItemInfoPage