import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material'
import './weatherCard.css'

export default function ({ weatherObj }) {
    // console.log(weatherObj);
    const { location, current } = weatherObj;
    return (
        <React.Fragment>
            <Typography gutterBottom component='div' variant='h3' >
                {location.name} , {location.country}
            </Typography>
            <Card sx={{ marginTop: '1rem' }} >
                <CardMedia
                    component='img'
                    image={current.condition.icon}
                    title={location.name}
                    sx={{ width: '80px' }}
                // height={20}
                />
                <CardContent
                    sx={{ width: '400px' }}

                >
                    <div className='card-content' >
                        <Typography gutterBottom component='span' variant='body1'>Temperature</Typography>
                        <Typography gutterBottom component='span' variant='subtitle1'>{current.temp_c}C/{current.temp_f}F </Typography>
                    </div>
                    <div className='card-content' >
                        <Typography gutterBottom component='span' variant='body1'>Condition </Typography>
                        <Typography gutterBottom component='span' variant='subtitle1'>{current.condition.text}</Typography>
                    </div>
                    <div className='card-content' >
                        <Typography gutterBottom component='span' variant='body1'>Wind Speed </Typography>
                        <Typography gutterBottom component='span' variant='subtitle1'> {current.wind_kph} </Typography>
                    </div>
                    <div className='card-content' >
                        <Typography gutterBottom component='span' variant='body1'>Humidity </Typography>
                        <Typography gutterBottom component='span' variant='subtitle1'>{current.humidity}  </Typography>
                    </div>
                    <div className='card-content' >
                        <Typography gutterBottom component='span' variant='body1'>Cloud Coverage </Typography>
                        <Typography gutterBottom component='span' variant='subtitle1'>{current.cloud}%  </Typography>
                    </div>
                    <div className='card-content' >
                        <Typography gutterBottom component='span' variant='body1'>Last Updated </Typography>
                        <Typography gutterBottom component='span' variant='subtitle1'> {location.localtime} </Typography>
                    </div>


                </CardContent>
            </Card>
        </React.Fragment>
    )
}