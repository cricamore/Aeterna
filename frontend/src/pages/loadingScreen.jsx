import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

const LoadingScreen = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <CircularProgress sx={{color:'black'}} />
      <Typography sx={{ marginTop: '16px', fontWeight:'bold' }}>
        Por favor, espere...
      </Typography>
    </Box>
  );
};

export default LoadingScreen;
