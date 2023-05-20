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
import { toast, ToastContainer } from 'react-toastify';
import * as Yup from 'yup'



export default function Login(){
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
                toast.success('Usuario encontrado')
                
                setTimeout(() => {
                  router.push('/arquitectura');
                }, 2000);
            }
            else { toast.error('Usuario no encontrado'); }
        }
      });



    return(
        <div style={{ display: 'flex' }}>
            <Box sx={{height: '100%', 
            width: 500, 
            backgroundColor:'#13192F',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '50px'
            }}> 
                <Box>
                    <Image src={aeterna} width='150' height='100' alt="icon"/>
                </Box>
                
                <Typography sx={{color:'#D4AF37', fontFamily:'RioRhyme', fontWeight:'bold', mt:10, fontSize:40}}>
                    INICIAR SESIÓN
                </Typography>
                
                <form onSubmit={formik.handleSubmit}>
                    <Box sx={{ alignItems:'center', justifyContent:'center', mt:4, display: 'flex', flexDirection: 'column'}}>
                        <TextField id="outlined-basic" 
                          label="Correo Electrónico" 
                          variant="filled" 
                          sx={{borderRadius: '4px', backgroundColor:'white'}}
                          name="correo"
                          value={formik.values.correo}
                          onChange={formik.handleChange}
                          />
                        <TextField
                          id="outlined-password-input"
                          label="Contraseña"
                          variant="filled" 
                          type="password"
                          sx={{borderRadius: '4px', mt: 4, backgroundColor:'white'}}
                          name="password"
                          value={formik.values.password}
                          onChange={formik.handleChange}
                        />
                        <Button sx={{mt:5, color:"#D4AF37", fontWeight:'bold', fontSize: '1.2rem', padding: '10px 20px'}} type="submit" variant="contained" >Conectar</Button> 
                    </Box>
                </form>   
            </Box>
            <ToastContainer
                style={{
                  color: 'white',
                  fontFamily: 'Roboto, sans-serif',
                  position: 'fixed',
                  top: '20%',
                  left: '50%',
                  maxWidth: '200px',
                  textAlign:'center'
                }} />
        </div>
    );
   
}
