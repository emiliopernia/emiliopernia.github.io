import {Box} from '@mui/material'
import React, {useEffect} from 'react'
import ActionAreaCard from '../styledComponent/ActionAreaCard'
import LoadingBar from '../styledComponent/LoadingBar'
import NavLink from '../styledComponent/NavLink'

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { getItems } from '../../features/items'


const Products = ({ url }) => {

  const items = useSelector((state)=>state.items.value )
  const dispatch=useDispatch();
  

  useEffect(() => {
    const getData = async () => {
      try {
        let data = await fetchList();
        dispatch(getItems(data))
      } catch (err) {
        console.log(err)
        throw err
      }
    }
    getData();
  }, [])

  //Get
  const fetchList = async () => {
    try {
      let res = await fetch(url);
      if (!res.ok) {
        throw new Error('Failed to fetch data')
      }
      let list = await res.json();
      return list;
    } catch (err) {
      console.log('error:' + err)
      throw err
    }
  }

  if (items.length > 0) {
    return (
      <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: 'space-around' }}>
        
        {items.map((item) => {
          return (
            <NavLink key={item.id} to={`/products/` + item.id}>
              <ActionAreaCard
                title={item.title}
                price={item.price}
                image={item.image}
                id={item.id}
              />
            </NavLink>
          )
        })}
      </Box>)

  } else {
    return (
      <LoadingBar/>
    )
  }



}

export default Products