/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { Html } from '@react-three/drei';
import { Container, Box, AppBar, Toolbar, Typography, Avatar, Paper, Modal, position, Button } from "@mui/material";
import papel1 from '../../../public/static/textures/Torre/papel1.png';
import papel2 from '../../../public/static/textures/Torre/papel2.png';
import Image from 'next/image';
// import { LeccionContext } from './leccionContext';

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

export function Castillo({leccionesCompletadas, setLeccionesCompletadas},props) {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [papel1, papel2];

  const handleClick = () => {
    setModalOpen(true);
    console.log('hola',leccionesCompletadas)
  };

  const handleClose = () => {
    setModalOpen(false);
    setCurrentImageIndex(0)

    const todasLasImagenesVistas = currentImageIndex === images.length - 1;
    if (todasLasImagenesVistas) {
      // Marcar la lección como completada
      setLeccionesCompletadas(prevState => ({
        ...prevState,
        leccion2: true,
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
  
  const handleCamara = () => {
    // Navega a la ruta específica cuando se hace clic en el componente
    history.push('/castillo');
  };
  
  const { nodes, materials } = useGLTF("/static/castillo.glb");
  return (
    <group {...props} dispose={null} onClick={handleClick}>
      <group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube010.geometry}
          material={materials["wood planks"]}
          position={[0, 1, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009.geometry}
          material={materials["wood planks"]}
          position={[0, 1, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008.geometry}
          material={materials["wood planks"]}
          position={[0, 1, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube007.geometry}
          material={materials["wood planks"]}
          position={[0, 1, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006.geometry}
          material={materials["wood planks"]}
          position={[0, 1, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005.geometry}
          material={materials["wood planks"]}
          position={[0, 1, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004.geometry}
          material={materials["Material.001"]}
          position={[0, 1, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003.geometry}
          material={materials["wood planks"]}
          position={[0, 1, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={materials["Material.001"]}
          position={[0, 1, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials["Material.001"]}
          position={[0, 1, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube011_1.geometry}
          material={materials["wood planks"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube011_2.geometry}
          material={materials["wall brick.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube011_3.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube012.geometry}
          material={materials["wood planks"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube011.geometry}
          material={materials["wood planks"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004.geometry}
          material={materials["wood planks"]}
          position={[-2.86, 3.7, -1.94]}
          scale={[0.12, 1, 0.12]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Grass_Basic_A_spring-summer"].geometry}
          material={materials.Grass_bqm}
          position={[0, -10, 0]}
          rotation={[0, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Misc_Dead-leaves_A_spring-summer"].geometry}
          material={materials.Misc_bqm}
          position={[0, -10, 0]}
          rotation={[0, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Grass_Basic_D_spring-summer"].geometry}
          material={materials["Grass_bqm.001"]}
          position={[0, -10, 0]}
          rotation={[0, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Grass_Basic-dry_A_spring-summer"].geometry}
          material={materials["Grass_bqm.002"]}
          position={[0, -10, 0]}
          rotation={[0, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Grass_Basic-dry_D_spring-summer"].geometry}
          material={materials["Grass_bqm.003"]}
          position={[0, -10, 0]}
          rotation={[0, 0, -Math.PI / 2]}
        />
        {/* <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane.geometry}
          material={materials.groung}
        /> */}
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

useGLTF.preload("/static/castillo.glb");
