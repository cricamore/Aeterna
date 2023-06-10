/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef,  useState } from "react";
import { useGLTF } from "@react-three/drei";
import { Container, Box, AppBar, Toolbar, Typography, Avatar, Paper, Modal, position, Button } from "@mui/material";
import Image from 'next/image';
import papel1 from '../../../public/static/textures/Templo/papel1.png';
import papel2 from '../../../public/static/textures/Templo/papel2.png';
import { Html } from '@react-three/drei';

export default function Building({leccionesCompletadas, setLeccionesCompletadas},props) {
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

  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [papel1, papel2];

    const handleClick = () => {
      setModalOpen(true);
      console.log('hola')
    };

    const handleClose = () => {
      setModalOpen(false);
      setCurrentImageIndex(0)

      const todasLasImagenesVistas = currentImageIndex === images.length - 1;
      if (todasLasImagenesVistas) {
        // Marcar la lección como completada
        setLeccionesCompletadas(prevState => ({
          ...prevState,
          leccion4: true,
        }));
        console.log("lec",leccionesCompletadas)
      }
    }

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    
    const handlePreviousImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

  const { nodes, materials } = useGLTF("/static/Imperial_Temple.glb");
  return (
    <group {...props} dispose={null} onClick={(e) => {e.stopPropagation()}}>
      <group position={[0, 8.09, 0]} rotation={[0, -0.07, 0]} onClick={handleClick}>
        <mesh
          //castShadow
          receiveShadow
          geometry={nodes.Plane012.geometry}
          material={materials.Stone_Walls}
        />
        <mesh
          //castShadow
          receiveShadow
          geometry={nodes.Plane012_1.geometry}
          material={materials.Plinths}
        />
        <mesh
          //castShadow
          receiveShadow
          geometry={nodes.Plane012_2.geometry}
          material={materials.Doorway}
        />
        <mesh
          //castShadow
          receiveShadow
          geometry={nodes.Plane012_3.geometry}
          material={materials.Doorway_Surround}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane012_4.geometry}
          material={materials.Columns}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane012_5.geometry}
          material={materials.Scrolls}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane012_6.geometry}
          material={materials.Architrave}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane012_7.geometry}
          material={materials.Roof_Tiles}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane012_8.geometry}
          material={materials.Pediment}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane012_9.geometry}
          material={materials.Base}
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

useGLTF.preload("/static/Imperial_Temple.glb");
