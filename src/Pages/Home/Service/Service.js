import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
const Service=props => {
    const {service}=props;
    const name=service.name;
    return (
        <Card sx={{minWidth: 275, border: 0, boxShadow: 0}}>
            <CardMedia
                component="img"
                style ={{width: 'auto', height:'80px', margin: '0 auto'}}
        height="140"
        image={service.img}
        alt="green iguana"
      />
      <CardContent>

        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {service.description}
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
    </Card>
    );
};

export default Service;