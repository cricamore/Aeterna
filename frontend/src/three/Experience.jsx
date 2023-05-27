import { OrbitControls } from '@react-three/drei'
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
            fov: 45,
            near: 0.1,
            far: 200,
            position: [ 4, 3, 16 ]
        } }
        >
            <Perf position="top-right" />
            <OrbitControls makeDefault />
            {/* <directionalLight castShadow castposition={[1, 5, 9]} intensity={1} />
            <ambientLight intensity={0.2} /> */}
            <spotLight position={[0, 30, 10]} />
            <Terrain/>

        </Canvas>
        
    </>
}