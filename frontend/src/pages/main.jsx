import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import Image from "next/image";
import aeterna from "../images/aeterna.png";
import LogoutIcon from '@mui/icons-material/Logout';
import { useRouter } from "next/navigation";
import Experience from "../three/Experience";

const ToolbarWithLogout = () => {
  const router = useRouter();
  const handleLogout = () => {
     router.push('/');
  };

  return (
    <div>
        <AppBar position="fixed" color="primary" style={{ backgroundColor: '#13192F', width: '175px', height: '100vh', left: 0 }}>
            <Toolbar>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box sx={{ mt: 3, marginLeft: '-18px'}}>
                    <Image src={aeterna} width='150' height='100' alt="icon" />
                </Box>
            </div>
            </Toolbar>
            <Toolbar sx={{mt:15}}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <IconButton color="inherit" onClick={handleLogout}>
                        <LogoutIcon style={{ fontSize: '100px' }} />
                    </IconButton>
                    <Typography variant="subtitle1">CERRAR SESIÓN</Typography>
                </div>
            </Toolbar>
        </AppBar>
        <Experience />
    </div>
  );
};

export default ToolbarWithLogout;
