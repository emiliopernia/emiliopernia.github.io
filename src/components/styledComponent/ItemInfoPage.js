import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import LoadingBar from './LoadingBar';
import ItemCardDesk from './ItemCardDesk';
import { useSelector,useDispatch } from 'react-redux';
import { cartItems } from '../../features/cart';
import ItemCardMobile from './ItemCardMobile';


const ItemInfoPage = ({ responsive, url }) => {


    const items = useSelector((state) => state.items.value)
    const itemsAddedToCart = useSelector((state) => state.cart.cartItems)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [currency] = useState('$')
    const itemId = useParams();
    const [id] = useState(itemId.id)
    const [item, setItem] = useState(null) 

    const addToCart = (item) => {
        const exists = itemsAddedToCart.find((product) => { return Number(product.id) === Number(item.id) })
        if (exists) {
            alert('Product is already in your shopping cart')
        } else {
            dispatch(cartItems(item));
            navigate('/cart')
        }
    }

    useEffect(() => {
        if (items.length === 0) {
            fetchItem(id)
        }
        else {
            setItem(items.find(item => item.id === Number(id)))
        }
    }, [id,items])

    async function fetchItem(id) {
        try {
          const res = await fetch(`${url}/${id}`);
          if (!res.ok) throw new Error('Network response was not ok');
          const item = await res.json();
          setItem({ ...item, max: 4, size: { small: 's', medium: 'm', large: 'l', extraLarge: 'xl' }, cartQuantity: 1 });
        } catch (err) {
          console.log(err);
        }
      }

    if (item && responsive.desk) {
        return (
            <ItemCardDesk item={item} addToCart={addToCart} currency={currency} />
        )
    } else if (item) {
        return (
            <ItemCardMobile item={item} addToCart={addToCart} currency={currency} />
        )
    }
    else {
        return <LoadingBar />
    }


}

export default ItemInfoPage