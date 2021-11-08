import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import {Button, Typography} from '@mui/material';
import {SportsRugbySharp} from '@mui/icons-material';

const appointmentBg={
    background: `url(${bg})`,
    backgroundColor: 'rgba(45,58,74,0.8)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: '200px'
}
const AppointmentBanner = () => {
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
            <img
                style={{width:'500px', marginTop:'-130px'}}
                src={doctor} alt="" />
        </Grid>
                <Grid item xs={12} md={6} sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    textAlign: 'left',
                    alignItems: 'center'

                }}>
                    <Box >
            <Typography variant='h6' sx={{mb:5}} style={{color:'#5CE7ED'}}>
                    Appointment
            </Typography>
            <Typography variant='h4' style={{color:'white'}}>
                    Make an appointment today
            </Typography>
            <Typography variant='h6' sx={{my:5}} style={{color:'white', fontSize:'14px', fontWeight:'300'}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus assumenda nemo sit doloribus eos tempore id magni veritatis eum officia? Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias assumenda vel dolore eius possimus, quae blanditiis quaerat aperiam a et.
                    </Typography>
                    <Button style={{backgroundColor:'rgba(92,231,237,0.7)'}} variant="contained">Learn More</Button></Box>
        </Grid>
      </Grid>
    </Box>
    );
};

export default AppointmentBanner;