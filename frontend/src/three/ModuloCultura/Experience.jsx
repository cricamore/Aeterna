import { Canvas, useFrame, useThree, HemisphereLight } from '@react-three/fiber';
import { OrbitControls, Sky } from '@react-three/drei';
import { Perf } from 'r3f-perf';
import { useContext, useEffect, useRef, useState,createContext  } from 'react';
import Plano from './plano';
import { Zeus } from './zeus';
import { Cerbero } from './cerbero';
import { Gargoyle } from './gargoyle';
import { Hercules } from './hercules';
import { Mesa } from './mesa';
import { Monedas } from './monedas';
import { Libro } from './libro';
import { gsap } from 'gsap';
import { Leyes } from './leyes';
import { Arbol } from './arbol';
import { Bonsai } from './bonsai';
import { TableroLeccion1 } from '../ModuloArquitectura/tableroLeccion1';
import { TableroLeccion2 } from '../ModuloArquitectura/tableroLeccion2';
import { TableroLeccion3 } from '../ModuloArquitectura/tableroLeccion3';
import { TableroLeccion4 } from '../ModuloArquitectura/tableroLeccion4';
import { Coins } from './coins';
import { Mesita } from './mesita';



export default function Experience({ activeLessonIndex, leccionesCompletadas, setLeccionesCompletadas }){

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
                <mesh scale={0.25} position={[0, 1.6, 3]} rotation-y={-Math.PI*1} >
                    <Gargoyle leccionesCompletadas={leccionesCompletadas} setLeccionesCompletadas={setLeccionesCompletadas}/>
                </mesh>
                <mesh position={[-6.8, 1.5, 4]} scale={3} rotation-y={Math.PI*0.3} > 
                    <Hercules leccionesCompletadas={leccionesCompletadas} setLeccionesCompletadas={setLeccionesCompletadas}/>
                </mesh>
                <mesh position={[-3, 0.5, 3.1]} scale={0.015} rotation-y={Math.PI*0.2}>
                  <Cerbero leccionesCompletadas={leccionesCompletadas} setLeccionesCompletadas={setLeccionesCompletadas}/>
                </mesh>
                <mesh position={[1.5,0,-0.5]}>
                  <mesh position={[2, 1, 2]}>
                    <Mesita  leccionesCompletadas={leccionesCompletadas} setLeccionesCompletadas={setLeccionesCompletadas}/>
                  </mesh>
                  <mesh position={[2.1,1.5,2.4]} >
                    <Coins leccionesCompletadas={leccionesCompletadas} setLeccionesCompletadas={setLeccionesCompletadas}/>
                  </mesh>
                    
                </mesh>
                <mesh position={[1, 0.1, -1]} rotation-y={Math.PI*0.2} scale={0.7}>
                  <mesh scale={0.08} position={[3, 0.5, 0]}>
                    <Mesa  leccionesCompletadas={leccionesCompletadas} setLeccionesCompletadas={setLeccionesCompletadas}/>
                  </mesh>
                  <mesh scale={3} position={[1.5,1.32,0]} rotation-y={-Math.PI*0.5}>
                    <Libro leccionesCompletadas={leccionesCompletadas} setLeccionesCompletadas={setLeccionesCompletadas}/>
                  </mesh>
                    
                </mesh>
                <mesh position={[-4, 1.2, -1]} rotation-y={-Math.PI*1.2}>
                    <Leyes leccionesCompletadas={leccionesCompletadas} setLeccionesCompletadas={setLeccionesCompletadas}/>
                </mesh>
                <mesh >
                    <Arbol position={[4,2.6, -1]}/>
                    <Arbol position={[1.9,2.6, -1]}/>
                    <Arbol position={[4,2.4,-9.5]}/>
                    <Arbol position={[4,2.4,-4.5]}/>
                    <Arbol position={[4.6,2.4,-6.5]}/>
                    <Arbol position={[1,2.6,-8.5]}/> 
                    <Arbol position={[-3,2.6,-9]}/>
                    <Arbol position={[-3.2,2.65,-6]}/>
                    <Arbol position={[-5,2.4,-1]}/>
                    <Arbol position={[-4.5,2.5,-5]}/>

                </mesh>
                <mesh>
                    <Bonsai position={[7,4.8,3]} rotation-y={-Math.PI*0.5}/>
                </mesh>
                <mesh 
                    scale={0.0006}
                    position={[-2, 1.1, 1]}
                    rotation-y={-Math.PI*1.7}
                >
                    <TableroLeccion1/>
                </mesh>
                <mesh
                    scale={0.0006}
                    position={[-0.8, 0.9, -3.5]}
                >
                    <TableroLeccion2/>
                </mesh>
                <mesh
                    scale={0.0006}
                    position={[2, 0.9, -2.5]}
                    rotation-y={-Math.PI*0.65}
                >   
                    <TableroLeccion3/>
                </mesh>
                <mesh
                    scale={0.0006}
                    position={[2, 0.9, 2.2]}
                    rotation-y={-Math.PI*1.2}
                >   
                    <TableroLeccion4/>
                </mesh>
                
                {/* <OrbitControls enableRotate={false} MakeDefault /> */}
                {/* <OrbitControls MakeDefault/> */}
                
            </Canvas>
        </>
    );
}

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
            return [-0.8, 1, -1.1];
          case 1: // leccion2 castillo
            return [1.8, 2.1, -2];
          case 2: // leccion3 coliseo
            return [2, 2, 0.1];
          case 3: // leccion4 building
            return [1, 2.5, 0.5];
          case 4: //default
            return [8, 3, 0];
          default:
            return [8, 3, 0];
        }
      };
    
      const getTargetRotation = (activeLessonIndex) => {
        switch (activeLessonIndex) {
          case 0: // leccion1 mitologia
            return [-0.2, Math.PI*0.935, 0];
          case 1: // leccion2 derecho
            return [Math.PI/3, Math.PI*1.1 / 2, -Math.PI/3];
          case 2: // leccion3 libro
            return [-Math.PI / 7, -Math.PI / 25, 0];
          case 3: // leccion4 sociedad
            return [Math.PI / 3, -Math.PI / 1.5, Math.PI / 3];
          case 4: //default
            return [0, Math.PI / 2, 0];
          default:
            return [0, Math.PI / 2, 0];
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
  

// function CameraUpdater({ activeLessonIndex }) {
//     const { camera } = useThree();
//     const cameraPositionRef = useRef([0, 3.5, 7.5]);
  
//     useEffect(() => {
//       if (activeLessonIndex === 0) { //leccion1 casa
//         cameraPositionRef.current = [-0.5, 1, -2];
//       } else if (activeLessonIndex === 1) { //leccion2 castillo
//         cameraPositionRef.current = [5.5, 3, 4]; //[1, 4, 7]   [-1, 3, 4.5]
//       }
//       else if (activeLessonIndex === 2) { //leccion 3 coliseo [3, 2, 1]
//         cameraPositionRef.current = [-5, 2, -5];
//       }
//       else if (activeLessonIndex === 3) { //leccion 4 building
//         cameraPositionRef.current = [7, 2, 0];
//       }
  
//       camera. position.set(...cameraPositionRef.current);
//       camera.updateMatrixWorld();
//     }, [activeLessonIndex]);
  
//     return null;
// }
