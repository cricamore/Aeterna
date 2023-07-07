import React, {useState} from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box,CircularProgress } from '@mui/material';
import Image from "next/image";
import aeterna from "../images/aeterna.png";
import LogoutIcon from '@mui/icons-material/Logout';
import { useRouter } from "next/navigation";
import Experience from "../three/Experience";
import ListAltIcon from '@mui/icons-material/ListAlt';
import StadiumIcon from '@mui/icons-material/Stadium';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import BalanceIcon from '@mui/icons-material/Balance';
import LoadingScreen from './loadingScreen'

const ToolbarWithLogout = () => {
  const router = useRouter();
  const [activeModuleIndex, setActiveModuleIndex] = useState(-1);
  const [isExperienceLoaded, setIsExperienceLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = () => {
    setIsLoading(true);
    router.push('/');
  };

  const handleLeccion = () => {
    setIsLoading(true);
    router.push('/planLecciones');
 };

  const handleCameraMove = (index) => {
    setActiveModuleIndex(index);
  };

  return (
    <div>

        {/* Navbar */}
        {isExperienceLoaded ? (<AppBar position="fixed" color="primary" style={{alignItems: 'center', backgroundColor: '#13192F', width: '175px', height: '100vh', left: 0 }}>
            {/* Logo */}
            <Toolbar>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Box sx={{mt:3, cursor:'pointer'}} onClick={()=>handleCameraMove(0)}>
                        <Image src={aeterna} width='150' height='100' alt="icon" />
                    </Box>
                </div>
            </Toolbar>
            {/*Plan de lecciones*/}
            <Toolbar>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <IconButton color="inherit" onClick={handleLeccion}>
                        <ListAltIcon style={{ fontSize: '80px' }} />
                    </IconButton>
                    <Typography variant="subtitle2">PLAN LECCIONES</Typography>
                </div>
            </Toolbar>
            <Toolbar>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <IconButton color="inherit" onClick={()=>handleCameraMove(1)}>
                        <StadiumIcon style={{ fontSize: '80px' }} />
                    </IconButton>
                    <Typography variant="subtitle2">ARQUITECTURA</Typography>
                </div>
            </Toolbar>
            <Toolbar>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <IconButton color="inherit" onClick={()=>handleCameraMove(2)}>
                        <TheaterComedyIcon style={{ fontSize: '80px' }} />
                    </IconButton>
                    <Typography variant="subtitle2">ARTE</Typography>
                </div>
            </Toolbar>
            <Toolbar>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <IconButton color="inherit" onClick={()=>handleCameraMove(3)}>
                        <BalanceIcon style={{ fontSize: '80px' }} />
                    </IconButton>
                    <Typography variant="subtitle2">CULTURA</Typography>
                </div>
            </Toolbar>
            {/* Cerrar sesion */}
            <Toolbar>
              <Box mt={3} onClick={handleLogout} sx={{cursor:'pointer',Zindex: 9999,display:'flex',maxWidth:'200px', position: 'fixed',bottom: '0', left:'0', right:'0',justifyContent: 'left'}}>
                  <Box elevation={3} p={1} sx={{width: '175px',height:'80px',textAlign: 'center', backgroundColor: '#3f51b5', borderRadius: '100% 100% 0 0'}}>
                    <Typography variant="subtitle2" color="inherit" sx={{height:'100%', fontSize: '20px',color:'#FFBD12' , fontWeight:'bold',display:'flex',alignItems:'center', justifyContent: 'center' }}>CERRAR SESIÓN</Typography>
                  </Box>
              </Box>
            </Toolbar>
        </AppBar>) : (<LoadingScreen />)}
        
        
        {/* Modulos */}
        <Experience activeModuleIndex={activeModuleIndex} isExperienceLoaded={isExperienceLoaded} setIsExperienceLoaded={setIsExperienceLoaded} setIsLoading={setIsLoading} />
    
        {isLoading && (
            <Box sx={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0, 0, 0, 0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CircularProgress color="primary" />
            </Box>
        )}
    </div>
  );
};

export default ToolbarWithLogout;
