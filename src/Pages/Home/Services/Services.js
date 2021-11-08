import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import {Container} from '@mui/material';
import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
const services=[
    {
        name: 'Flouride Treatment',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos eaque, at quidem nesciunt repudiandae ex.',
        img: fluoride
    },
    {
        name: 'Cavity Treatment',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos eaque, at quidem nesciunt repudiandae ex.',
        img: cavity
    },
    {
        name: 'Whitening Treatment',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos eaque, at quidem nesciunt repudiandae ex.',
        img: whitening
    },
]
const Services = () => {
    return (


        <Box sx={{flexGrow: 1}}>
            <Container>
        <Typography sx={{fontWeight:500,m:2, color: 'success.main'}}  variant="h6" component="div">
                OUR SERVICES
        </Typography>
        <Typography sx={{fontWeight:600, m:3}} variant="h4" component="div">
            SERVICES WE PROVIDE
        </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {services.map((service, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
                <Service
                    key = {service.name}
                service={service}
                ></Service>
          </Grid>
        ))}
      </Grid></Container>
    </Box>
    );
};

export default Services;