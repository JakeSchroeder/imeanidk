import { useGLTF, useKTX2, useTexture } from "@react-three/drei";
import { CuboidCollider, RigidBody } from "@react-three/rapier";

export const Base = () => {
    //@ts-ignore
    const { nodes } = useGLTF("/base/base_model.glb");
    console.log(nodes)
    // const texture = useTexture("/base/base_texture_1_4k.png");
    const texture = useKTX2("/base/base_texture_ktx_1.ktx")
    texture.flipY = false;
    texture.colorSpace = 'srgb';
    texture.anisotropy = -20;

    return (
        <RigidBody type="fixed" colliders={false}>
            <group dispose={null}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.base001.geometry}
                >
                    <meshBasicMaterial map={texture} attach="material" />
                </mesh>

                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.desks001.geometry}
                >
                    <meshBasicMaterial map={texture} attach="material" />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.chair001.geometry}
                >
                    <meshBasicMaterial map={texture} attach="material" />
                </mesh>
            </group>
            <CuboidCollider args={[10, 1, 10]} position={[0, -1, 0]} />
        </RigidBody>
    );
}

useGLTF.preload("/base/base_model.glb");