import { Container, 
    Box, 
    AppBar, Toolbar } from "@mui/material";
import Image from "next/image";
import aeterna from "../images/aeterna.png";

export default function Hola(){
    return(
        <div>
            <AppBar position="fixed" color="primary" style={{ backgroundColor: '#13192F', width: '175px', height: '100vh', left: 0 }}>
                <Toolbar>
                    <Box width={70} height={50}>
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
       
    )}
