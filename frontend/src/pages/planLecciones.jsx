import React from 'react';
import { List, ListItem, ListItemText, Box, Typography, Button } from '@mui/material';
import roma from '../images/roma.jpg' //frontend/src/pages/planLecciones.jsx
import Image from "next/image"
import { useRouter } from "next/navigation";
import { url } from 'url';
// import { useEffect } from 'react';

const PlanLecciones = () => {
  const leccionesArq = [
    { id: 1, titulo: 'Lección 1: Hogares en el imperio romano'},
    { id: 2, titulo: 'Lección 2: Torres del imperio romano'},
    { id: 3, titulo: 'Lección 3: Coliseo romano'},
    { id: 4, titulo: 'Lección 4: Templo romano'}
  ];

  const leccionesCult = [
    { id: 1, titulo: 'Lección 1: Hogares en el imperio romano'},
    { id: 2, titulo: 'Lección 2: Torres del imperio romano'},
    { id: 3, titulo: 'Lección 3: Coliseo romano'},
    { id: 4, titulo: 'Lección 4: Templo romano'}
  ];

  const leccionesArt = [
    { id: 1, titulo: 'Lección 1: Hogares en el imperio romano'},
    { id: 2, titulo: 'Lección 2: Torres del imperio romano'},
    { id: 3, titulo: 'Lección 3: Coliseo romano'},
    { id: 4, titulo: 'Lección 4: Templo romano'}
  ];

  const router = useRouter();

  const handleClick = () => {
    router.push('/');
  };

  return (
    <div style={{ backgroundColor: '#13192F', width:'100vw', height: '100vh', alignItems:"center", display: "flex", flexDirection: "column" }}>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Typography sx={{color:'#D4AF37', fontFamily:'Roboto, sans-serif', fontWeight:'bold', mt:10, fontSize:40}}>
          Plan de Lecciones
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center" padding="10px">
        <Box display="flex" border="1px solid gray" borderRadius="4px" padding="16px" justifyContent="center" alignItems="center" sx={{ marginRight: '20px', flexDirection: "column" }}>
          <Typography sx={{color:'#D4AF37', fontFamily:'Roboto, sans-serif', fontWeight:'bold', fontSize:28, marginBottom: '-10px'}}>
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
        <Box display="flex" border="1px solid gray" borderRadius="4px" padding="16px" justifyContent="center" alignItems="center" sx={{ marginRight: '20px', flexDirection: "column" }}>
          <Typography sx={{color:'#D4AF37', fontFamily:'Roboto, sans-serif', fontWeight:'bold', fontSize:28, marginBottom: '-10px'}}>
            Módulo Cultura
          </Typography>
          <ul style={{listStyle:'none'}}>
            {leccionesArq.map(leccion => (
              <li key={leccion.id} style={{ marginTop: "-20px", marginBottom: "-20px", font:'Roboto, sans-serif', color: '#C2B8B8' }}>
                <h4>{leccion.titulo}</h4>
              </li>
            ))}
          </ul>
        </Box>
        <Box display="flex" border="1px solid gray" borderRadius="4px" padding="16px" justifyContent="center" alignItems="center" sx={{flexDirection: "column"}}>
          <Typography sx={{color:'#D4AF37', fontFamily:'Roboto, sans-serif', fontWeight:'bold', fontSize:28, marginBottom: '-10px'}}>
            Módulo Arte
          </Typography>
          <ul style={{listStyle:'none'}}>
            {leccionesArq.map(leccion => (
              <li key={leccion.id} style={{ marginTop: "-20px", marginBottom: "-20px", font:'Roboto, sans-serif', color: '#C2B8B8' }}>
                <h4>{leccion.titulo}</h4>
              </li>
            ))}
          </ul>
        </Box>
      </Box>
      <Button variant="contained" sx={{ mt:10}} onClick={handleClick}>Página principal</Button>
    </div>
  );
};

export default PlanLecciones;
