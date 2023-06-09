import { OrbitControls, Sky } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { Canvas } from '@react-three/fiber'
import Terrain from './terrain'



export default function Experience() {
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
        >
            {/* <Perf position="top-right" /> */}
            <OrbitControls makeDefault />
            <spotLight position={[30, 20, 30]} intensity={0.2} />
            <directionalLight castShadow position={[-30, 30, -30]} intensity={1} />
            <ambientLight intensity={0.2} />

            <Terrain/>
            <Sky/>
        </Canvas>
        
    </>
}