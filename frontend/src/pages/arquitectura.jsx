import { Container, Box, AppBar, Toolbar, Typography, IconButton, Avatar, Paper, Button, Modal, position } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Close from "@mui/icons-material/Close";
import Image from "next/image";
import aeterna from "../images/aeterna.png";
import Link from "next/link";
import { createContext, useContext, useState, useRef } from "react";
import Experience from "./three/ModuloArquitectura/Experience";
import Evaluacion from "./three/ModuloArquitectura/evaluacion";



export default function Arquitectura() {
  const leccionesCompletadas = [true, true, true, true, false, false];
  const [activeLessonIndex, setActiveLessonIndex] = useState(-1);

  const handleCameraMove = (index) => {
    setActiveLessonIndex(index);
  };

  return (
    <div>
      <AppBar position="fixed" color="primary" style={{ backgroundColor: '#13192F', width: '200px', height: '100vh', left: 0 }}>
        <Toolbar style={{ display: 'flex', justifyContent: 'center' }}>
          <Box display="flex" alignItems="center" flexDirection="column" mt={4}>
            <Box component={Paper} elevation={3} mb={1} sx={{backgroundColor: 'transparent', textAlign: 'center', width: '170px', height:'60px',display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid gray' }}>
              <IconButton color="inherit" >
                <AccountCircle style={{ fontSize: '50px', color:'white' }} />
              </IconButton>
              <Typography variant="subtitle1" sx={{ fontSize: '14px', letterSpacing: '-0.5px', color:'#FFBD12' }}> Nombre de usuario </Typography>
            </Box>
            <Box mt={1}>
                <Link href='/' passHref>
                  <Image src={aeterna} width="120" height="80" alt="icon" />
                </Link>
            </Box>
            <Typography variant="caption" color="textSecondary" sx={{ fontSize: '10px',fontWeight:'bold', textAlign: 'center',color:'#D4AF37' }}> Salir del módulo</Typography>
            <Box component={Paper} elevation={3} mt={4} p={2} sx={{ width: '150px', height:'10px',backgroundColor: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid gray', borderRadius:'20px'}}>
              <Typography variant="subtitle2" color="inherit" sx={{fontSize:'18px',fontWeight:'bold', color:'#D4AF37', display:'flex', alignItems:'center', justifyContent:'center',width:'100%'}}>ARQUITECTURA</Typography>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
              <Box component={Paper} elevation={3} mb={1} p={1} sx={{width:'150px', height:'30px', display: 'flex', alignItems: 'center',borderRadius:'20px', backgroundColor: 'transparent', border: '1px solid gray'}}>
                  <Box
                    sx={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      backgroundColor: leccionesCompletadas[0] ? 'green' : 'white',
                      marginRight: '8px',
                    }}
                  />
                  <Typography variant="subtitle2" color="inherit" sx={{ color: '#FFBD12', fontSize:'18px', display:'flex', alignItems:'center', justifyContent:'center', width:'75%'}} onClick={()=>handleCameraMove(0)}>Lección 1</Typography>
              </Box> 
              <Box component={Paper} elevation={3} mb={1} p={1} sx={{width:'150px',height:'30px', display: 'flex', alignItems: 'center', backgroundColor: 'transparent', border: '1px solid gray', borderRadius:'20px' }}>
                  <Box
                    sx={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      backgroundColor: leccionesCompletadas[1] ? 'green' : 'white',
                      marginRight: '8px',
                    }}
                  />
                  <Typography variant="subtitle2" color="inherit" sx={{ color: '#FFBD12', fontSize:'18px', display:'flex', alignItems:'center', justifyContent:'center', width:'75%' }} onClick={()=>handleCameraMove(1)}>Lección 2</Typography>
              </Box>
              <Box component={Paper} elevation={3} mb={1} p={1} sx={{width:'150px',height:'30px', display: 'flex', alignItems: 'center', backgroundColor: 'transparent', border: '1px solid gray', borderRadius:'20px' }}>
                  <Box
                    sx={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      backgroundColor: leccionesCompletadas[2] ? 'green' : 'white',
                      marginRight: '8px',
                    }}
                  />
                  <Typography variant="subtitle2" color="inherit" sx={{ color: '#FFBD12', fontSize:'18px', display:'flex', alignItems:'center', justifyContent:'center', width:'75%' }} onClick={()=>handleCameraMove(2)}>Lección 3</Typography>
              </Box>
              <Box component={Paper} elevation={3} mb={1} p={1} sx={{width:'150px',height:'30px', display: 'flex', alignItems: 'center', backgroundColor: 'transparent', border: '1px solid gray', borderRadius:'20px' }}>
                  <Box
                    sx={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      backgroundColor: leccionesCompletadas[3] ? 'green' : 'white',
                      marginRight: '8px',
                    }}
                  />
                  <Typography variant="subtitle2" color="inherit" sx={{ color: '#FFBD12', fontSize:'18px', display:'flex', alignItems:'center', justifyContent:'center', width:'75%' }} onClick={()=>handleCameraMove(3)}>Lección 4</Typography>
              </Box>
              {/* <Box component={Paper} elevation={3} mb={1} p={1} sx={{width:'150px',height:'30px', display: 'flex', alignItems: 'center', backgroundColor: 'transparent', border: '1px solid gray', borderRadius:'20px' }}>
                  <Box
                    sx={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      backgroundColor: leccionesCompletadas[4] ? 'green' : 'white',
                      marginRight: '8px',
                    }}
                  />
                  <Typography variant="subtitle2" color="inherit" sx={{ color: '#FFBD12', fontSize:'18px', display:'flex', alignItems:'center', justifyContent:'center', width:'75%' }} onClick={()=>handleCameraMove(4)}>Lección 5</Typography>
              </Box> */}
              <Box component={Paper} elevation={3} mb={1} p={1} sx={{width:'150px',height:'30px', display: 'flex', alignItems: 'center', backgroundColor: 'transparent', border: '1px solid gray',borderRadius:'20px' }}>
                  <Box
                    sx={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      backgroundColor: leccionesCompletadas[5] ? 'green' : 'white',
                      marginRight: '8px',
                    }}
                  />
                  <Evaluacion variant="subtitle2" color="inherit" sx={{ color: '#FFBD12', fontSize:'18px', display:'flex', alignItems:'center', justifyContent:'center', width:'75%' }}></Evaluacion>
              </Box>
            </Box>
            <Link href='/' passHref>
                  <Box mt={3}>
                    <Box component={Paper} elevation={3} p={1} sx={{position: 'absolute',marginTop:'50px', left:'0', right:'0',height:'100px', textAlign: 'center', backgroundColor: '#3f51b5', borderRadius: '100% 100% 0 0', width: '100%'}}>
                      <Typography variant="subtitle2" color="inherit" sx={{height:'100%', fontSize: '20px',color:'#FFBD12' , fontWeight:'bold',display:'flex',alignItems:'center', justifyContent: 'center' }}>CERRAR SESIÓN</Typography>
                    </Box>
                  </Box>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Experience activeLessonIndex={activeLessonIndex}/>
    </div>
   
  );
}
