import {Alert, Button, CircularProgress, Container, Grid, TextField, Typography} from '@mui/material';
import React, {useState} from 'react';
import {NavLink, useHistory, useLocation} from 'react-router-dom/cjs/react-router-dom.min';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png'
const Login=() => {
    const [loginData, setLoginData]=useState({})
    const {user, loginUser, isLoading,signInWithGoogle, authError}=useAuth();
    const location=useLocation();
    const history=useHistory();
    const handleOnChange=e => {
        const field=e.target.name;
        const value=e.target.value;
        console.log(field, value);
        const newLoginData={...loginData}
        newLoginData[field]=value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit=e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    const handleGoogleSignIn=() => {
        signInWithGoogle(location, history);
    }
    return (
        <Container>

            <Grid container spacing={2} >
                <Grid item sx={{mt:8}} xs={12} md={6}>
                     <Typography variant="body1" gutterBottom>
                        Login
                    </Typography>
                   <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{width:"75%",m:1 }}
                            id="standard-basic"
                            label="Your Email"
                            name='email'
                            onChange={handleOnChange}
                            variant="standard"
                        />
                        <TextField
                            sx={{width:"75%",m:1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name='password'
                            onChange={handleOnChange}
                            variant="standard"
                        />

                        <Button
                            type='submit'
                            sx={{width: "75%", m: 1}} variant='contained'>Log In</Button>
                         <NavLink
                            style={{textDecoration:'none'}}
                            to="/register"><Button variant='text'>New User? Please Register</Button></NavLink>
                    </form>
                    <p>Or</p>
                    <Button
                        onClick={handleGoogleSignIn}
                            sx={{width: "75%", m: 1, backgroundColor: 'tomato'}} variant='contained'>Google Sign In</Button>
                    {
                        user?.email && <Alert severity="success">Logged In Successfully</Alert>
                    }
                    {
                        isLoading&&<div>
                            <CircularProgress></CircularProgress>
                        </div>
                    }
                    {
                        authError&&<Alert severity="error">{authError}</Alert>
                    }
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={login} style={{width:'100%'}} alt="" />
                </Grid>

            </Grid>

        </Container>
    );
};

export default Login;