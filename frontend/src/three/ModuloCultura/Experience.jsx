import { Canvas, useFrame, useThree, HemisphereLight } from '@react-three/fiber';
import { OrbitControls, Sky } from '@react-three/drei';
import { useContext, useEffect, useRef, useState,createContext  } from 'react';
import Plano from './plano';
import { Zeus } from './zeus';
import { Cerbero } from './cerbero';
import { Gargoyle } from './gargoyle';
import { Hercules } from './hercules';
import { Mesa } from './mesa';
import { Monedas } from './monedas';
import { Libro } from './libro';



export default function Experience({ activeLessonIndex }){

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
                <spotLight position={[30, 20, 30]} intensity={0.2} />
                <directionalLight castShadow position={[-30, 30, -30]} intensity={1} />
                {/* <CameraUpdater activeLessonIndex={activeLessonIndex} /> */}
                <Plano />
                <mesh position={[0, 1.3, -4]} scale={0.05}>
                    <Zeus/>
                </mesh>
                <mesh position={[-2,0.5,0]} scale={0.01}>
                    <Cerbero/>
                </mesh>
                <mesh scale={0.15} position={[1, 1.2, 4]}>
                    <Gargoyle/>
                </mesh>
                <mesh position={[-1, 1, 0]} scale={1.6}>
                    <Hercules/>
                </mesh>
                <mesh scale={0.08} position={[3, 0.5, 0]}>
                    <Mesa/>
                </mesh>
                <mesh position={[3,1.4,1]} scale={1.5}>
                    <Monedas/>
                </mesh>
                <mesh scale={2.5} position={[1.8,1.32,-0.5]} rotation-y={-Math.PI*0.5}>
                    <Libro/>
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