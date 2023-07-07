import { OrbitControls, Sky } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { Canvas, useThree } from '@react-three/fiber'
import {useEffect, useRef} from 'react';
import Terrain from './terrain'
import { Suelo } from './suelo';
import Plano from '../../src/three/ModuloArte/plano';
import { Coliseo } from './coliseo';
import { gsap } from 'gsap';
import LoadingScreen from '../../src/pages/loadingScreen';



export default function Experience({activeModuleIndex,isExperienceLoaded,setIsExperienceLoaded, setIsLoading}) {
    console.log("es el botón", activeModuleIndex)
    console.log("loaded?",isExperienceLoaded)

    const containerStyles = {
        position: 'fixed',
        width: '100%',
        height: '100vh',
      };

    return <>
        <Canvas 
        style={containerStyles}
        shadows
        camera={ {
            fov: 60,
            near: 0.1,
            far: 200,
            position: [ -0.17, 7, 15 ]
        } }
        onCreated={() => setIsExperienceLoaded(true)}
        >
            {/* <Perf position="top-right" /> */}
            {/* <OrbitControls makeDefault /> */}
            <spotLight position={[30, 20, 30]} intensity={0.2} />
            <directionalLight castShadow position={[-30, 30, -30]} intensity={1.2} />
            <ambientLight intensity={0.2} />
            <CameraUpdater activeModuleIndex={activeModuleIndex} />
            <Terrain setIsLoading={setIsLoading}/>
            {/* <Suelo /> */}
            {/* <Plano/> */}
            <Sky/>
        </Canvas>
        
    </>
}

function CameraUpdater({ activeModuleIndex }) {
    const { camera } = useThree();
    const cameraRef = useRef();
    const cameraPositionRef = useRef([0, 3.5, 7.5]);
  
    useEffect(() => {
      const targetPosition = getTargetPosition(activeModuleIndex);
      const targetRotation = getTargetRotation(activeModuleIndex);
      animateCamera(targetPosition, targetRotation);
    }, [activeModuleIndex]);
  
    const getTargetPosition = (activeModuleIndex) => {
        switch (activeModuleIndex) {
          case 0: // default
            return [3, 4, 8.5];
          case 1: // Modulo arquitectura
            return [2, 1.5, 5];
          case 2: // Modulo arte
            return [-1, 2, 0];
          case 3: // Modulo cultura
            return [1, 1.5, 2];
          default:
            return [3, 4, 7.5];
        }
      };
    
      const getTargetRotation = (activeModuleIndex) => {
        switch (activeModuleIndex) {
          case 0: //default
            return [-0.3, 0.4, 0.1];
          case 1: // Modulo arquitectura
            return [0, 0, 0];
          case 2: // Modulo arte
            return [0, 1, 0];
          case 3: // Modulo cultura
            return [0, 2, 0];
          default:
            return [-0.3, 0.4, 0.1];
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