import React, { useEffect, useState } from 'react';
import { Grid, LinearProgress, Typography } from '@mui/material';
import aeterna from '../images/aeterna.png';
import Image from 'next/image';

const LoadingScreen = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      width="100%"
    >
      <Grid item>
        <Image src={aeterna} width="180" height="130" alt="icon" />
      </Grid>
      <Grid item>
        <Typography sx={{ fontFamily: 'Arial', fontWeight: 'bold', fontSize: 25, color: '#032861' }}>CARGANDO...</Typography>
      </Grid>
      <Grid item sx={{ width: '17%', my: 4 }}>
        <LinearProgress
          sx={{ '& .MuiLinearProgress-bar': { bgcolor: '#E6B824' }, bgcolor: '#FFECC7' }}
        />
      </Grid>
      <Grid item>
        <Typography sx={{ fontWeight: 'bold', fontSize: 25, color: '#032861' }}>Por favor, espere.</Typography>
      </Grid>
    </Grid>
  );
};

export default LoadingScreen;
