import {Box, Button, Container, TextField, Typography} from '@mui/material';
import React from 'react';
import bg from '../../../images/appointment-bg.png';
const formBg={
    background: `url(${bg})`,
    backgroundColor: 'rgba(45,58,74,0.8)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: '200px'
}
const ContactForm = () => {
    return (
        <Container style={formBg}>
            <Typography variant="h6" style={{color:'white'}} component="h2">
              Contact Us
            </Typography>
            <Typography variant="h3" style={{color:'white'}} component="h2">
              Always Contact with Us
            </Typography>
            <form>
                <TextField
                    style={{backgroundColor:'white'}}
            sx={{width: '90%', m:2}}
            label=""
            id="outlined-size-small"
            defaultValue='Email Address*'
        />
        <TextField
            sx={{width: '90%', m:2}}
            label=""
            id="outlined-size-small"
                    defaultValue="Subject"
                    style={{backgroundColor:'white'}}
        />
        <TextField
            sx={{width: '90%', m:2}}
            label=""
            id="outlined-size-small"
            defaultValue="your message"
            style={{backgroundColor:'white'}}
        />
            <Button style={{display:'block'}} sx={{ml:7, px:3, py:1 }} type='submit' variant="contained">Submit</Button>
            </form>
          </Container>
    );
};

export default ContactForm;