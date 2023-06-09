/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useState, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Html } from '@react-three/drei';
import { Box, Button } from "@mui/material";
import Image from 'next/image';
import papel1 from '../../../public/static/textures/Sociedad/papel1.png';
import papel2 from '../../../public/static/textures/Sociedad/papel2.png';
import papel3 from '../../../public/static/textures/Sociedad/papel3.png';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  height:500,
  bgcolor: 'background.paper',
  p: 4,
  overflow: 'auto',
};

const buttonAvanzar = {
    position: 'absolute',
    top: '89%',
    left: '70%',
    transform: 'translate(-50%, -50%)',
};

const buttonRetroceder = {
  position: 'absolute',
  top: '89%',
  left: '55%',
  transform: 'translate(-50%, -50%)',
};

const buttonCerrar = {
  position: 'absolute',
  top: '10%',
  left: '10%',
  transform: 'translate(-50%, -50%)',
};

export function Mesita(props) {
  const { nodes, materials } = useGLTF("/static/mesita.glb");
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [papel1, papel2, papel3];

  const handleClick = () => {
    setModalOpen(true);
    console.log('hola')
  };

  const handleClose = () => {
    setModalOpen(false);
    setCurrentImageIndex(0)

    // const todasLasImagenesVistas = currentImageIndex === images.length - 1;
    // if (todasLasImagenesVistas) {
    //   // Marcar la lección como completada
    //   setLeccionesCompletadas(prevState => ({
    //     ...prevState,
    //     leccion3: true,
    //   }));
    //   console.log("lec",leccionesCompletadas)
    // }
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePreviousImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  return (
    <group {...props} dispose={null} onClick={handleClick}>
      <group scale={0.0024}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_id30.geometry}
          material={materials["51"]}
          position={[-45.95, -188.15, 252.99]}
          scale={5.58}
        />
      </group>
      <Html>
          {modalOpen && (
              <div style={style}>
                {/* <Modal> */}
                  <Box>
                    <Image src={images[currentImageIndex]} width={657} height={486} />
                    <Button
                    size='large'
                    variant="text" 
                    onClick={handleClose} 
                    style={{ ...buttonCerrar, color:'#804000'}}
                    >
                        X
                    </Button>
                    <Button 
                    size='large'
                    variant="text" 
                    onClick={handleNextImage} 
                    style={{ ...buttonAvanzar, display: currentImageIndex === images.length - 1 ? 'none' : 'block', color:'#804000' }}
                    >
                        Siguiente
                    </Button>
                    <Button 
                    size='large'
                    variant="text" 
                    onClick={handlePreviousImage} 
                    style={{ ...buttonRetroceder, display: currentImageIndex === 0 ? 'none' : 'block', color:'#804000' }}
                    >
                        Atrás
                    </Button>
                  </Box>
                {/* </Modal> */}
              </div>
          )}
        </Html>
    </group>
  );
}

useGLTF.preload("/static/mesita.glb");
