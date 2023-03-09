import { Box, ImageList } from '@mui/material'
import { useState } from 'react'
import CatBannerCard from '../styledComponent/CatBannerCard'

const BannerCateg = ({ responsive }) => {

    const [bannerCategories]=useState([
        {'title':'bags', 'image':"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"},
        {'title':'accesories', 'image':"https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"},
        {'title':'electronics', 'image':"https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg"},
        {'title':'men', 'image':"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"}
    ])

    return (
        <Box >
            <ImageList sx={{
                display: 'flex', 
                flexDirection: 'row', 
                flexWrap: 'Wrap', 
                width: '100%',
                p:1,
                justifyContent: 'space-around'
            }}>
                {bannerCategories.map((cat)=>{
                    return (<CatBannerCard key={cat.title} item={cat} responsive={responsive}/>)
                })}                
            </ImageList>
        </Box>
    )
}

export default BannerCateg