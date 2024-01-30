import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import MUILink from '@mui/material/Link';
import { useState } from 'react';
import { postUser } from '../services/UserService';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { isEmptyField, isValidEmail, isValidPasssword } from '../helper/formValidationHelper';
function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link to={"/"} style={{ textDecoration: "none" }}>

                <MUILink  >
                    Code Family
                </MUILink>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Link>
        </Typography>
    );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {
    const navigator = useNavigate();
    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        showPassword: false
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserData((prevUserData) => ({ ...prevUserData, [name]: value }));
    };
    //   console.log(userData)
    const handleTogglePasswordVisibility = () => {
        setUserData((prevUserData) => ({
            ...prevUserData,
            showPassword: !prevUserData.showPassword,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (validateForm()) {
            // alert("valid data")
            const response = await postUser((userData));
            if (response) {
                alert("User Registered Successfully")
                // console.log(response.data)
                navigator("/login")
            } else {
                alert("A user with is email is already Registered\nPlease try with another email")

            }
        }
    };
    //error handling
    const [error, setError] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    })

    function validateForm() {
        let valid = true;

        const sampleError = { ...error };
        const { firstName, lastName, email, password } = userData;

        if (isEmptyField(firstName)) {
            sampleError.firstName = "Please enter First Name!";
            valid = false;
        }
        else {
            sampleError.firstName = ""
        }

        if (isEmptyField(lastName)) {
            sampleError.lastName = "Please enter Last Name!";
            valid = false;
        }
        else {
            sampleError.lastName = ""
        }

        if (isEmptyField(email) || !isValidEmail(email)) {
            sampleError.email = isEmptyField(email) ? "Please enter Email!" : "Please enter a valid Email!";
            valid = false;
        }
        else {
            sampleError.email = ""
        }


        if (isEmptyField(password) || !isValidPasssword(password)) {
            sampleError.password = isEmptyField(password) ? "Please enter Password!" : "Password must be at least 8 characters long and include at least one letter, one number, and one special character.";
            valid = false;
        }
        else {
            sampleError.password = ""
        }

        setError(sampleError)
        return valid;

    };




    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                    onChange={handleChange}
                                    value={userData.firstName}
                                    error={error.firstName}
                                    helperText={error.firstName || ""}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                    onChange={handleChange}
                                    value={userData.lastName}
                                    error={error.lastName !== ""}
                                    helperText={error.lastName !== "" ? error.lastName : ""}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    onChange={handleChange}
                                    value={userData.email}
                                    error={error.email !== ""}
                                    helperText={error.email !== "" ? error.email : ""}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type={userData.showPassword ? "text" : "password"}
                                    id="password"
                                    autoComplete="new-password"
                                    onChange={handleChange}
                                    value={userData.password}
                                    error={error.password !== ""}
                                    helperText={error.password !== "" ? error.password : ""}
                                    InputProps={{
                                        endAdornment: (
                                            <IconButton
                                                onClick={handleTogglePasswordVisibility}
                                                edge="end"
                                            >
                                                {userData.showPassword ? (
                                                    <VisibilityIcon />
                                                ) : (
                                                    <VisibilityOffIcon />
                                                )}
                                            </IconButton>
                                        ),
                                    }}
                                />
                            </Grid>
                            {/* <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="I want to receive inspiration, marketing promotions and updates via email."
                                />
                            </Grid> */}
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={handleSubmit}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link to="/" component={MUILink} variant="body2" style={{ textDecoration: "none", color: "black" }}>

                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    );
}