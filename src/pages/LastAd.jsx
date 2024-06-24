import React from 'react';
import {Card , Container, CardMedia}from '@mui/material';
import ad from '../assets/lastAd.png';

const LastAd = () => {
  return (
    <Container>
        <Card sx={{marginTop:'50px', marginBottom:'50px'}}>
            <CardMedia component='img' title="ad" image={ad}  />
        </Card>
    </Container>
  )
}

export default LastAd;