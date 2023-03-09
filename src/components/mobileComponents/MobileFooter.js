import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, List, ListItem, ListItemText, Typography, FormControl, Box, InputLabel, Select, MenuItem } from '@mui/material'
import CopyrightIcon from '@mui/icons-material/Copyright';
import AddIcon from '@mui/icons-material/Add'; 
import RemoveIcon from '@mui/icons-material/Remove';
import { useState, useCallback } from 'react';

const MobileFooter = ({ selectCountry, selected, allOptions, onChange, trademark,tmDescription  }) => {
    //const { status: expanded, toggleStatus } = useToggle(false)
    const [expanded, setExpanded] = useState(false);

    const handleChange = useCallback((acor) => (event, isExpanded) => {
        setExpanded(isExpanded ? acor : false);
      }, [setExpanded]);

    return (
        <Box sx={{ margin: '72px 0' }}>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120, marginBottom: '24px', '&>.MuiInputBase-root': { marginTop: 0 } }}>
                <InputLabel id="country-label" sx={{
                    padding: '0', transformOrigin: 'bottom',
                    lineHeight: '1.6rem', textTransform: 'uppercase'
                }} />
                <Select
                    labelId="country-label"
                    id="demo-simple-select-standard"
                    value={selected}
                    label="country-label"
                    onChange={(e) => { e.preventDefault(); onChange(e.target.value) }}
                    sx={{textTransform:'uppercase'}}
                >
                    {selectCountry.map((country) => {
                        return <MenuItem key={country} value={country} sx={{ textTransform: 'uppercase' }}>{country}</MenuItem>
                    })}
                </Select>
            </FormControl>

            {allOptions.map((options, i) => {
                return (
                    <Accordion key={i}
                        sx={{ backgroundColor: 'none'}}
                        expanded={expanded === 'ALGO'+i} 
                        onChange={handleChange('ALGO'+i)}
                    >
                        <AccordionSummary expandIcon={expanded==='ALGO'+i ? <RemoveIcon/> : <AddIcon />} aria-controls="panel1a-content">
                            <Typography sx={{ textTransform: 'uppercase', textAlign: 'left' }}>{options[0]}</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ padding: '0 16px' }}>
                            <List sx={{ paddingTop: '0' }}>
                                {options.map((value, i) => {
                                    if (i > 0) {
                                        return (
                                            <ListItem key={i}>
                                                <ListItemText primary={value} sx={{ textAlign: 'left' }} />
                                            </ListItem>
                                        )
                                    }else return <React.Fragment key={i}/>
                                })}

                            </List>
                        </AccordionDetails>
                    </Accordion>
                )
            })}
            <Box sx={{ mt: '24px',pr: '16px', display:'flex', flexDirection:'column', alignItems:'flex-end'}}>
                <Box sx={{display:'flex',alignItems:'center'}}>
                <CopyrightIcon sx={{fontSize:'small'}}/>
                <Typography sx={{fontSize:'small',ml:'2px'}}>{trademark}</Typography>
                </Box>
                
                <Typography sx={{fontSize:'small' }}>{tmDescription}</Typography>
            </Box>
        </Box>
    )
}

export default MobileFooter