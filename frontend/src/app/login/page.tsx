'use client'
import { Container, Box, Typography, Button, ButtonProps } from "@mui/material";
import aeterna from "../images/aeterna.png";
import fondo from "../images/fondo.png";
import Image from "next/image";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import { login_usuario } from "../functions/sqlFunctions"
import * as Yup from 'yup'
import mockRouter from 'next-router-mock';
// import { render, screen, fireEvent } from '@testing-library/react';



export default function Login(){
    // jest.mock('next/router', () => require('next-router-mock'));
    const router = useRouter();
    const [anchorEl, setAnchorEl] = useState(null);
    const [tipo, setTipo] = useState("");

    const formik = useFormik({
        initialValues: {
          correo: '',
          password: ''
        },
    
        validationSchema: Yup.object({
        }),
    
        onSubmit: async (values) => {
            const res = await login_usuario(values.correo, values.password)
            if (res == 'Usuario encontrado') {
                router.push('/register')
            }
        }
      });

    const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
        color: theme.palette.getContrastText('#6F6F6F'),
        backgroundColor: '#6F6F6F',
        '&:hover': {
          backgroundColor: '#6F6F6F',
        },
    }));

    return(
        <div style={{ display: 'flex' }}>
            <Box sx={{height: '100vh', 
            width: 500, 
            backgroundColor:'#13192F',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
            }}> 
                <Box>
                    <Image src={aeterna} width='150' height='100' alt="icon" />
                </Box>
                
                <Typography sx={{color:'#D4AF37', fontFamily:'RioRhyme', fontWeight:'bold', mt:10, fontSize:40}}>
                    INICIAR SESIÓN
                </Typography>
                
                <form onSubmit={formik.handleSubmit}>
                    <Box sx={{ alignItems:'center', justifyContent:'center', mt:4, display: 'flex', flexDirection: 'column'}}>
                        <TextField id="outlined-basic" 
                          label="Correo Electrónico" 
                          variant="outlined" 
                          sx={{borderRadius: '20px', color:"#D4AF37", backgroundColor:'white'}}
                          name="correo"
                          value={formik.values.correo}
                          onChange={formik.handleChange}
                          />
                        <TextField
                          id="outlined-password-input"
                          label="Contraseña"
                          type="password"
                          sx={{borderRadius: '20px', mt: 4, color:"#D4AF37", backgroundColor:'white'}}
                          name="password"
                          value={formik.values.password}
                          onChange={formik.handleChange}
                        />
                        <ColorButton sx={{mt:5, color:"#D4AF37", fontWeight:'bold', fontSize: '1.2rem', padding: '10px 20px'}} type="submit" variant="contained" >Conectar</ColorButton> 
                    </Box>
                </form>   
            </Box>
            <Box id='panelDer'> 
                <Image src={fondo} style={{ width: '80%', height: '100%' }} alt="icon"/>
            </Box>
            
        </div>
    );
   
}