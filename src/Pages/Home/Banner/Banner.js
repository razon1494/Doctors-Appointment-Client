import React from 'react';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {Button, Container, Typography} from '@mui/material';
const bannerBg = {
    background: `url(${bg})`,
}
const verticalCenter={
    display: 'flex',
    height: 400,
    alignItems: 'center'
}
const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
                <Grid item xs={12} md={6} style={{...verticalCenter,textAlign: 'start'}}>
                    <Box>
            <Typography variant='h3' >
                        Your New Smile <br /> Starts Here
            </Typography>
            <Typography variant='h6' sx={{my:5,fontSize:14, color: 'gray', fontWeight:300}}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi officia tempora dolorum quas quo ad voluptas, dolorem excepturi quaerat, cupiditate aliquam, voluptatem tenetur! Nihil, ipsam?
                    </Typography>
                    <Button variant='contained'  style={{backgroundColor:'rgba(125,200,237,0.7)', color:'black'}}>Get Appointment</Button></Box>
        </Grid>
        <Grid style={verticalCenter} item xs={12} md={6}>
            <img style={{width:'400px'}} src={chair} alt="" />
        </Grid>

      </Grid>
    </Container>
    );
};

export default Banner;