import {Button, Grid, Typography} from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import BookingModal from '../BookingModal/BookingModal';


const Booking=({booking, date,setBookingSuccess}) => {
  const [openBooking, setOpenBooking] = React.useState(false);
  const handleBookingOpen = () => setOpenBooking(true);
  const handleBookingClose = () => setOpenBooking(false);
    return (
        <>
        <Grid item xs={12} sm={6} md={4} sx={{my:3}}>
        <Paper elevation={3} sx={{py: 3}} >
                <Typography sx={{color: 'info.main', fontWeight: 600}} variant="h5" gutterBottom component="div">
        {booking.name}
      </Typography>
            <Typography variant="h6" gutterBottom component="div">
        {booking.time}
      </Typography>
            <Typography variant="caption" display="block" gutterBottom>
        {booking.space} SPACES AVAILABLE
      </Typography>
            <Button onClick={handleBookingOpen} variant='contained'>Book Appointment</Button>
        </Paper>

        </Grid>
            <BookingModal
                handleBookingClose={handleBookingClose}
                openBooking={openBooking}
          booking={booking}
          setBookingSuccess={setBookingSuccess}
                date ={date}
            ></BookingModal></>
    );
};

export default Booking;