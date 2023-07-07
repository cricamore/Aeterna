import { OrbitControls, Sky } from '@react-three/drei';
import { Perf } from 'r3f-perf';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useContext, useEffect, useRef, useState,createContext  } from 'react';
import Plano from './plano';
import { Castillo } from './castillo';
import { Coliseo } from './coliseo';
import { Casa } from './casa';
import Building from './building';
import { gsap } from 'gsap';
import * as THREE from 'three';
import { Vector3 } from 'three';
import { TableroLeccion1 } from './tableroLeccion1';
import { TableroLeccion2 } from './tableroLeccion2';
import { TableroLeccion3 } from './tableroLeccion3';
import { TableroLeccion4 } from './tableroLeccion4';
import { Arbol } from '../ModuloCultura/arbol';
import LoadingScreen from '../../pages/loadingScreen';

export default function Experience({ activeLessonIndex, leccionesCompletadas, setLeccionesCompletadas }) {

  const containerStyles = {
    position: 'fixed',
    width: '100%',
    height: '100vh',
  };

  return (
  <Canvas style={containerStyles} shadows={true}>
    {/* <Perf position="top-right" /> */}
    <directionalLight castShadow position={[-30, 30, -30]} intensity={1} />
    <ambientLight intensity={0.3} />
    <Sky/>
    <spotLight position={[30, 20, 30]} intensity={0.2} />
    <CameraUpdater activeLessonIndex={activeLessonIndex} />
    <Plano />
    <mesh position={[-2, 0.7, 2]} scale={0.25}>
      <Casa leccionesCompletadas={leccionesCompletadas} setLeccionesCompletadas={setLeccionesCompletadas}/>
    </mesh>
    <mesh position={[3, 0.367, 0]} scale={0.1} rotation-y={-Math.PI*1.5}>
      <Building leccionesCompletadas={leccionesCompletadas} setLeccionesCompletadas={setLeccionesCompletadas}/>
    </mesh>
    <mesh 
    scale={0.25} 
    position={[3, 0.74, 3]}
    rotation-y={-Math.PI*1.5}
    >
      <Castillo leccionesCompletadas={leccionesCompletadas} setLeccionesCompletadas={setLeccionesCompletadas} />
    </mesh>
    <mesh scale={0.03} position={[-1, 0.6, -2.8]} rotation-y={-Math.PI * 1.5}>
      <Coliseo leccionesCompletadas={leccionesCompletadas} setLeccionesCompletadas={setLeccionesCompletadas}/>
    </mesh>
    <mesh
      scale={0.0006}
      position={[-4, 0.8, 3]}
      rotation-y={-Math.PI*1.1}
    >
      <TableroLeccion1/>
    </mesh>
    <mesh
      scale={0.0006}
      position={[4, 0.9, 3.8]}
      rotation-y={-Math.PI * 2.3}
    >
      <TableroLeccion2/>
    </mesh>
    <mesh
    scale={0.0006}
    position={[-3.8, 0.8, -3.8]}
    rotation-y={-Math.PI * 1.25}
    >
      <TableroLeccion3/>
    </mesh>
    <mesh
    scale={0.0006}
    position={[4.2, 0.8, 1]}
    rotation-y={-Math.PI * 1.8}
    >
      <TableroLeccion4/>
    </mesh>

    <mesh>
      <Arbol position={[1,2.6, -1]}/>
      <Arbol position={[-3,2.4, -1]}/>
      <Arbol position={[-0.2,2.6, -3]}/>
      <Arbol position={[-4,2.4, -5]}/>
      <Arbol position={[1,2.8, -5]}/>
      <Arbol position={[3,2.4, -8]}/>
    </mesh>
    <OrbitControls MakeDefault/>
  </Canvas>)
}

function CameraUpdater({ activeLessonIndex }) {
  const { camera } = useThree();
  const cameraRef = useRef();
  const cameraPositionRef = useRef([0, 3.5, 7.5]);

  useEffect(() => {
    const targetPosition = getTargetPosition(activeLessonIndex);
    // const targetRotation = getTargetRotation(activeLessonIndex);
    animateCamera(targetPosition);
  }, [activeLessonIndex]);

  const getTargetPosition = (activeLessonIndex) => {
      switch (activeLessonIndex) {
        case 0: // leccion1 casa
          return [-6, 2, 2];
        case 1: // leccion2 castillo
          return [5, 2.5, 5.5];
        case 2: // leccion3 coliseo
          return [-5, 2, -5];
        case 3: // leccion4 building
          return [7, 2, 0];
        case 4: //default
          return [8, 3, 0];
        default:
          return [8, 3, 0];
      }
    };
  
  const animateCamera = (targetPosition) => {
    gsap.to(camera.position, {
      x: targetPosition[0],
      y: targetPosition[1],
      z: targetPosition[2],
      duration: 1.5, // Duración de la animación en segundos
    });
  };

  return null;
}

// function CameraUpdater({ activeLessonIndex }) {
//   const { camera } = useThree();
//   const cameraPositionRef = useRef([0, 3.5, 7.5]);

//   useEffect(() => {
//     if (activeLessonIndex === 0) { //leccion1 casa
//       cameraPositionRef.current = [-6, 2, 2];
//     } else if (activeLessonIndex === 1) { //leccion2 castillo
//       cameraPositionRef.current = [5, 2.5, 5.5]; //[1, 4, 7]   [-1, 3, 4.5]
//     }
//     else if (activeLessonIndex === 2) { //leccion 3 coliseo [3, 2, 1]
//       cameraPositionRef.current = [-5, 2, -5];
//     }
//     else if (activeLessonIndex === 3) { //leccion 4 building
//       cameraPositionRef.current = [7, 2, 0];
//     }

//     camera. position.set(...cameraPositionRef.current);
//     camera.updateMatrixWorld();
//   }, [activeLessonIndex]);

//   return null;
// }


