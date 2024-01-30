import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Alert from '@mui/material/Alert';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import MUILink from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Snackbar from '@mui/material/Snackbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { isEmptyField, isValidEmail } from '../helper/formValidationHelper';
import { validateUserLogin } from '../services/UserService';

import { useDispatch } from 'react-redux';
import { setLoggedInUserData } from '../redux/features/loginSlice';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <MUILink color="inherit" href="https://mui.com/">
        Your Website
      </MUILink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignInSide() {
  const dispatch = useDispatch();
  //for Login message
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(true);

  const navigator = useNavigate();
  const [userData, setUserData] = useState({

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
      const data = await validateUserLogin(userData);

      // console.log(data)
      // console.log(response.data)
      if (data != null) {
        dispatch(setLoggedInUserData(data))
        // User is valid, redirect to "/products"
        setLoginSuccess(true);

        // Show the Snackbar
        setOpenSnackbar(true);
        // navigator("/products");
      } else {
        // User is not found, show an alert
        // console.log(response.data.error)
        setLoginSuccess(false);
        setOpenSnackbar(true);
      }
    }
  }
  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  //error handling
  const [error, setError] = useState({
    email: "",
    password: ""
  })
  function validateForm() {
    let valid = true;

    const sampleError = { ...error };
    const { email, password } = userData;



    if (isEmptyField(email) || !isValidEmail(email)) {
      sampleError.email = isEmptyField(email) ? "Please enter Email!" : "Please enter a valid Email!";
      valid = false;
    }
    else {
      sampleError.email = ""
    }

    if (isEmptyField(password)) {
      sampleError.password = "Please enter Password!"
      valid = false;
    }
    else {
      sampleError.password = ""
    }

    setError(sampleError)
    return valid;

  };


  useEffect(() => {
    if (openSnackbar && loginSuccess) {
      // Delay navigation until the Snackbar is fully displayed
      const timer = setTimeout(() => {
        navigator("/products");
      }, 2000); // Adjust the duration to match the Snackbar autoHideDuration
      return () => clearTimeout(timer);
    }
  }, [openSnackbar, loginSuccess, navigator]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000} // Adjust the duration as needed
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }} // Top-center position
        style={{ zIndex: 1 }} // Set the z-index
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={loginSuccess ? 'success' : 'error'}
        >
          {loginSuccess ? 'Login successful!' : 'Login failed. Please try again.'}
        </Alert>
      </Snackbar>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={handleChange}
                value={userData.email}
                error={error.email !== ""}
                helperText={error.email !== "" ? error.email : ""}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type={userData.showPassword ? "text" : "password"}
                id="password"
                autoComplete="current-password"
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
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                {/* <Grid item xs>
                  <MUILink href="#" variant="body2">
                    Forgot password?
                  </MUILink>
                </Grid> */}
                <Grid item>
                  <Link to="/signup" component={MUILink} variant="body2">
                    <Typography>
                      {"Don't have an account? Sign Up"}
                    </Typography>
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}