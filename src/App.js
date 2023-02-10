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

import { Routes, Route } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'
import { Box, useMediaQuery, useTheme } from '@mui/material'


function App() {

  const url = 'https://fakestoreapi.com/products'
  //aca declaro el responsive. Lo paso como props
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
      <Routes>
        <Route path='/' element={<Main responsive={responsive} />} />
        <Route path='/home' element={<Main responsive={responsive} />} />
        <Route path='/travel' element={<Travel />} />
        <Route path='/bags' element={<Bags />} />
        <Route path='/accesories' element={<Accesories/>}/>
        <Route path='/men' element={<Men/>}/>
        <Route path='/products' element={<Products url={url}/>}/>
        <Route path={`/products/:id`} element={<ItemInfoPage responsive={responsive}/>}/>
        <Route path={`/cart`} element={<ShoppingCart/>}/>
        
      </Routes>
      <Footer responsive={responsive} />
    </Box>
  );
}

export default App;
