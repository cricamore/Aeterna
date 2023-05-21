import { CameraControls, OrbitControls, PerspectiveCamera, useGLTF } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { DoubleSide, RepeatWrapping } from "three";
import { useTexture } from "@react-three/drei";
// import Building from './building';
// import { Statue } from './statue';

export default function Terrain(){
    const PATH = "/static/textures/Grass_005_SD/"
    
    const props = useTexture({
        map: PATH + "color.jpg",
        displacementMap: PATH + 'height.png',
        normalMap: PATH + 'normal.jpg',
        roughnessMap: PATH + 'roughness.jpg',
        aoMap: PATH + 'ao.jpg'
        // opacityMap: PATH + 'opacity.jpg'
    })

    props.map.repeat.set(8, 8);
    props.map.wrapS = props.map.wrapT = RepeatWrapping;

    props.displacementMap.repeat.set(8, 8);
    props.displacementMap.wrapS = props.displacementMap.wrapT = RepeatWrapping;

    props.normalMap.repeat.set(8, 8);
    props.normalMap.wrapS = props.normalMap.wrapT = RepeatWrapping;

    props.aoMap.repeat.set(8, 8);
    props.aoMap.wrapS = props.aoMap.wrapT = RepeatWrapping;

    props.roughnessMap.repeat.set(8, 8);
    props.roughnessMap.wrapS = props.roughnessMap.wrapT = RepeatWrapping;

    return <>
        <group>
            <mesh scale={50} position={[0,-9.3,0]} rotation-x={ - Math.PI * 0.5 } receiveShadow>
                <planeGeometry args={[1, 1]} />
                <meshStandardMaterial {...props} side={DoubleSide}/>
            </mesh>
            {/* <mesh scale={0.2}>
                <Building/>
            </mesh>
            <mesh position={[-4, 3.5, 2.5]} rotation-x={ - Math.PI * 1 }>
                <Statue />
            </mesh> */}
        </group>
    </>
}