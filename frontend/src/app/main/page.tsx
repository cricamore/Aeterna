'use client'

import Login from "../login/page";
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
} from '@mui/material';
import { AccountCircle, Menu, Add } from '@mui/icons-material';

const RegisterForm = () => {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleToggleRegister = () => {
    setIsRegisterOpen(!isRegisterOpen);
  };

  const handleToggleLogin = () => {
    setIsLoginOpen(!isLoginOpen);
  };


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
  

  return (
    <div>
      <AppBar position="fixed" color="primary" style={{ backgroundColor: '#13192F', width: '175px', height: '100vh', left: 0 }}>
        <Toolbar>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <IconButton edge="start" color="inherit" onClick={handleToggleRegister}>
                <Add style={{ fontSize: '100px' }} />
                </IconButton>
                <Typography variant="subtitle1">CREAR CUENTA</Typography>
            </div>
        </Toolbar>
        <Toolbar>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <IconButton edge="start" color="inherit" onClick={handleToggleLogin}>
                <AccountCircle style={{ fontSize: '100px' }} />
                </IconButton>
                <Typography variant="subtitle1">INICIAR SESION</Typography>
            </div>
        </Toolbar>

        <Drawer anchor="left" open={isRegisterOpen || isLoginOpen} onClose={handleToggleRegister}>
          <div style={{ backgroundColor: '#13192F', width: '500px', padding: '20px', height: '100%'}}>
            {isRegisterOpen && (
                <>
                    <Typography variant="h4" style={{fontWeight:'bold', marginTop: '50px', textShadow:'0px 3px 4px rgba(0, 0, 1.5, 1.5)', marginBottom: '10px', color: '#D4AF37', textAlign: 'center' }}>
                    CREAR CUENTA
                    </Typography>
                    <Typography variant="subtitle2" style={{ color: 'white', marginBottom: '40px' }}>
                    ¿Ya tienes cuenta? Iniciar sesión
                    </Typography>
                    <form>
                    <Grid container spacing={2} style={{ marginBottom: '40px' }}>
                        <Grid item xs={6}>
                        <TextField label="Nombre" fullWidth inputProps={{ style: { height: '100%', padding: '9px' } }} required variant="outlined" style={{ borderRadius: '20px', backgroundColor: '#ffffff', height: '40px'}} />
                        </Grid>
                        <Grid item xs={6}>
                        <TextField label="Apellido" inputProps={{ style: { height: '100%', padding: '9px' } }} fullWidth required variant="outlined" style={{ borderRadius: '20px', backgroundColor: '#ffffff', height: '40px' }} />
                        </Grid>
                    </Grid>
                    <TextField label="Correo Electrónico" inputProps={{ style: { height: '100%', padding: '9px' } }} fullWidth required type="email" variant="outlined" style={{ borderRadius: '20px', backgroundColor: '#ffffff', marginBottom: '40px', height: '40px'  }} />
                    <TextField label="Contraseña" fullWidth inputProps={{ style: { height: '100%', padding: '9px' } }} required type="password" variant="outlined" style={{ borderRadius: '20px', backgroundColor: '#ffffff', marginBottom: '30px', height: '40px' }} />
                    <FormControl fullWidth style={{ marginBottom: '30px' }}>
                        <FormLabel sx={{color:'white'}}>Fecha de Nacimiento</FormLabel>
                        <Grid container spacing={1}>
                        <Grid item xs={4}>
                            <Select value="" required variant="outlined" inputProps={{ style: { height: '100%', padding: '9px' } }} style={{ borderRadius: '20px', backgroundColor: '#ffffff', width: '150px',height: '40px' }}>
                                {days.map((day) => (
                                    <MenuItem key={day} value={day}>
                                        {day}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        <Grid item xs={4}>
                            <Select value="" required variant="outlined" inputProps={{ style: { height: '100%', padding: '9px' } }} style={{ borderRadius: '20px', backgroundColor: '#ffffff', width: '150px',height: '40px' }}>
                                {months.map((month, index) => (
                                    <MenuItem key={index} value={index + 1}>
                                        {month}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        <Grid item xs={4}>
                            <Select value="" required variant="outlined" inputProps={{ style: { height: '100%', padding: '9px' } }} style={{ borderRadius: '20px', backgroundColor: '#ffffff', width: '150px',height: '40px' }}>
                                {years.map((year) => (
                                    <MenuItem key={year} value={year}>
                                        {year}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        </Grid>
                    </FormControl>
                    <Button type="submit" variant="contained" color="primary" fullWidth style={{ fontWeight:'bold', padding: '10px 20px',color: '#D4AF37', backgroundColor:'#B3B3B3', borderRadius: '20px', marginBottom: '20px' }}>
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
    </div>
  );
};

export default RegisterForm;







