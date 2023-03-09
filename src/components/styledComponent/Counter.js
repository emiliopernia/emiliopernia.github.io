import { Button, Typography, Box } from "@mui/material"
import { useState } from "react"

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


const Counter = ({ max,item, passUnits }) => {
    const [units, setUnits] = useState(item.cartQuantity)

    function uploadUnitsToItem(symbol){
        const newUnits = symbol === 'add' ? units + 1 : units - 1;
        const newItem = { ...item, cartQuantity: newUnits };
        setUnits(newUnits);
        passUnits(newItem);
       
    }

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', m: '8px 0' }}>
            <Typography>units:</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', border: 'solid #ccc 1px', borderRadius: 2, ml: 1 }}>
                <Button onClick={() => units > 1 && uploadUnitsToItem('remove')}><RemoveIcon /></Button>
                <Typography p='6px 0'>{units}</Typography>
                <Button onClick={() => units < max && uploadUnitsToItem('add')}><AddIcon /></Button>
            </Box>
        </Box>
    )
}

export default Counter