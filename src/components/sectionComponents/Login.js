import { useState } from 'react';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { loadUser } from '../../features/user'
import { useNavigate } from 'react-router-dom';

const theme = createTheme();


const LoginForm = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(loadUser({ 'email': email }))
    navigate('/products')
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: 8,
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="h4" gutterBottom>
            Login
          </Typography>
          <Box component="form"
            onSubmit={handleSubmit}
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              border: '1px solid grey',
              borderRadius: 1,
              p: 3,
            }}
          >

            <TextField
              label="Email Address"
              type="email"
              variant="outlined"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <Button
              type="submit"
              variant="contained"
              color="success"
              sx={{ width: '100%' }}
            >
              Login
            </Button>
            <Typography variant="body1" align="center">
              Don't have an account?{' '}
              <a href="/subscribe" style={{ textDecoration: 'none' }}>
                Subscribe
              </a>
            </Typography>

          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default LoginForm;