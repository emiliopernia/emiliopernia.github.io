import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Box, Button, Container, FormHelperText, TextField, Typography, Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { loadUser } from '../../features/user'

const theme = createTheme();

const Subscribe = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [fieldErrors, setFieldErrors] = useState({
        email: '',
        password: '',
        repeatPassword: '',
        phoneNumber: ''
    });

    const handleEmailChange = (event) => setEmail(event.target.value);
    const handlePasswordChange = (event) => setPassword(event.target.value);
    const handleRepeatPasswordChange = (event) => setRepeatPassword(event.target.value);
    const handleFirstNameChange = (event) => setFirstName(event.target.value);
    const handleLastNameChange = (event) => setLastName(event.target.value);
    const handleDateOfBirthChange = (event) => setDateOfBirth(event.target.value);
    const handlePhoneNumberChange = (event) => setPhoneNumber(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();

        let hasError = false;

        // check if password and repeat password match
        if (password !== repeatPassword) {
            setFieldErrors(prev => ({ ...prev, repeatPassword: 'Passwords do not match' }));
            hasError = true;
        } else {
            setFieldErrors(prev => ({ ...prev, repeatPassword: '' }));
        }

        // check if password meets the required criteria
        const regex = /^(?=.*\d)(?=.*[a-z])[a-zA-Z0-9]{8,12}$/;
        if (!regex.test(password)) {
            setFieldErrors(prev => ({ ...prev, password: 'Password must be 8-12 characters long and contain letters and numbers' }));
            hasError = true;
        } else {
            setFieldErrors(prev => ({ ...prev, password: '' }));
        }

        // check if phoneNumber meets the required criteria
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phoneNumber)) {
            setFieldErrors(prev => ({ ...prev, phoneNumber: 'Invalid phone number' }));
            hasError = true;
        } else {
            setFieldErrors(prev => ({ ...prev, phoneNumber: '' }));
        }
        //check not under 18 
        const dob = new Date(dateOfBirth);
        const today = new Date();
        let age = today.getFullYear() - dob.getFullYear();
        const monthDiff = today.getMonth() - dob.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
            age--;
        }
        console.log(age)
        if (isNaN(dob.getTime()) || age < 18) {
            setFieldErrors(prev => ({ ...prev, dateOfBirth: 'You must be at least 18 years old to subscribe' }));
            hasError = true;
        } else {
            setFieldErrors(prev => ({ ...prev, dateOfBirth: '' }));
        }

        if (!email || !password || !repeatPassword || !firstName || !lastName || !dateOfBirth || !phoneNumber) {
            alert('Please fill in all required fields.');
            hasError = true;
        }

        if (!hasError) {
            console.log(`Email: ${email}, Password: ${password}, Repeat Password: ${repeatPassword}, First Name: ${firstName}, Last Name: ${lastName}, Date of Birth: ${dateOfBirth}, Phone Number: ${phoneNumber}`);
            dispatch(loadUser({ 'email': email }))
            navigate('/products')
        }


    };

    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="sm">
                <Box sx={{ marginTop: 8 }}>
                    <Typography variant="h4" gutterBottom>
                        Subscribe
                    </Typography>
                    <Box component='form'
                        onSubmit={handleSubmit}
                        sx={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2,
                            border: '1px solid grey',
                            borderRadius: 1,
                            p: 3,
                            alignItems: 'center'
                        }}
                    >
                        <TextField
                            margin="normal"
                            type='email'
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            value={email}
                            onChange={handleEmailChange}
                            error={!!fieldErrors.email}
                            helperText={fieldErrors.email}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={handlePasswordChange}
                            error={!!fieldErrors.password}
                            helperText={fieldErrors.password ? fieldErrors.password :
                                <FormHelperText sx={{ m: 0 }}>Password must be 8-12 characters long and have letters and numbers.</FormHelperText>}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="repeatPassword"
                            label="Repeat Password"
                            type="password"
                            id="repeatPassword"
                            autoComplete="current-password"
                            value={repeatPassword}
                            onChange={handleRepeatPasswordChange}
                            error={!!fieldErrors.repeatPassword}
                            helperText={fieldErrors.repeatPassword}
                        />
                        <Box sx={{ width: '100%' }}>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="firstName"
                                        label="First Name"
                                        id="firstName"
                                        value={firstName}
                                        onChange={handleFirstNameChange}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="lastName"
                                        label="Last Name"
                                        id="lastName"
                                        value={lastName}
                                        onChange={handleLastNameChange}
                                    />
                                </Grid>
                            </Grid>
                        </Box>
                        <Box sx={{ width: '100%' }}>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="dateOfBirth"
                                        label="Date of Birth"
                                        id="dateOfBirth"
                                        value={dateOfBirth}
                                        onChange={handleDateOfBirthChange}
                                        error={!!fieldErrors.dateOfBirth}
                                        helperText={fieldErrors.dateOfBirth}
                                        InputProps={{
                                            onFocus: (event) => {
                                                event.currentTarget.type = "date";
                                            },
                                            onBlur: (event) => {
                                                event.currentTarget.type = "text";
                                            },
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="phoneNumber"
                                        label="Phone Number"
                                        id="phoneNumber"
                                        value={phoneNumber}
                                        onChange={handlePhoneNumberChange}
                                        error={!!fieldErrors.phoneNumber}
                                        helperText={fieldErrors.phoneNumber ? fieldErrors.phoneNumber :
                                            <FormHelperText sx={{ m: 0 }}>Phone number must be 10 digits long.</FormHelperText>}
                                    />
                                </Grid>
                            </Grid>
                        </Box>
                        <Button
                            type="submit"
                            variant="contained"
                            color='success'
                            sx={{ mt: 3, mb: 2, width: '50%' }}
                        >
                            Subscribe
                        </Button>
                        <FormHelperText>
                            All fields are required.
                        </FormHelperText>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
export default Subscribe