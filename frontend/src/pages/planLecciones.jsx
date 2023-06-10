import React from 'react';
import { List, ListItem, ListItemText, Box, Typography, Button } from '@mui/material';
import roma from '../images/roma.jpg' //frontend/src/pages/planLecciones.jsx
import Image from "next/image"
import { useRouter } from "next/navigation";
import { url } from 'url';
// import { useEffect } from 'react';

const PlanLecciones = () => {
  const leccionesArq = [
    { id: 1, titulo: 'Lección 1: Hogares'},
    { id: 2, titulo: 'Lección 2: Torres'},
    { id: 3, titulo: 'Lección 3: Coliseo romano'},
    { id: 4, titulo: 'Lección 4: Templo romano'}
  ];

  const leccionesCult = [
    { id: 1, titulo: 'Lección 1: Religión y Mitología'},
    { id: 2, titulo: 'Lección 2: Derecho'},
    { id: 3, titulo: 'Lección 3: Lengua'},
    { id: 4, titulo: 'Lección 4: Sociedad y Política'}
  ];

  const leccionesArt = [
    { id: 1, titulo: 'Lección 1: Por estrenarse'},
    { id: 2, titulo: 'Lección 2: Por estrenarse'},
    { id: 3, titulo: 'Lección 3: Por estrenarse'},
    { id: 4, titulo: 'Lección 4: Por estrenarse'}
  ];

  const router = useRouter();

  const handleClick = () => {
    router.push('/main');
  };

  return (  //backgroundColor: '#13192F',
    <div style={{ width:'100vw', height: '100vh', alignItems:"center", justifyContent:"center", display: "flex", flexDirection: "column" }}>
      <Box sx={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
        <Image src={roma} layout="fill" objectFit="cover" display="block" alt="Roma imagen"/>
      </Box>

      <Box sx={{ paddingRight:"30px", paddingLeft:"30px", borderRadius:"12px", position: "relative", width:'auto', height: 'auto', alignItems:"center", justifyContent: "center", display: "flex", flexDirection: "column", backgroundColor: 'rgba(19, 25, 47, 0.9)' }}>
        <Box display="flex" justifyContent="center" alignItems="center" marginTop={"-40px"}>
          <Typography sx={{color:'#D4AF37', fontFamily:'Roboto, sans-serif', fontWeight:'bold', mt:10, fontSize:40}}>
            Plan de Lecciones 
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center" padding="10px">
          <Box display="flex" border="1px solid gray" borderRadius="4px" padding="16px" justifyContent="center" alignItems="center" sx={{ width: "300px", marginRight: '20px', flexDirection: "column" }}>
            <Typography sx={{color:'#D4AF37', fontFamily:'Roboto, sans-serif', fontWeight:'bold', fontSize:24, marginBottom: '-10px'}}>
              Módulo Arquitectura
            </Typography>
            <ul style={{listStyle:'none'}}>
              {leccionesArq.map(leccion => (
                <li key={leccion.id} style={{ marginTop: "-20px", marginBottom: "-20px", font:'Roboto, sans-serif', color: '#C2B8B8'}}>
                  <h4>{leccion.titulo}</h4>
                </li>
              ))}
            </ul>
          </Box>
          <Box display="flex" border="1px solid gray" borderRadius="4px" padding="16px" justifyContent="center" alignItems="center" sx={{ width: "300px", marginRight: '20px', flexDirection: "column" }}>
            <Typography sx={{color:'#D4AF37', fontFamily:'Roboto, sans-serif', fontWeight:'bold', fontSize:24, marginBottom: '-10px'}}>
              Módulo Cultura
            </Typography>
            <ul style={{listStyle:'none'}}>
              {leccionesCult.map(leccion => (
                <li key={leccion.id} style={{ marginTop: "-20px", marginBottom: "-20px", font:'Roboto, sans-serif', color: '#C2B8B8' }}>
                  <h4>{leccion.titulo}</h4>
                </li>
              ))}
            </ul>
          </Box>
          <Box display="flex" border="1px solid gray" borderRadius="4px" padding="16px" justifyContent="center" alignItems="center" sx={{ width: "300px", flexDirection: "column" }}>
            <Typography sx={{color:'#D4AF37', fontFamily:'Roboto, sans-serif', fontWeight:'bold', fontSize:24, marginBottom: '-10px'}}>
              Módulo Arte
            </Typography>
            <ul style={{listStyle:'none'}}>
              {leccionesArt.map(leccion => (
                <li key={leccion.id} style={{ marginTop: "-20px", marginBottom: "-20px", font:'Roboto, sans-serif', color: '#C2B8B8' }}>
                  <h4>{leccion.titulo}</h4>
                </li>
              ))}
            </ul>
          </Box>
        </Box>
        <Button variant="contained" sx={{ mt:10, marginBottom:4}} onClick={handleClick}>Página principal</Button>
      </Box>
    </div>
  );
};

export default PlanLecciones;
