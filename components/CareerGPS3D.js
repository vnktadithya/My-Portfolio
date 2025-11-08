"use client";
import { Canvas, useLoader } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { Suspense } from "react";
import * as THREE from "three";

function SceneContent() {
  // --- ✅ Always call useLoader directly (no try/catch / no conditional) ---
  const texture = useLoader(THREE.TextureLoader, "/images/career_gps_3d.png");

  // --- Optional: configure texture filtering for better visual quality ---
  texture.encoding = THREE.sRGBEncoding;
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.flipY = false; // often needed for PNGs exported from tools

  console.log("✅ Texture loaded:", texture.image?.src);

  return (
    <>
      {/* --- Lights --- */}
      <ambientLight intensity={1.2} />
      <directionalLight position={[3, 2, 4]} intensity={1.2} />

      {/* --- Floating Holographic Panel --- */}
      <Float speed={1.2} rotationIntensity={0.5} floatIntensity={0.6}>
        <mesh rotation={[0, 0.3, 0]}>
          <planeGeometry args={[3.8, 2.2]} />
          <meshStandardMaterial
            map={texture}
            transparent
            side={THREE.DoubleSide}
            emissive={"#00eaff"}
            emissiveIntensity={0.25}
            metalness={0.6}
            roughness={0.3}
          />
        </mesh>
      </Float>

      {/* --- Glowing Base Ring --- */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.3, 0]}>
        <ringGeometry args={[0.9, 1.5, 64]} />
        <meshBasicMaterial
          color={"#00eaff"}
          transparent
          opacity={0.25}
          side={THREE.DoubleSide}
        />
      </mesh>
    </>
  );
}

export default function CareerGPS3D() {
  return (
    <div className="w-full h-[400px] flex items-center justify-center">
      <Suspense fallback={<p className="text-gray-400 text-sm">Loading hologram...</p>}>
        <Canvas
          style={{ width: "100%", height: "100%" }}
          camera={{ position: [0, 0, 5], fov: 45 }}
          gl={{
            alpha: true,
            antialias: true,
            preserveDrawingBuffer: true,
          }}
        >
          <SceneContent />
        </Canvas>
      </Suspense>
    </div>
  );
}
