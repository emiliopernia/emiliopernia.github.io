import React, { useState,useEffect} from 'react'
import { Paper, Typography } from '@mui/material'

const TopHeader = ({textArr}) => {

  const[text, setText]=useState(textArr[0]);
  const [i,setI]=useState(0)
    
  useEffect(() => {
    const timer = setTimeout(() => {
      if (i>=textArr.length-1){
        setI(0)
        }else{
        setI(i+1);
      }
      setText(textArr[i])
    }, 10000);
    return () => clearTimeout(timer);
  }, [i,textArr]);

  return (
    <Paper elevation={1} sx={{display:'flex', justifyContent:'center', width:'100%'}}>
      <Typography component='p' sx={{fontSize:'2vw'}}>{text}</Typography>
    </Paper>
  )
}

export default TopHeader