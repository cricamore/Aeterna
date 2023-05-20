import { Container, 
    Box, 
    AppBar, Toolbar } from "@mui/material";
import Image from "next/image";
import aeterna from "../images/aeterna.png";
import Experience from "./Models/Experience";

export default function Hola(){
    return(
        <div>
            <AppBar position="fixed" color="primary" style={{ backgroundColor: '#13192F', width: '175px', height: '100vh', left: 0 }}>
                <Toolbar>
                    {/* <Box width={70} height={50}> */}
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Box sx={{mt: 2}}>
                            <Image src={aeterna} width='150' height='100' alt="icon"/>
                        </Box>
                        </div>
                    {/* </Box> */}
                </Toolbar>
            </AppBar>
            <Experience/>
        </div>
       
    )}
