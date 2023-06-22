import React, { useState } from 'react';
import { Typography,IconButton, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';


const FAQComponent = ({setIsFAQOpen}) => {

  const handleCloseFAQ = () => {
        setIsFAQOpen(false);
  };

  return (
    <div
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: 2,
        borderRadius: 1,
        height:'100%'
      }}
    >
      <IconButton sx={{position:'fixed',bgcolor:'white',color: 'black',left:'90%',marginTop:5}} onClick={handleCloseFAQ}>
        <CloseIcon/>
      </IconButton>
      <Typography variant="h3" sx={{marginTop:4, textAlign: 'center', marginBottom: 4, color: '#FFBD12',fontWeight:'bold', textShadow:'0px 3px 4px rgba(0, 0, 1.5, 1.5)' }}>
        Preguntas Frecuentes
      </Typography>

      <div style={{margin:'auto',height:'60%',width:'60%'}}>

        <Accordion sx={{backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography sx={{fontSize:'20px', fontWeight: 'bold' }}>¿Qué es Aeterna?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography sx={{fontWeight:'bold'}}>
                    Aeterna es una aplicación de aprendizaje online donde podrás aprender acerca de la antigua civilización romana a través de módulos que contienen interacciones para que el aprendizaje sea lo más entretenido posible.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion sx={{backgroundColor: 'rgba(255, 255, 255, 0.7)'}}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{fontSize:'20px',  fontWeight: 'bold' }}>¿Dónde puedo visualizar mi progreso?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography sx={{fontWeight:'bold'}}>
                En el panel lateral izquierdo de cada lección puedes ver el progreso que llevas en cada una de las lecciones. Aquellas lecciones que hayas completado, aparecerán con un indicador verde. Aquellas que estén pendientes por ver, aparecerán con un indicador blanco.
            </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion sx={{backgroundColor: 'rgba(255, 255, 255, 0.7)'}}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{fontSize:'20px',  fontWeight: 'bold' }}>¿Cómo puedo realizar las lecciones?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography sx={{fontWeight:'bold'}}>
                Puedes realizar las lecciones accediendo al curso correspondiente y siguiendo el plan de estudio. Para acceder a cada lección debes presionar click en cada modelo 3D.
                Así se te mostrará el material de estudio y evaluaciones para que puedas aprender y practicar el contenido.
            </Typography>
            </AccordionDetails>
        </Accordion>

      </div>
    </div>
  );
};

export default FAQComponent;
