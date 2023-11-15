import { useGLTF, useTexture } from "@react-three/drei";

export const Walls = () => {
    //@ts-ignore
    const { nodes } = useGLTF("/walls/walls_model.glb");
    const texture = useTexture("/walls/walls_texture_4k.png");
    texture.flipY = false;
    texture.colorSpace = 'srgb';

    return (
        <group dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.walls.geometry}
            >
                <meshBasicMaterial map={texture} attach="material" />
            </mesh>

        </group>
    );
}

useGLTF.preload("/walls/walls_model.glb");