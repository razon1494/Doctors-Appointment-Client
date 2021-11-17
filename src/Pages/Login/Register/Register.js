import React, {useState} from 'react';
import {Alert, Button, Container, Grid, TextField, Typography} from '@mui/material';

import {NavLink, useHistory} from 'react-router-dom/cjs/react-router-dom.min';
import login from '../../../images/login.png'
import useAuth from '../../../hooks/useAuth';
import {CircularProgress} from '@material-ui/core';

    const Register=() => {
        const [loginData, setLoginData]=useState({})
        const history=useHistory();
        const {user, registerUser, isLoading, authError}=useAuth();
    const handleOnBlur=e => {
        const field=e.target.name;
        const value=e.target.value;
        console.log(field, value);
        const newLoginData={...loginData}
        newLoginData[field]=value;
        console.log(newLoginData);
        setLoginData(newLoginData);

    }
    const handleLoginSubmit=e => {

        if(loginData.password!==loginData.password2) {
            alert('password did not match');
            return;
        }
        registerUser(loginData.email, loginData.password, history, loginData.name);
        e.preventDefault();
    }

    return (
        <Container>
            <Grid container spacing={2} >
                <Grid item sx={{mt:8}} xs={12} md={6}>
                     <Typography variant="body1" gutterBottom>
                        Register
                    </Typography>
                    { !isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{width:"75%",m:1 }}
                            id="standard-basic"
                            label="Your Name"
                            name='name'
                            type="text"
                            onBlur={handleOnBlur}
                            variant="standard"
                        />
                        <TextField
                            sx={{width:"75%",m:1 }}
                            id="standard-basic"
                            label="Your Email"
                            name='email'
                            type="email"
                            onBlur={handleOnBlur}
                            variant="standard"
                        />
                        <TextField
                            sx={{width:"75%",m:1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name='password'
                            onBlur={handleOnBlur}
                            variant="standard"
                        />
                        <TextField
                            sx={{width:"75%",m:1 }}
                            id="standard-basic"
                            label="Re-type Password"
                            type="password"
                            name='password2'
                            onBlur={handleOnBlur}
                            variant="standard"
                        />
                        <NavLink
                            style={{textDecoration:'none'}}
                            to="/login"><Button variant='text'>Already Registered? Login here</Button></NavLink>
                        <Button
                            type='submit'
                            sx={{width: "75%", m: 1}} variant='contained'>register</Button>
                    </form>}
                    {
                        user?.email && <Alert severity="success">Registered Successfully</Alert>
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

export default Register;