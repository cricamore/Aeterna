/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import React, { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { Container, Box, AppBar, Toolbar, Typography, Avatar, Paper, Modal, position, Button } from "@mui/material";
import Image from 'next/image';
import papel1 from '../../../public/static/textures/papel1.png';
import papel2 from '../../../public/static/textures/papel2.png';
import papel3 from '../../../public/static/textures/papel3.png';
import { Html } from '@react-three/drei';
import { useThree } from "@react-three/fiber";

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

export function Casa({leccionesCompletadas, setLeccionesCompletadas},props) {
    const [modalOpen, setModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [papel1, papel2, papel3];
    const { gl } = useThree();

    // useEffect(() => {
    //   // Precarga de imágenes
    //   Image.prefetch('../../../public/static/textures/papel1.png');
    //   Image.prefetch('../../../public/static/textures/papel2.png');
    //   Image.prefetch('../../../public/static/textures/papel3.png');
    // }, []);

    // Función para realizar la precarga de las imágenes
    const preloadImages = (images) => {
      images.forEach((image) => {
        <Image src={image.src}/>
      });
    };

    // const preloadImages = (images) => {
    //   images.forEach((image) => {
    //     const link = document.createElement('link');
    //     link.rel = 'preload';
    //     link.href = image;
    //     link.as = 'image';
    //     document.head.appendChild(link);
    //   });
    // };

    // Preload de las imágenes
    const imagesToPreload = [papel1, papel2, papel3];
    preloadImages(imagesToPreload);

    const handleMouseEnter = () => {
      gl.domElement.style.cursor = "pointer";
    };
    const handleMouseLeave = () => {
      gl.domElement.style.cursor = "auto";
    };

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
          leccion1: true,
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
    

    const { nodes, materials } = useGLTF("/static/casa.glb");
    return (
        <group {...props} dispose={null} onClick={(e) => {e.stopPropagation()}}>
          <group
              position={[494.76, -0.07, -137.3]}
              rotation={[Math.PI / 2, 0, -Math.PI / 2]}
              scale={0.01}    
              onClick={handleClick}         
              onPointerEnter={handleMouseEnter}
              onPointerLeave={handleMouseLeave} 
          >
            <mesh
            castShadow
            receiveShadow
            geometry={
                nodes.Village_House_04_cm_002_Village_House_04_Wall_001.geometry
            }
            material={materials.Material}
            position={[-11730.08, -55935.88, -6.6]}
            rotation={[0, 0, Math.PI / 2]}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Village_Doors_22_Village_W_D_Wood_04_001.geometry}
            material={materials.Windows_Doors_Wood}
            position={[-11730.08, -55935.88, -6.6]}
            rotation={[0, 0, Math.PI / 2]}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={
                nodes.Village_House_04_cm_002_Village_House_04_Roof_001.geometry
            }
            material={materials.Houses_Strach}
            position={[-11730.08, -55935.88, -6.6]}
            rotation={[0, 0, Math.PI / 2]}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Village_House_04_cm_002_Village_glass.geometry}
            material={materials.House_Glass}
            position={[-11730.08, -55935.88, -6.6]}
            rotation={[0, 0, Math.PI / 2]}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Village_House_04_Wood_001.geometry}
            material={materials.Houses_Woods}
            position={[-1776.15, -66007.52, 0]}
            rotation={[0, 0, Math.PI / 2]}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Village_House_04_cm_002_Village_Metals.geometry}
            material={materials.Windows_Metals_01}
            position={[-11730.08, -55935.88, -6.6]}
            rotation={[0, 0, Math.PI / 2]}
            />        
          </group>
          <Html>
            {modalOpen && (
                <div style={style}>
                  {/* <Modal> */}
                    <Box>
                      <Image src={images[currentImageIndex]} width={657} height={486} priority={true} />
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

useGLTF.preload("/static/casa.glb");
