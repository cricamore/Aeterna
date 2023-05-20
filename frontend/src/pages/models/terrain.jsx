import { CameraControls, OrbitControls, PerspectiveCamera, useGLTF } from '@react-three/drei'
import { Perf } from 'r3f-perf'

export default function Terrain(){

    return <>
        <group>
            <mesh scale={ 20 }>
                <planeGeometry/>
                <meshStandardMaterial color="greenyellow" />
            </mesh>
        </group>
    </>
}