import React, { useState } from 'react'
import TopHeader from './deskComponents/TopHeader'
import MediumHeader from './deskComponents/MediumHeader'
import BottomHeader from './deskComponents/BottomHeader'
import HeaderMobile from './mobileComponents/HeaderMobile'
import HeaderTablet from './tabletComponents/HeaderTablet'
import { Card } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useSelector } from 'react-redux';


const Header = ({ responsive }) => {

  const cartItems = useSelector((state) => state.cart.cartItems )
  const user = useSelector((state)=>state.user.value)
  const cartItemsSize= cartItems.length;

  const HeaderCard = styled(Card)(()=>({
    display:'flex',
    flexDirection: 'column', 
    alignItems: 'center'
  }))

  const[navMenu,setNavMenu]=useState(['home','travel','bags','accesories','men','products'])
  const [text] = useState(['TO STORE! delivery delay time to a store is 4/7 days',
    'Change and devolutions time is now until 04/01/2023'])

  
  if (responsive.mobile) {
    return (
      <HeaderCard>
        <HeaderMobile title='PacoMartinez' navMenu={navMenu} cartItemsSize={cartItemsSize} user={user}/>
      </HeaderCard>

    )
  } else if (responsive.tablet) {
    return (
      <HeaderCard>
        <HeaderTablet title='PacoMartinez' navMenu={navMenu} cartItemsSize={cartItemsSize} responsive={responsive} user={user}/>
      </HeaderCard>
    )
  } else if (responsive.desk) {
    return (
      <HeaderCard>
        <TopHeader textArr={text} />
        <MediumHeader title='PacoMartinez' cartItemsSize={cartItemsSize} responsive={responsive} user={user}/>
        <BottomHeader navMenu={navMenu}/>
      </HeaderCard>
    )
  }


}

export default Header