import {Alert, Container, Grid, Typography} from '@mui/material';
import React, {useState} from 'react';
import Booking from '../Booking/Booking';
const bookings=[
    {
        id: 1,
        name: 'Teeth Orthodontics',
        time: '8:00 AM - 9:00 Am',
        price: 45,
        space: 10
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '10:05AM - 11:30AM',
        price: 60,
        space: 15
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '5:00 PM - 6:30 PM',
        price: 18,
        space: 25
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '7:00 AM - 9:00 AM',
        price: 32,
        space: 30
    },
    {
        id: 5,
        name: 'Root Canal',
        time: '9:00 PM - 10:00 PM',
        price: 70,
        space: 5
    },
    {
        id: 6,
        name: 'Laser Filling',
        time: '3:00PM - 5:00 PM',
        price: 60,
        space: 50
    }
]


const AvailableAppointments=({date}) => {
    const [bookngSuccess, setBookingSuccess]=useState(false);

    return (
        <Container>
            <Typography variant='h4' sx={{color: 'info.main', fontWeight: 500, my: 4}}>Available Appointments on {date.toDateString()}</Typography>
            {
                        bookngSuccess && <Alert severity="success">Booked Successfully</Alert>
                    }
           <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        key={Booking.id}
                        setBookingSuccess ={setBookingSuccess}
                        booking={booking}
                        date = {date}
                    ></Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointments;