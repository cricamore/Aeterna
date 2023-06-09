/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Arbol(props) {
  const { nodes, materials } = useGLTF("/static/arbol.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[0.03, -0.05, 0]} scale={0.008}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_id58.geometry}
          material={materials["75"]}
          position={[14.73, -256.02, 600.5]}
          scale={8.71}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_id60.geometry}
          material={materials["76"]}
          position={[14.73, -256.02, 600.5]}
          scale={8.71}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/static/arbol.glb");
