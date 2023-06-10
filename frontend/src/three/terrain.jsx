import React, { useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { DoubleSide, RepeatWrapping } from "three";
import { useTexture, Float, Html } from "@react-three/drei";
import { Statue } from "./statue";
import { Coliseo } from "./coliseo";

export default function Terrain() {
  const PATH = "/static/textures/Grass_005_SD/";

  const props = useTexture({
    map: PATH + "color.jpg",
    displacementMap: PATH + "height.png",
    normalMap: PATH + "normal.jpg",
    roughnessMap: PATH + "roughness.jpg",
    aoMap: PATH + "ao.jpg"
  });

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
        <mesh
          scale={20}
          position={[0, -4, 0]}
          rotation-x={-Math.PI * 0.5}
          receiveShadow
        >
          <planeGeometry args={[1, 1]} />
          <meshStandardMaterial {...props} side={DoubleSide} />
        </mesh>
        <mesh
          scale={1.8}
          position={[-7, 6, -5]}
          rotation-x={-Math.PI * 1}
          rotation-y={-Math.PI * 0.25}
        >
          <Statue />
        </mesh>
        <mesh>
          <Coliseo
            scale={[0.15, 0.25, 0.15]}
            position={[4, 0.2, 1]}
            rotation-y={-Math.PI * 0.7}
          />
        </mesh>
        <Float speed={3}>
          <Html
            position={[5, 5.5, 0]}
            center
            className="arquitectura-text"
            style={{
              fontFamily: "Helvetica, Arial",
              fontSize: "60px",
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
            position={[-7, 3, -5.5]}
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
