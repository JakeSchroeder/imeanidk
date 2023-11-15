import { useGLTF, useTexture } from "@react-three/drei";

export const Floor = () => {
    //@ts-ignore
    const { nodes } = useGLTF("/floor/floor_model.glb");
    const texture = useTexture("/floor/floor_texture_4k.png");
    texture.flipY = false;
    texture.colorSpace = 'srgb';

    return (

        <group dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.floor.geometry}
            >
                <meshBasicMaterial map={texture} attach="material" />
            </mesh>
        </group>

    );
}

useGLTF.preload("/floor/floor_model.glb");