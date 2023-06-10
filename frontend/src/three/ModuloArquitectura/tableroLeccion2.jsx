/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function TableroLeccion2(props) {
  const { nodes, materials } = useGLTF("/static/tableroLeccion2.glb");
  return (
    <group {...props} dispose={null}>
      <group scale={3}>
        <mesh
          //castShadow
          //receiveShadow
          geometry={nodes.mesh_id6.geometry}
          material={materials["34"]}
          position={[-0.95, -256.34, 195.73]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={391.22}
        />
        <mesh
          castShadow
          //receiveShadow
          geometry={nodes.mesh_id5.geometry}
          material={materials["33"]}
          position={[-0.95, -256.34, 195.73]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={391.22}
        />
      </group>
      <group position={[0.04, 0.12, 0.26]} rotation={[0, 1.57, 0]} scale={4}>
        <mesh
          //castShadow
          //receiveShadow
          geometry={nodes.mesh_id75.geometry}
          material={materials["81"]}
          position={[-350, 70, 35]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/static/tableroLeccion2.glb");
