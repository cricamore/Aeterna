import Login from "../pages/login";
import TerminosCondiciones from '../pages/terminosCondiciones';
import React, { useState } from 'react';
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
import fondo from "../images/fondo.png";
import Image from "next/image";

import Link from 'next/link';
import Add from '@mui/icons-material/Add';
import AccountCircle from '@mui/icons-material/AccountCircle';
import * as Yup from 'yup'

import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { createUser_Front } from "../functions/sqlFunctions"
import { styled } from '@mui/material/styles';
import aeterna from "../images/aeterna.png";
import Experience from "./three/Experience";




const Principal = () => {
  const router = useRouter();
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

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
      <AppBar position="fixed" color="primary" style={{ backgroundColor: '#13192F', width: '175px', height: '100vh', left: 0 }}>
        <Toolbar>
           <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
             <Box sx={{ mt: 3, marginLeft: '-18px'}}>
                <Image src={aeterna} width='150' height='100' alt="icon" />
             </Box>
           </div>
        </Toolbar>
        <Toolbar>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <IconButton color="inherit" onClick={handleToggleRegister}>
                <Add style={{ fontSize: '100px' }} />
                </IconButton>
                <Typography variant="subtitle1">CREAR CUENTA</Typography>
            </div>
        </Toolbar>
        <Toolbar>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <IconButton color="inherit" onClick={handleToggleLogin}>
                <AccountCircle style={{ fontSize: '100px' }} />
                </IconButton>
                <Typography variant="subtitle1">INICIAR SESION</Typography>
            </div>
        </Toolbar>

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
      </AppBar>
     <Experience/>
    </div>
  );
};

export default Principal;









