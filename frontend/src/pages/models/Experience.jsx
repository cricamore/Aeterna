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
        <Canvas style={containerStyles}>
            

            <Perf position="top-right" />
            <OrbitControls makeDefault />
            <directionalLight castposition={[1, 2, 3]} intensity={1.5} />
            <ambientLight intensity={0.5} />
            <Terrain/>

        </Canvas>
        
    </>
}