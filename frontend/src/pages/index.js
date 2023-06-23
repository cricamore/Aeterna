import Login from "../pages/login";
import FAQComponent from '../pages/frecuentes';
import TerminosCondiciones from '../pages/terminosCondiciones';

import React, { useState,useEffect } from 'react';
import {
  AppBar,
  Button,
  Drawer,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  MenuItem,
  Select,
  TextField,
  Toolbar,
  Typography,
  Box
} from '@mui/material';
import { styled  } from '@mui/material/styles';
import { keyframes } from '@emotion/react';

import fondo from "../images/ar2.jpg";
import aeterna from "../images/aeterna.png";
import Image from "next/image";
import Link from 'next/link';

import Add from '@mui/icons-material/Add';
import AccountCircle from '@mui/icons-material/AccountCircle';
import HelpIcon from '@mui/icons-material/Help';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

import * as Yup from 'yup'
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { createUser_Front } from "../functions/sqlFunctions"

import Experience from "../three/Experience";

const EpicBox = styled(Box)(({ theme }) => ({
  opacity: 0,
  transform: 'translateY(20px)',
  transition: 'opacity 0.5s ease, transform 0.5s ease',
  '&.appear': {
    opacity: 1,
    transform: 'translateY(0)',
  },
  backgroundColor: 'rgba(19, 25, 47, 0.9)',
  padding: '20px',
  borderRadius: '10px',
  marginTop: '20px',
  maxWidth: '800px',
  margin:'auto'
}));

const EpicText = styled(Typography)(({ theme }) => ({
  opacity: 0,
  transform: 'translateY(40px)',
  transition: 'opacity 0.5s ease, transform 0.5s ease',
  '&.appear': {
    opacity: 1,
    transform: 'translateY(0)',
  },
  color: '#D4AF37',
  fontSize: '120px',
  fontWeight: 'bold',
  textAlign: 'center',
  marginTop: '5%',
  fontFamily: 'Garamond, serif',
  textShadow:'0px 3px 4px rgba(0, 0, 1.5, 1.5)'
}));

const EpicText2 = styled(Typography)(({ theme }) => ({
  opacity: 0,
  transform: 'translateY(40px)',
  transition: 'opacity 0.5s ease, transform 0.5s ease',
  '&.appear': {
    opacity: 1,
    transform: 'translateY(0)',
  },
  color: '#FFFFFF',
  fontSize: '1rem',
  fontWeight: 'normal',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  textAlign: 'justify',
  margin: '10px',
}));

