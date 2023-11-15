import React, { useRef } from "react";
import { Html, useGLTF, useTexture } from "@react-three/drei";

export const PC = () => {
    //@ts-ignore
    const { nodes } = useGLTF("/pc/pc_model.glb");
    const texture = useTexture("/pc/pc_texture_1_4k.png");
    texture.flipY = false;
    texture.colorSpace = 'srgb';
    return (
        <group dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.decor.geometry}

            >
                <meshBasicMaterial map={texture} attach="material" />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.pc.geometry}

            >
                <meshBasicMaterial map={texture} attach="material" />
                {/* <Html occlude="blending" castShadow transform distanceFactor={.22} position={[-1.79, 1.45, -1.8]} rotation={[0, Math.PI - 2.45, 0]}>
                    <iframe src="https://axiom.co" width={1024} height={1024} />
                </Html> */}
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.mouse001.geometry}

            >
                <meshBasicMaterial map={texture} attach="material" />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.keyboard001.geometry}

            >
                <meshBasicMaterial map={texture} attach="material" />
            </mesh>
            {/* <mesh
                castShadow
                receiveShadow
                geometry={nodes.decor.geometry}

            >
                <meshBasicMaterial map={texture} attach="material" />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.pc.geometry}

            >
                <meshBasicMaterial map={texture} attach="material" />
                <Html occlude="blending" castShadow transform distanceFactor={.22} position={[-1.79, 1.45, -1.8]} rotation={[0, Math.PI - 2.45, 0]}>
                    <iframe src="https://jakethefirst.com" width={1024} height={1024} />
                </Html>
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.mouse001.geometry}

            > <meshBasicMaterial map={texture} attach="material" />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.keyboard001.geometry}

            > <meshBasicMaterial map={texture} attach="material" />
            </mesh> */}
        </group>
    );
}

useGLTF.preload("/pc/pc_model.glb");