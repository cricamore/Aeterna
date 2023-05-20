'use client'
import { Container, 
    Box, 
    AppBar, Toolbar } from "@mui/material";
import Image from "next/image";
import aeterna from "../images/aeterna.png";

export default function Hola(){
    return(
        <div>
            <AppBar sx={{backgroundColor:'#13192F'}}>
                <Toolbar>
                    <Box width={70} height={50}>
                        <Image src={aeterna} width='150' height='100' alt="icon"/>
                    </Box>
                </Toolbar>
            </AppBar>


            {/* <Box
            sx={{
                width: 500,
                height: 500,
                backgroundColor:'yellow'
            }}
            >
                <h1>Holi</h1>
            </Box> */}
        </div>
       
    );
}