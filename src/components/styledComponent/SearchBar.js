import { useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ toggleStatus,responsive }) => {
  const [value, setValue] = useState(null);
  const [isFocused, setIsFocused] = useState(false);

  function handleSearch() {
    console.log(value); // This would be calling the search function
    setValue(null);
    toggleStatus();
  }

  return (
    <Autocomplete
      fullWidth
      value={value}
      onChange={(e, newValue) => {
        setValue(newValue);
      }}
      onKeyPress={(e) => {
        if (e.key === 'Enter') {
          handleSearch();
        }
      }}
      options={[]}
      open={isFocused}
      onOpen={() => {
        setIsFocused(true);
      }}
      onClose={() => {
        setIsFocused(false);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Search"
          color="primary"
          variant="filled"
          InputProps={{
            endAdornment: !responsive.tablet && (
              <SearchIcon
                color="primary"
                sx={{ cursor: 'pointer' }}
                onClick={handleSearch}
              />
            ),
            disableUnderline: true,
            sx: {
              '&.MuiInputBase-root': {
                minWidth: responsive.tablet && '100px',
                borderRadius: 10,
                transition: 'all 0.3s ease-in-out',
                '&.Mui-focused': {
                  boxShadow: '0 0 0 1px rgba(100, 100, 100, 0.3)',
                  height: 40,
                  padding: '5px 5px',
                },
                height: 32,
                padding: '5px 5px',
                '&:hover': {
                  backgroundColor: '#f5f5f5',
                },
              },
            },
          }}
          onBlur={() => setIsFocused(false)}
        />
      )}
    />
  );
};

export default SearchBar;