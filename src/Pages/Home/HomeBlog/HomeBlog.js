import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import trtmnt from '../../../images/treatment.png';
import Grid from '@mui/material/Grid';
import {Button, Container, Typography} from '@mui/material';
const HomeBlog = () => {
    return (
        <Container>
        <Box sx={{ flexGrow: 1, my:5 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
            <img style={{width:'300px'}} src={trtmnt} alt="" />
        </Grid>
        <Grid item xs={12} md={6}>
                    <Typography variant='h3'>Exceptional Dental Care, on Your terms</Typography>
                    <Typography sx={{fontWeight:300, m:3, textAlign: 'justify'}} variant='h6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, consequatur, rem incidunt commodi sit, et error fuga fugit nobis praesentium ex eos nam. Vitae cum, atque veritatis similique alias sapiente quaerat quos expedita a quo quisquam laudantium suscipit aut ducimus, voluptate placeat natus velit enim sed corrupti dolorum perferendis quia!</Typography>

                    <Button style={{backgroundColor:'rgba(92,231,237,0.7)'}} variant="contained">Learn More</Button>
        </Grid>
      </Grid>
    </Box></Container>
    );
};

export default HomeBlog;