/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useTexture } from "@react-three/drei";
import { DoubleSide, RepeatWrapping } from "three";
// import { Casa } from "./casa";
//import { getRSCModuleInformation } from "next/dist/build/analysis/get-page-static-info";

export default function Plano(props) {
  const { nodes, materials } = useGLTF("/static/plano.glb");
  const PATH = "/static/textures/Grass_005_SD/"
    
    const props1 = useTexture({
        map: PATH + "color.jpg",
        // displacementMap: PATH + 'height.png',
        // normalMap: PATH + 'normal.jpg',
        roughnessMap: PATH + 'roughness.jpg',
        // aoMap: PATH + 'ao.jpg'
        // opacityMap: PATH + 'opacity.jpg'
    })

    // props1.map.repeat.set(8, 8);
    // props1.map.wrapS = props1.map.wrapT = RepeatWrapping;
    //>v
    // props1.displacementMap.repeat.set(88, 88);
    // props1.displacementMap.wrapS = props1.displacementMap.wrapT = RepeatWrapping;

    // props1.normalMap.repeat.set(88, 88);
    // props1.normalMap.wrapS = props1.normalMap.wrapT = RepeatWrapping;

    // props1.aoMap.repeat.set(88, 88);
    // props1.aoMap.wrapS = props1.aoMap.wrapT = RepeatWrapping;

    // props1.roughnessMap.repeat.set(8, 8);
    // props1.roughnessMap.wrapS = props1.roughnessMap.wrapT = RepeatWrapping;
  return (
    <group {...props} dispose={null}>
      <mesh
        receiveShadow
        geometry={nodes.Plano.geometry}
        material={nodes.Plano.material}
        position={[0, 0.38, 0]}
        scale={6}
      >
        <meshStandardMaterial {...props1}/>
      </mesh>
      {/* <mesh
        position={[0, 1, 0]}
        scale={0.5}
      >
        <Casa/>
      </mesh> */}

      
    </group>
  );  
}

useGLTF.preload("/static/plano.glb");
