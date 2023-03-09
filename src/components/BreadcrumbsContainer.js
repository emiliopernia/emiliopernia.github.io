import { Breadcrumbs, Typography } from '@mui/material'
import { Box,styled } from '@mui/system';
import { useLocation } from 'react-router-dom';
import NavLink from './styledComponent/NavLink';


const BreadcrumbsContainer = () => {

  const BreadcrumbsText = styled(Typography)({
    fontSize:'smaller',
    ':hover':{
      fontSize:'inherit'
    }
  })

  const location = useLocation();

  let currentLink = '';
  let pos = 0;
  //creo arr de crumbs separando donde hay '/' y exceptuando 'home' y '' 
  const crumbs = location.pathname.split('/').filter(crumb => crumb !== 'home' && crumb !== '')

  return (

    <Box component='div' sx={{m: crumbs.length >0 && 1}}>
      <Breadcrumbs separator="|" sx={{alignItems:'flex-end'}}>
      {/* si no esta vacio el arreglo de crumbs, agrego etiqueta home al ppio */}
        {crumbs.length > 0 &&
          <NavLink underline="hover" color="inherit" to='/'>
           <BreadcrumbsText fontSize='smaller'>home</BreadcrumbsText>
          </NavLink>
        }
        {crumbs.map((section,i) => {
          currentLink += `/${section}`;
          pos++;
          if (pos === crumbs.length) {
            return (<BreadcrumbsText key={i} textTransform='uppercase'>{section}</BreadcrumbsText>)
          } else {
            return (
              <NavLink key={i} underline="hover" color="inherit" to={currentLink}>
                <BreadcrumbsText fontSize='smaller'>{section}</BreadcrumbsText>  
              </NavLink>
            )
          }

        }
        )}
      </Breadcrumbs>
    </Box>
  )
}

export default BreadcrumbsContainer