import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createTheme, Box } from '@mui/material';
import { orange } from '@mui/material/colors';
import { BrowserRouter } from 'react-router-dom'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';

import itemsReducer from './features/items'
import cartReducer from './features/cart'
import userReducer from './features/user'

const store = configureStore({
  reducer: {
    items:itemsReducer,
    cart:cartReducer,
    user:userReducer
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
const theme = createTheme({
  palette: {
    primary: {
      main: '#CCC'
    },
    myCustomColor: {
      main: orange[400],
      light: orange[100],
      dark: orange[800]
    },
  },
  components: {
    MuiListItem: {
      styleOverrides: {
        root: {
          padding: 0,
          textAlign: 'center'
        }
      }
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          textAlign: 'center',
        }
      }
    },

  }
})




root.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Box sx={{ display: 'flex', width: '100%', alignContent: 'center' }}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Box>
    </Provider>
  </ThemeProvider>
);


reportWebVitals();
