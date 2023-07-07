/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: samuelbrunner (https://sketchfab.com/samuelbrunner)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/roman-bridge-8511381f0b844306ab53e4fbc5660095
Title: Roman Bridge
*/

import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import papel1 from '../../../public/static/textures/Arte/Puente/papel1.png';
import papel2 from '../../../public/static/textures/Arte/Puente/papel2.png';
import { Html } from '@react-three/drei';
import { Container, Box, AppBar, Toolbar, Typography, Avatar, Paper, Modal, position, Button } from "@mui/material";
import Image from 'next/image';
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

export function Bridge({leccionesCompletadas, setLeccionesCompletadas},props) {
  const { nodes, materials } = useGLTF("/static/roman_bridge.glb");
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [papel1, papel2];

  const { gl } = useThree();
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
        leccion4: true,
      }));
      console.log("lec",leccionesCompletadas)
    }
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <group {...props} 
    dispose={null} 
    onClick={(e) => {e.stopPropagation()}} 
    onPointerEnter={handleMouseEnter}
    onPointerLeave={handleMouseLeave}
    >
      <group
        // position={[-45.367, 24.704, 102.133]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.018}
      >
        <group rotation={[-Math.PI, 0, 0]}>
          <group scale={7.834}>
            <mesh
              castShadow
              receiveShadow
              onClick={handleClick}
              geometry={nodes.arches_stones_0.geometry}
              material={materials.stones}
            />
            <mesh
              castShadow
              receiveShadow
              onClick={handleClick}
              geometry={nodes.arches_detail_0.geometry}
              material={materials.detail}
            />
            <mesh
              castShadow
              receiveShadow
              onClick={handleClick}
              geometry={nodes.arches_pavment_0.geometry}
              material={materials.pavment}
            />
          </group>
          <group position={[-165.072, -0.037, 0]} scale={7.834}>
            <mesh
              castShadow
              receiveShadow
              onClick={handleClick}
              geometry={nodes.gate_stones_0.geometry}
              material={materials.stones}
            />
            <mesh
              castShadow
              receiveShadow
              onClick={handleClick}
              geometry={nodes.gate_detail_0.geometry}
              material={materials.detail}
            />
          </group>
        </group>
      </group>
      <Html>
          {modalOpen && (
              <div style={style}>
                {/* <Modal> */}
                  <Box>
                    <Image src={images[currentImageIndex]} width={657} height={486} priority={true} rel="preload" />
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

useGLTF.preload("/static/roman_bridge.glb");
