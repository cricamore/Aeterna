import React, { useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { DoubleSide, RepeatWrapping } from "three";
import { useTexture, Float, Html } from "@react-three/drei";
import { Statue } from "./statue";
import { Coliseo } from "./coliseo";
import { Suelo } from "./suelo";
import { Derecho } from "./derecho";
import { Arbol } from '../../src/three/ModuloCultura/arbol';
import { Bonsai } from '../../src/three/ModuloCultura/bonsai';

export default function Terrain() {
  const PATH = "/static/textures/Grass_005_SD/";

  const handleArquitecturaClick = () => {
    window.location.href = "/arquitectura";
  };

  const handleCulturaClick = () => {
    window.location.href = "/cultura";
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const handleDocumentClick = (event) => {
    const { target } = event;
    if (target.classList.contains("arquitectura-text")) {
      handleArquitecturaClick();
    } else if (target.classList.contains("cultura-text")) {
      handleCulturaClick();
    }
  };

  return (
    <>
      <group>
        <mesh>
          {/* <Arbol position={[0,1.3,0]}scale={0.7}/> */}
          <Arbol position={[4,1.3,0]}scale={0.7}/>
          {/* <Arbol position={[4,1.3,2]}scale={0.7}/> */}
          {/* <Arbol position={[2,1.3,2]}scale={0.7}/> */}
          {/* <Arbol position={[-2,1.3,2]}scale={0.7}/> */}
          <Arbol position={[-3,1.3,2]}scale={0.7}/>
          <Arbol position={[-5,1.3,0]}scale={0.7}/>
          {/* <Arbol position={[-5,1.3,-2]}scale={0.7}/> */}
          <Arbol position={[-5,1.3,-9]}scale={0.7}/>
          {/* <Arbol position={[-3,1.3,-9]}scale={0.7}/> */}
          {/* <Arbol position={[0,1.3,-9]}scale={0.7}/> */}
          {/* <Arbol position={[3,1.3,-9]}scale={0.7}/> */}
          <Arbol position={[5,1.3,-9]}scale={0.7}/>
          <Arbol position={[-1,1.3,-6]}scale={0.7}/>
          {/* <Arbol position={[-1,1.3,-3]}scale={0.7}/> */}
          <Bonsai position={[5.2,3.7,3.1]} rotation-y={-Math.PI*0.5} scale={0.9}/>
        </mesh>
          {/* <planeGeometry args={[1, 1]} /> */}
          <Suelo scale={0.25}/>
        <mesh
          scale={1}
          position={[-4, 1, -2]}
          // rotation-x={-Math.PI * 1}
          rotation-y={-Math.PI * 0.25}
        >
          <Statue />
        </mesh>
        <mesh>
          <Coliseo
            scale={0.07}
            position={[2.5, 0.1, -1]}
            rotation-y={-Math.PI * 0.7}
          />
        </mesh>
        <mesh
        rotation-y={-Math.PI * 0.7}
        scale={1.2}
        position={[-2,0.9,5]}
        >
          <Derecho/>
        </mesh>
        <Float speed={3}>
          <Html
            position={[2.5, 0.1, -1]}
            center
            className="arquitectura-text"
            style={{
              fontFamily: "Helvetica, Arial",
              fontSize: "40px",
              position: "absolute",
              background: "#00000088",
              color: "white",
              padding: "15px",
              whiteSpace: "nowrap",
              overflow: "hidden",
              borderRadius: "30px",
              userSelect: "none",
              maxWidth: "8",
              cursor: "pointer"
            }}
          >
            ARQUITECTURA
          </Html>
        </Float>
        <Float speed={0.5}>
          <Html
            position={[-4, 1, -2]}
            center
            className="cultura-text"
            style={{
              fontFamily: "Helvetica, Arial",
              fontSize: "40px",
              position: "absolute",
              background: "#00000088",
              color: "white",
              padding: "15px",
              whiteSpace: "nowrap",
              overflow: "hidden",
              borderRadius: "30px",
              userSelect: "none",
              maxWidth: "8",
              cursor: "pointer"
            }}
          >
            ARTE
          </Html>
        </Float>
        <Float speed={0.5}>
          <Html
            position={[-4,0.9,3]}
            center
            className="cultura-text"
            style={{
              fontFamily: "Helvetica, Arial",
              fontSize: "40px",
              position: "absolute",
              background: "#00000088",
              color: "white",
              padding: "15px",
              whiteSpace: "nowrap",
              overflow: "hidden",
              borderRadius: "30px",
              userSelect: "none",
              maxWidth: "8",
              cursor: "pointer"
            }}
          >
            CULTURA
          </Html>
        </Float>
      </group>
    </>
  );
}

