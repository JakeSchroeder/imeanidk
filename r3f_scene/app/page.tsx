"use client";


import { Canvas } from "@react-three/fiber";
import { KeyboardControls, PointerLockControls } from "@react-three/drei"
import { Suspense } from "react";
import { Base } from "./base";
import { PC } from "./pc";
import { Walls } from "./walls";
import { Floor } from "./floor";
import { Perf } from "r3f-perf";
import { Physics } from "@react-three/rapier";
import { Player } from "./player";


export default function Home() {
  return (
    <main className='w-full h-full' id="canvas-container">
      <Suspense fallback={null}>
        <KeyboardControls
          map={[
            { name: "forward", keys: ["ArrowUp", "w", "W"] },
            { name: "backward", keys: ["ArrowDown", "s", "S"] },
            { name: "left", keys: ["ArrowLeft", "a", "A"] },
            { name: "right", keys: ["ArrowRight", "d", "D"] },
            { name: "jump", keys: ["Space"] },
          ]}>
          <Canvas frameloop="demand">
            <Perf />
            <Physics gravity={[0, -30, 0]}>
              <Player />
              <PC />
              <Walls />
              <Floor />
              <Base />
            </Physics>
            <PointerLockControls />
          </Canvas>
        </KeyboardControls>
      </Suspense>
    </main>
  )
}
