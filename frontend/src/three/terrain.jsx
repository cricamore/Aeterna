import { CameraControls, OrbitControls, PerspectiveCamera, useGLTF } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { DoubleSide, RepeatWrapping } from "three";
import { useTexture } from "@react-three/drei";
// import Building from './building';
import { Statue } from './statue';
import { Coliseo } from './coliseo';
import { Bush } from './bush';
import { useMemo } from 'react';


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

    props.map.repeat.set(86, 86);
    props.map.wrapS = props.map.wrapT = RepeatWrapping;

    props.displacementMap.repeat.set(86, 86);
    props.displacementMap.wrapS = props.displacementMap.wrapT = RepeatWrapping;

    props.normalMap.repeat.set(86, 86);
    props.normalMap.wrapS = props.normalMap.wrapT = RepeatWrapping;

    props.aoMap.repeat.set(86, 86);
    props.aoMap.wrapS = props.aoMap.wrapT = RepeatWrapping;

    props.roughnessMap.repeat.set(86, 86);
    props.roughnessMap.wrapS = props.roughnessMap.wrapT = RepeatWrapping;

    // const bushPositions = useMemo(
    //   () => [
    //     [3, -0.78, 11],
    //     [3, -0.78, 10],
    //     [3, -0.78, 9],
    //     [3, -0.78, 8],
    //     [8, -0.78, 11],
    //     [8, -0.78, 10],
    //     [8, -0.78, 9],
    //     [8, -0.78, 8],  
    //   ],
    //   []
    // );

    return (
      <>
        <group>
          <mesh
            scale={20}
            position={[0, -4, 0]}
            rotation-x={-Math.PI * 0.5}
            receiveShadow
          >
            <planeGeometry args={[1, 1]} />
            <meshStandardMaterial {...props} side={DoubleSide} />
          </mesh>
          <mesh position={[2, 3.5, 2.5]} rotation-x={-Math.PI * 1}>
            <Statue />
          </mesh>
          {/* <mesh position={[7, 0, 0]}scale={0.2}>
            <Building/>
          </mesh>   */}
          <mesh>
            <Coliseo scale={0.1} position={[-5, 0, 2.5]}/>
          </mesh>
        </group>
      </>
    );
}