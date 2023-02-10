import { useState } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


const SearchBar = ({toggleStatus}) => {
    
    const [searchTextField, setSearchTextField] = useState('');

    function handleClickSearch(value) {
        console.log(value);//this would be calling the search function
        setSearchTextField('');
        toggleStatus();
      }

    return (
        <TextField
            fullWidth
            value={searchTextField}
            onChange={(e) => setSearchTextField(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleClickSearch(searchTextField)
              }
            }}
            placeholder='search'
            color='primary'
            variant='filled'
            inputProps={{
                style: {
                    padding: '2px 5px ',
                }
            }}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end" onClick={() => handleClickSearch(searchTextField)} >
                        <SearchIcon />
                    </InputAdornment>
                ),
            }}
            sx={{
                display: 'flex',
                alignItems: 'ceter',
                '&>.MuiFilledInput-root:before': {
                    borderBottom: 'none'
                },
                '&>.MuiFilledInput-root:after': {
                    borderBottom: 'none'
                },
                '&>.css-hy97yo-MuiInputBase-root-MuiFilledInput-root:hover:not(.Mui-disabled, .Mui-error):before': { borderBottom: 'none' }
            }}
        />
    )
}

export default SearchBar