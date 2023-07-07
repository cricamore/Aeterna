import React from 'react'
import {IconButton, Box, Typography, Button } from '@mui/material';
import { useRouter } from "next/navigation";
import CloseIcon from '@mui/icons-material/Close';

function Contacto({setIsContactOpen}) {
    const ospitia = 'santiago.ospitia@correounivalle.edu.co';
    const trujillo = 'trujillo.santiago@correounivalle.edu.co';
    const luisa = 'cardenas.luisa@correounivalle.edu.co';
    const cristian = 'cristian.camilo.montano@correounivalle.edu.co';
    const router = useRouter();

    const handleCloseContact = () => {
      setIsContactOpen(false);
    };
    
  return (
    <Box style={{backgroundColor: 'rgba(255, 255, 255, 0.65)', height:'100%',padding:2}}>
        <IconButton sx={{position:'fixed',bgcolor:'white',color: 'black',left:'90%',marginTop:5}} onClick={handleCloseContact}>
          <CloseIcon/>
        </IconButton>
        <Typography variant="h3" sx={{marginTop:4, textAlign: 'center', marginBottom: 4, color: '#E6B824',fontWeight:'bold', textShadow:'0px 3px 4px rgba(0, 0, 1.5, 1.5)' }}>
          Dirección de Contacto
        </Typography>
        <Box borderRadius="14px" display="flex" justifyContent="center" alignItems="center" sx={{backgroundColor:'rgba(19, 25, 47,0.95)', width:'60%', height: '60%', margin: 'auto', padding: 4, marginTop:4}}>
            <div>
                <Typography sx={{ color:'white', font:'Roboto, sans-serif', fontWeight:'bold', fontSize:15, textAlign: 'justify', marginTop: '8px' }}>
                    Si tienes alguna duda, inquietud o sugerencia, estamos aquí para ayudarte y escucharte. Valoramos tus comentarios y estamos comprometidos a brindarte la mejor atención posible. Puedes comunicarte con nosotros a través de las siguientes direcciones de correo electrónico:
                </Typography>
                <Typography sx={{ color:'white', font:'Roboto, sans-serif', fontWeight:'bold', fontSize:15, textAlign: 'justify', marginTop: '16px' }}>
                    Para consultas generales, envía un mensaje a nuestro equipo de soporte en <a style={{ color: '#D4AF37', textDecoration: 'inherit', cursor: 'pointer'}} href={`https://mail.google.com/mail/?view=cm&fs=1&to=${ospitia}`} target="_blank" rel="noopener noreferrer">santiago.ospitia@correounivalle.edu.co</a>.
                </Typography>
                <Typography sx={{ color:'white', font:'Roboto, sans-serif', fontWeight:'bold', fontSize:15, textAlign: 'justify', marginTop: '16px' }}>
                    Si tienes alguna pregunta específica sobre nuestros servicios o productos, no dudes en contactar a <a style={{ color: '#D4AF37', textDecoration: 'inherit', cursor: 'pointer'}} href={`https://mail.google.com/mail/?view=cm&fs=1&to=${luisa}`} target="_blank" rel="noopener noreferrer">cardenas.luisa@correounivalle.edu.co</a>.
                </Typography>
                <Typography sx={{ color:'white', font:'Roboto, sans-serif', fontWeight:'bold', fontSize:15, textAlign: 'justify', marginTop: '16px' }}>
                    ¿Necesitas ayuda técnica o tienes problemas con nuestro sitio web? El equipo de soporte técnico está disponible en <a style={{ color: '#D4AF37', textDecoration: 'inherit', cursor: 'pointer'}} href={`https://mail.google.com/mail/?view=cm&fs=1&to=${trujillo}`} target="_blank" rel="noopener noreferrer">trujillo.santiago@correounivalle.edu.co</a>.
                </Typography>
                <Typography sx={{ color:'white', font:'Roboto, sans-serif', fontWeight:'bold', fontSize:15, textAlign: 'justify', marginTop: '16px' }}>
                    Por último, si deseas compartir tus ideas, sugerencias o comentarios para mejorar nuestros servicios, te invitamos a ponerte en contacto con nosotros a través de <a style={{ color: '#D4AF37', textDecoration: 'inherit', cursor: 'pointer'}} href={`https://mail.google.com/mail/?view=cm&fs=1&to=${cristian}`} target="_blank" rel="noopener noreferrer">cristian.camilo.montano@correounivalle.edu.co</a>.
                </Typography>
            </div>
        </Box>
    </Box>
  )
}

export default Contacto;
