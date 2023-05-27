import { OrbitControls } from '@react-three/drei';
import { Perf } from 'r3f-perf';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useContext, useEffect, useRef, useState } from 'react';
import Plano from './plano';
import { Castillo } from './castillo';
import { Coliseo } from './coliseo';
import { Casa } from './casa';
import Building from './building';
import * as THREE from 'three';
import { Vector3 } from 'three';
import { TableroLeccion1 } from './tableroLeccion1';
import { TableroLeccion2 } from './tableroLeccion2';
import { TableroLeccion3 } from './tableroLeccion3';
import { TableroLeccion4 } from './tableroLeccion4';

export default function Experience({ activeLessonIndex }) {
  const containerStyles = {
    position: 'fixed',
    width: '100%',
    height: '100vh',
  };


  return (
    <>
      <Canvas style={containerStyles} shadows={true}>
        <Perf position="top-right" />
        {/* <directionalLight castShadow castposition={[1, 5, 9]} intensity={1} /> */}
        <ambientLight intensity={0.2} />
        <spotLight position={[0, 30, 10]} />
        <CameraUpdater activeLessonIndex={activeLessonIndex} />
        <Plano />
        <mesh position={[-2, 0.7, 2]} scale={0.25}>
          <Casa />
        </mesh>
        <mesh position={[3, 0.5, 0]} scale={0.1} rotation-y={-Math.PI*1.5}>
          <Building />
        </mesh>
        <mesh 
        scale={0.25} 
        position={[3, 0.74, 3]}
        rotation-y={-Math.PI*1.5}
        >
          <Castillo />
        </mesh>
        <mesh scale={0.03} position={[-1, 0.6, -2.8]} rotation-y={-Math.PI * 1.5}>
          <Coliseo />
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
          position={[4, 0.8, 3.8]}
          rotation-y={-Math.PI * 2.1}
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
        <OrbitControls MakeDefault/>
      </Canvas>
    </>
  );
}

function CameraUpdater({ activeLessonIndex }) {
  const { camera } = useThree();
  const cameraPositionRef = useRef([0, 10, 10]);

  useEffect(() => {
    if (activeLessonIndex === 0) { //leccion1 casa
      cameraPositionRef.current = [-6, 2, 2];
    } else if (activeLessonIndex === 1) { //leccion2 castillo
      cameraPositionRef.current = [5.5, 3, 4]; //[1, 4, 7]   [-1, 3, 4.5]
    }
    else if (activeLessonIndex === 2) { //leccion 3 coliseo [3, 2, 1]
      cameraPositionRef.current = [-5, 2, -5];
    }
    else if (activeLessonIndex === 3) { //leccion 4 building
      cameraPositionRef.current = [7, 2, 0];
    }

    camera. position.set(...cameraPositionRef.current);
    camera.updateMatrixWorld();
  }, [activeLessonIndex]);

  return null;
}