const Principal = () => {
  const [showWelcome, setShowWelcome] = useState(false);
  const [showText, setShowText] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowText(true);
  //   }, 1500); 

  //   return () => clearTimeout(timer);
  // }, []);


  const router = useRouter();
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isFAQOpen, setIsFAQOpen] = useState(false);

  const [selectedDay, setSelectedDay] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  const [valid, setValido] = useState('')

  const actualizarDato = (nuevoDato) => {
        setValido(nuevoDato);
  };

  const handleToggleRegister = () => {
    setIsRegisterOpen(!isRegisterOpen);
    setIsLoginOpen(false); 
  };

  const handleToggleLogin = () => {
    setIsLoginOpen(!isLoginOpen);
    setIsRegisterOpen(false);
  };

  const handleCloseRegister = () => {
    setIsRegisterOpen(false);
  };

  const handleCloseLogin = () => {
    setIsLoginOpen(false);
  };

  const handleToggleFAQ = () => {
    console.log("hola, entré a faq")
    setIsFAQOpen(!isFAQOpen);
  };

  const formik = useFormik({
        initialValues: {
            nombre: '',
            apellido: '',
            email: '',
            contraseña: '',
        },

        validationSchema: Yup.object({
            nombre: Yup.string().required("*Complete este campo"),
            apellido: Yup.string().required("*Complete este campo"),
            email: Yup.string().email('*Campo invalido').required("*Complete este campo"),
            contraseña: Yup.string().required("*Complete este campo"),
        }),

        onSubmit: async (values) => {
              let res = await  createUser_Front(values.nombre, values.apellido,values.email, values.contraseña)
              console.log("XD"+res)
              if (res == 'Usuario registrado exitosamente') {
                     setIsLoginOpen(true);
                     setIsRegisterOpen(false);
              }
              else{alert("hola")}
        }
  });

    // Opciones de días
    const days = Array.from({ length: 31 }, (_, index) => index + 1);

    // Opciones de meses
    const months = [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
    ];
  
    // Opciones de años
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 100 }, (_, index) => currentYear - index);
    const isDrawerOpen = isRegisterOpen || isLoginOpen;

  return (
    <div>
      {/* Navbar */}
      <AppBar position="fixed" color="primary" style={{ backgroundColor: '#13192F', width: '175px', height: '100vh', left: 0 }}>
        <Toolbar>
           <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
             <Box sx={{ mt: 3, marginLeft: '-18px'}}>
                <Image src={aeterna} width='150' height='100' alt="icon" />
             </Box>
           </div>
        </Toolbar>
        {/* Crear cuenta */}
        <Toolbar>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <IconButton color="inherit" onClick={handleToggleRegister}>
                <Add style={{ fontSize: '100px' }} />
                </IconButton>
                <Typography variant="subtitle1">CREAR CUENTA</Typography>
            </div>
        </Toolbar>
        {/* Inicio sesion */}
        <Toolbar>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <IconButton color="inherit" onClick={handleToggleLogin}>
                  <AccountCircle style={{ fontSize: '100px' }} />
                </IconButton>
                <Typography variant="subtitle1">INICIAR SESION</Typography>
            </div>
        </Toolbar>
        {/* FAQ */}
        <Toolbar>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <IconButton color="inherit" onClick={handleToggleFAQ}>
                <HelpIcon style={{fontSize: '100px'}}/>
              </IconButton>
              <Typography variant="subtitle1">FAQ</Typography>
            </div>
        </Toolbar>
        {/* REDES SOCIALES */}
        <Toolbar sx={{ position: 'fixed',bottom: '0',left: 0,width: '175px',justifyContent: 'center',alignItems: 'center',flexDirection: 'column', color: 'white', }}>
          <Typography variant="body" sx={{fontSize:'11px', marginBottom: '5px' }}>
            Nuestras redes sociales
          </Typography>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <IconButton color="inherit" component="a" href="https://www.facebook.com/santiagotrujillo.fs" target="_blank">
              <FacebookIcon style={{ fontSize: '30px' }} />
            </IconButton>
            <IconButton color="inherit" component="a" href="https://www.twitter.com" target="_blank">
              <TwitterIcon style={{ fontSize: '30px' }} />
            </IconButton>
            <IconButton color="inherit" component="a" href="https://www.instagram.com/santiagotrujillo.fs/" target="_blank">
              <InstagramIcon style={{ fontSize: '30px' }} />
            </IconButton>
          </div>
        </Toolbar>

        {/*Barra desplazadora*/}
        <Drawer anchor="left" open={isDrawerOpen} onClose={isRegisterOpen ? handleCloseRegister : handleCloseLogin}>
          <div style={{ backgroundColor: '#13192F', width: '500px', padding: '20px', height: '100%'}}>
            {isRegisterOpen && (
                <>
                    <Typography variant="h4" style={{fontWeight:'bold', marginTop: '50px', textShadow:'0px 3px 4px rgba(0, 0, 1.5, 1.5)', marginBottom: '10px', color: '#D4AF37', textAlign: 'center' }}>
                    CREAR CUENTA
                    </Typography>
                    <Typography variant="subtitle2" style={{ color: 'white', marginBottom: '40px' }}>
                      ¿Ya tienes cuenta?{' '}
                      <span style={{ color: '#D4AF37', cursor: 'pointer' }} onClick={handleToggleLogin}>
                        Inicia sesión
                      </span>
                    </Typography>
                    <form onSubmit={formik.handleSubmit}>
                    <Grid container spacing={2} style={{ marginBottom: '40px' }}>
                        <Grid item xs={6}>
                        <TextField label="Nombre" fullWidth inputProps={{ style: { height: '100%', padding: '9px' } }} required variant="outlined" style={{ borderRadius: '20px', backgroundColor: '#ffffff', height: '40px'}} name='nombre' value={formik.values.nombre} onChange={formik.handleChange}/>
                        </Grid>
                        <Grid item xs={6}>
                        <TextField label="Apellido" inputProps={{ style: { height: '100%', padding: '9px' } }} fullWidth required variant="outlined" style={{ borderRadius: '20px', backgroundColor: '#ffffff', height: '40px' }} name='apellido' value={formik.values.apellido} onChange={formik.handleChange}/>
                        </Grid>
                    </Grid>
                    <TextField label="Correo Electrónico" inputProps={{ style: { height: '100%', padding: '9px' } }} fullWidth required type="email" variant="outlined" style={{ borderRadius: '20px', backgroundColor: '#ffffff', marginBottom: '40px', height: '40px'  }} name='email' value={formik.values.email} onChange={formik.handleChange}/>
                    <TextField label="Contraseña" fullWidth inputProps={{ style: { height: '100%', padding: '9px' } }} required type="password" variant="outlined" style={{ borderRadius: '20px', backgroundColor: '#ffffff', marginBottom: '30px', height: '40px' }} name='contraseña' value={formik.values.contraseña} onChange={formik.handleChange}/>
                    <FormControl fullWidth style={{ marginBottom: '30px' }}>
                        <FormLabel sx={{color:'white'}}>Fecha de Nacimiento</FormLabel>
                        <Grid container spacing={1}>
                        <Grid item xs={4}>
                            <Select
                              value={selectedDay}
                              variant="outlined"
                              inputProps={{ style: { height: '100%', padding: '9px' } }}
                              style={{ borderRadius: '20px', backgroundColor: '#ffffff', width: '150px', height: '40px' }}
                              onChange={(e) => setSelectedDay(e.target.value)}
                            >
                              {days.map((day) => (
                                <MenuItem key={day} value={day}>
                                  {day}
                                </MenuItem>
                              ))}
                            </Select>
                        </Grid>
                        <Grid item xs={4}>
                            <Select
                              value={selectedMonth}
                              variant="outlined"
                              inputProps={{ style: { height: '100%', padding: '9px' } }}
                              style={{ borderRadius: '20px', backgroundColor: '#ffffff', width: '150px', height: '40px' }}
                              onChange={(e) => setSelectedMonth(e.target.value)}
                            >
                              {months.map((month, index) => (
                                <MenuItem key={index} value={index + 1}>
                                  {month}
                                </MenuItem>
                              ))}
                            </Select>
                        </Grid>
                        <Grid item xs={4}>
                            <Select
                              value={selectedYear}
                              variant="outlined"
                              inputProps={{ style: { height: '100%', padding: '9px' } }}
                              style={{ borderRadius: '20px', backgroundColor: '#ffffff', width: '150px', height: '40px' }}
                              onChange={(e) => setSelectedYear(e.target.value)}
                            >
                              {years.map((year) => (
                                <MenuItem key={year} value={year}>
                                  {year}
                                </MenuItem>
                              ))}
                            </Select>
                        </Grid>
                        </Grid>
                    </FormControl>
                    <Button type="submit" variant="contained" color="primary" fullWidth style={{ fontWeight:'bold', padding: '10px 20px',color: '#D4AF37', borderRadius: '20px', marginBottom: '20px' }}>
                        CREAR CUENTA
                    </Button>
                    <FormControlLabel control={<input type="checkbox" required />} sx={{color: 'white', marginLeft: '20px'}}label=" Acepto los términos y condiciones" />
                    </form>
                </>
            )}
            {isLoginOpen && (
                <Login />
            )}
          </div>
        </Drawer>
        {isFAQOpen && (
              <div style={{ position: 'fixed', top: 0, left: '175px', right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 999 }} >
                <FAQComponent setIsFAQOpen={setIsFAQOpen}/>              
              </div>
        )}
      </AppBar>
     {/* <Experience/> */}
     <Box sx={{ position: "absolute", top: 0, left: '100px', width: "100%", height: "100%" }}>
      <Image src={fondo} layout="fill" objectFit="cover" display="block" alt="Roma imagen"/>
     </Box>
     {/* <div style={{position:'fixed',top:0,right:0,bottom:0,left:'175px', display: 'flex', flexDirection: 'column' }}>
        <EpicText variant="h3" className={showText ? 'appear' : ''}>
          ANTIGUA ROMA
        </EpicText>
        <EpicBox className={showText ? 'appear' : ''}>
          <EpicText2 variant="subtitle1" className={showText ? 'appear' : ''}>
              Descubre la grandeza y el esplendor de la Antigua Roma, una civilización que perduró
              por siglos y dejó un legado imborrable en la historia de la humanidad. Sumérgete en sus
              calles empedradas y maravíllate con la majestuosidad de sus monumentos, como el Coliseo
              y el Panteón. Deslúmbrate con la arquitectura de sus magníficos templos y palacios.
              Explora la riqueza de su cultura, desde las impactantes esculturas hasta los mosaicos que adornan sus villas.
              Desde las batallas de los gladiadores en el anfiteatro hasta las intrigas políticas en el Senado.
              La Antigua Roma te espera con sus historias fascinantes y su aura de grandeza.
              ¡Prepárate para embarcarte en un viaje épico a través del tiempo y descubrir la Antigua Roma
              en todo su esplendor!
            </EpicText2>
        </EpicBox>
     </div> */}
    </div>
  );
};

export default Principal;