import { Canvas, useFrame, useThree, HemisphereLight } from '@react-three/fiber';
import { OrbitControls, Sky } from '@react-three/drei';
import { Perf } from 'r3f-perf';
import { useContext, useEffect, useRef, useState,createContext  } from 'react';
import { gsap } from 'gsap';
import Plano from './plano';
import { Primaporta } from './primaporta';
import { Bridge } from './roman_bridge';
import { Cuadro } from './cuadro';
import { Cuadro2 } from './cuadro2';
import { Arbol } from '../ModuloCultura/arbol';
import { Tree } from './tree';
import { Bonsai } from '../ModuloCultura/bonsai';
import { Mars } from './mars';

export default function Experience({activeLessonIndex, leccionesCompletadas, setLeccionesCompletadas}){

    const containerStyles = {
        position: 'fixed',
        width: '100%',
        height: '100vh',
    };    

    return (
        <>
        <Canvas style={containerStyles} shadows>
            <ambientLight intensity={0.3} />
            <Sky/>
            {/* <Perf position="top-right" /> */}
            <spotLight position={[30, 20, 30]} intensity={0.2} />
            <directionalLight castShadow position={[-30, 30, -30]} intensity={1} />
            <CameraUpdater activeLessonIndex={activeLessonIndex} />
            <Plano />
            {/* <OrbitControls MakeDefault/> */}
            <mesh rotation-y={-Math.PI * 0.5} position={[4, 0.35, -0.5]} scale={0.9}>
                <mesh  position={[1,0.65,0]} rotation-y={-Math.PI * 0.14}>
                    <Primaporta leccionesCompletadas={leccionesCompletadas} setLeccionesCompletadas={setLeccionesCompletadas}/>
                </mesh >
                <mesh rotation-y={-Math.PI * 0.4} position={[0,1.2,0]} scale={1.2}>
                    <Mars leccionesCompletadas={leccionesCompletadas} setLeccionesCompletadas={setLeccionesCompletadas}/>
                </mesh>
            </mesh>
            <mesh position={[3.3,2.1,4]} scale={1.5}>
                <Bridge leccionesCompletadas={leccionesCompletadas} setLeccionesCompletadas={setLeccionesCompletadas}/>
            </mesh>
            <mesh position={[-3, 2, 0]} scale={5} rotation-y={Math.PI * 0.5}>
                <Cuadro leccionesCompletadas={leccionesCompletadas} setLeccionesCompletadas={setLeccionesCompletadas}/>
            </mesh>
            <mesh position={[0, 2, -4]} scale={5}>
                <Cuadro2 leccionesCompletadas={leccionesCompletadas} setLeccionesCompletadas={setLeccionesCompletadas}/>
            </mesh>
            <mesh>
                <Arbol position={[0,2.6, 0.3]} />
                <Arbol position={[-4.7,2.3, 0.3]} />
                <Arbol position={[-4.7,2.3, -2.5]} />
                <Arbol position={[4,2.4, -8]} />
                <Arbol position={[-4,2.4, -8]} />
                <Arbol position={[-5,2.4, -10]} />
                <Arbol position={[-5,2.4, -5]} />
                <Arbol position={[-1,2.4, -10]} />
                <Arbol position={[3,2.4, -10]} />
                <Arbol position={[5,2.4, -3]} />
                <Arbol position={[5,2.4, -1]} />
                <Arbol position={[2.5,2.4, -8]} />
                <Arbol position={[-2,2.4, -7.5]} />
                {/* <Tree scale={35} position={[1,5.1,-6]}/> */}
                <Bonsai position={[6,4.5,2.5]} rotation-y={-Math.PI*0.5} scale={0.9}/>
            </mesh>
            
        </Canvas>
        
        </>
    )

};

function CameraUpdater({ activeLessonIndex }) {
    const { camera } = useThree();
    const cameraRef = useRef();
    const cameraPositionRef = useRef([0, 3.5, 7.5]);
  
    useEffect(() => {
      const targetPosition = getTargetPosition(activeLessonIndex);
      const targetRotation = getTargetRotation(activeLessonIndex);
      animateCamera(targetPosition, targetRotation);
    }, [activeLessonIndex]);
  
    const getTargetPosition = (activeLessonIndex) => {
        switch (activeLessonIndex) {
          case 0: // leccion1 casa
            return [-1.2, 2, 0.3];
          case 1: // leccion2 castillo
            return [0, 2, -1.8];
          case 2: // leccion3 coliseo
            return [1, 2, -2];
          case 3: // leccion4 building
            return [2, 4, 0.2];
          case 4: // default
            return [4, 5, 6];
          default:
            return [4, 5, 6];
        }
      };
    
      const getTargetRotation = (activeLessonIndex) => {
        switch (activeLessonIndex) {
          case 0: // leccion1 mitologia
            return [0, 1.5, 0];
          case 1: // leccion2 derecho
            return [0, 0, 0];
          case 2: // leccion3 libro
            return [0, -1.9, 0];
          case 3: // leccion4 sociedad
            return [0.3, -3.1, 0];
          case 4: //default
            return [-0.5, 0.4, 0.1];
          default:
            return [-0.5, 0.4, 0.1];
        }
      };
  
    const animateCamera = (targetPosition, targetRotation) => {
      gsap.to(camera.position, {
        x: targetPosition[0],
        y: targetPosition[1],
        z: targetPosition[2],
        duration: 1, // Duración de la animación en segundos
      });

      gsap.to(camera.rotation, {
        x: targetRotation[0],
        y: targetRotation[1],
        z: targetRotation[2],
        duration: 1.5, // Duración de la animación en segundos
      });
    };
  
    return null;
}