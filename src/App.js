//import components
import Header from './components/Header'
import Main from './components/sectionComponents/Main'
import Footer from './components/Footer'
import Travel from './components/sectionComponents/Travel'
import Bags from './components/sectionComponents/Bags'
import Accesories from './components/sectionComponents/Accesories'
import Men from './components/sectionComponents/Men'
import Products from './components/sectionComponents/Products'
import ItemInfoPage from './components/styledComponent/ItemInfoPage'
import ShoppingCart from './components/sectionComponents/ShoppingCart'
import BreadcrumbsContainer from './components/BreadcrumbsContainer'

import Subscribe from './components/sectionComponents/Subscribe'
import UserPage from './components/sectionComponents/UserPage'
import Login from './components/sectionComponents/Login'
import { Routes, Route } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'
import { Box, useMediaQuery, useTheme } from '@mui/material'


function App() {

  const url = 'https://fakestoreapi.com/products'
  //declare responsive breackpoints:
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('sm'));
  const tablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const desk = useMediaQuery(theme.breakpoints.up('md'));
  const responsive = {
    'mobile': mobile,
    'tablet': tablet,
    'desk': desk
  };

  return (
    <Box id='html' sx={{width:'100%'}}>
      <CssBaseline />
      <Header responsive={responsive} />
      <BreadcrumbsContainer/>
      <Routes>
        <Route path='/' element={<Main responsive={responsive} />} />
        <Route path='/home' element={<Main responsive={responsive} />} />
        <Route path='/travel' element={<Travel />} />
        <Route path='/bags' element={<Bags />} />
        <Route path='/accesories' element={<Accesories/>}/>
        <Route path='/men' element={<Men/>}/>
        <Route path='/products' element={<Products url={url}/>}/>
        <Route path={`/products/:id`} element={<ItemInfoPage responsive={responsive} url={url}/>}/>
        <Route path={`/cart`} element={<ShoppingCart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/subscribe' element={<Subscribe/>}/>
        <Route path='/user' element={<UserPage/>}/>
        
        
      </Routes>
      <Footer responsive={responsive} />
    </Box>
  );
}

export default App;
