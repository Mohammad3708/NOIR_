import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  Float,
  ContactShadows,
  RoundedBox,
  Sparkles,
} from "@react-three/drei";
import * as THREE from "three";

/* =========================
   BARBER CHAIR
========================= */

function BarberChair() {
  const chair = useRef();

  useFrame((state) => {
    if (!chair.current) return;

    chair.current.rotation.y = THREE.MathUtils.lerp(
      chair.current.rotation.y,
      state.pointer.x * 0.12,
      0.04
    );

    chair.current.rotation.x = THREE.MathUtils.lerp(
      chair.current.rotation.x,
      -state.pointer.y * 0.04,
      0.04
    );
  });

  return (
    <group ref={chair} position={[0, -1.7, 0]}>
      <RoundedBox
        args={[1.55, 2.5, 0.45]}
        radius={0.18}
        smoothness={5}
        position={[0, 1.25, 0]}
      >
        <meshStandardMaterial
          color="#111111"
          roughness={0.28}
          metalness={0.25}
        />
      </RoundedBox>

      <RoundedBox
        args={[1.8, 0.5, 1.65]}
        radius={0.18}
        smoothness={5}
        position={[0, 0, 0]}
      >
        <meshStandardMaterial
          color="#151515"
          roughness={0.3}
          metalness={0.3}
        />
      </RoundedBox>

      <mesh position={[-1.05, 0.45, 0]}>
        <boxGeometry args={[0.15, 0.75, 1.3]} />
        <meshStandardMaterial
          color="#c6a15b"
          metalness={0.8}
          roughness={0.25}
        />
      </mesh>

      <mesh position={[1.05, 0.45, 0]}>
        <boxGeometry args={[0.15, 0.75, 1.3]} />
        <meshStandardMaterial
          color="#c6a15b"
          metalness={0.8}
          roughness={0.25}
        />
      </mesh>

      <mesh position={[0, -0.9, 0]}>
        <cylinderGeometry args={[0.13, 0.18, 1.5, 32]} />
        <meshStandardMaterial
          color="#b8944e"
          metalness={0.9}
          roughness={0.2}
        />
      </mesh>

      <mesh position={[0, -1.7, 0]}>
        <cylinderGeometry args={[0.7, 0.85, 0.15, 32]} />
        <meshStandardMaterial
          color="#151515"
          metalness={0.7}
          roughness={0.25}
        />
      </mesh>
    </group>
  );
}

/* =========================
   BARBER MIRROR
========================= */

function BarberMirror() {
  const mirror = useRef();

  useFrame((state) => {
    if (!mirror.current) return;

    mirror.current.rotation.y = THREE.MathUtils.lerp(
      mirror.current.rotation.y,
      state.pointer.x * 0.08,
      0.03
    );
  });

  return (
    <group ref={mirror} position={[0, 1.9, -1.2]}>
      <mesh>
        <cylinderGeometry args={[2.25, 2.25, 0.18, 64]} />
        <meshStandardMaterial
          color="#c6a15b"
          metalness={0.9}
          roughness={0.2}
        />
      </mesh>

      <mesh position={[0, 0, 0.11]}>
        <circleGeometry args={[2.05, 64]} />
        <meshStandardMaterial
          color="#101010"
          metalness={0.95}
          roughness={0.08}
        />
      </mesh>

      <mesh position={[0, 0, 0.13]}>
        <ringGeometry args={[1.82, 1.88, 64]} />
        <meshBasicMaterial color="#c6a15b" />
      </mesh>
    </group>
  );
}

/* =========================
   RAZOR
========================= */

function Razor() {
  const razor = useRef();

  useFrame((state) => {
    if (!razor.current) return;

    razor.current.rotation.x =
      state.clock.elapsedTime * 0.3;

    razor.current.rotation.z =
      Math.sin(state.clock.elapsedTime * 0.7) * 0.15;
  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.6}
      floatIntensity={0.8}
    >
      <group
        ref={razor}
        position={[2.7, 1.1, 0]}
        scale={0.8}
      >
        <mesh>
          <boxGeometry args={[0.25, 1.8, 0.12]} />
          <meshStandardMaterial
            color="#111111"
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>

        <mesh position={[0, 1, 0]}>
          <boxGeometry args={[0.7, 0.35, 0.08]} />
          <meshStandardMaterial
            color="#c6a15b"
            metalness={0.95}
            roughness={0.15}
          />
        </mesh>
      </group>
    </Float>
  );
}

/* =========================
   SCISSORS
========================= */

function Scissors() {
  const scissors = useRef();

  useFrame((state) => {
    if (!scissors.current) return;

    scissors.current.rotation.y =
      state.clock.elapsedTime * 0.25;
  });

  return (
    <Float
      speed={1.2}
      rotationIntensity={0.5}
      floatIntensity={0.6}
    >
      <group
        ref={scissors}
        position={[-2.7, 0.8, 0]}
        rotation={[0.3, 0.2, -0.4]}
      >
        <mesh>
          <cylinderGeometry args={[0.06, 0.06, 1.7, 16]} />
          <meshStandardMaterial
            color="#c6a15b"
            metalness={0.95}
            roughness={0.15}
          />
        </mesh>

        <mesh rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.06, 0.06, 1.7, 16]} />
          <meshStandardMaterial
            color="#c6a15b"
            metalness={0.95}
            roughness={0.15}
          />
        </mesh>

        <mesh position={[-0.55, -0.55, 0]}>
          <torusGeometry args={[0.28, 0.06, 16, 32]} />
          <meshStandardMaterial
            color="#111111"
            metalness={0.7}
            roughness={0.2}
          />
        </mesh>

        <mesh position={[0.55, 0.55, 0]}>
          <torusGeometry args={[0.28, 0.06, 16, 32]} />
          <meshStandardMaterial
            color="#111111"
            metalness={0.7}
            roughness={0.2}
          />
        </mesh>
      </group>
    </Float>
  );
}

/* =========================
   PARTICLES
========================= */

function GoldParticles() {
  return (
    <Sparkles
      count={90}
      scale={[8, 6, 5]}
      size={1.8}
      speed={0.25}
      noise={1}
      color="#c6a15b"
    />
  );
}

/* =========================
   CAMERA
========================= */

function CinematicCamera() {
  useFrame((state) => {
    const scroll =
      window.scrollY /
      Math.max(window.innerHeight, 1);

    const targetX =
      state.pointer.x * 0.45;

    const targetY =
      0.3 + state.pointer.y * 0.2;

    state.camera.position.x =
      THREE.MathUtils.lerp(
        state.camera.position.x,
        targetX,
        0.025
      );

    state.camera.position.y =
      THREE.MathUtils.lerp(
        state.camera.position.y,
        targetY,
        0.025
      );

    const targetZ =
      9 + Math.min(scroll, 1) * 1.5;

    state.camera.position.z =
      THREE.MathUtils.lerp(
        state.camera.position.z,
        targetZ,
        0.025
      );

    state.camera.lookAt(0, 0.2, 0);
  });

  return null;
}

/* =========================
   SCENE
========================= */

function Scene() {
  const scene = useRef();

  useEffect(() => {
    if (!scene.current) return;

    scene.current.position.z = -1.5;

    scene.current.scale.set(
      0.92,
      0.92,
      0.92
    );
  }, []);

  useFrame((state) => {
    if (!scene.current) return;

    const scroll =
      window.scrollY /
      Math.max(window.innerHeight, 1);

    /* Mouse Parallax */

    scene.current.rotation.y =
      THREE.MathUtils.lerp(
        scene.current.rotation.y,
        state.pointer.x * 0.35,
        0.035
      );

    scene.current.rotation.x =
      THREE.MathUtils.lerp(
        scene.current.rotation.x,
        -state.pointer.y * 0.18,
        0.035
      );

    scene.current.position.x =
      THREE.MathUtils.lerp(
        scene.current.position.x,
        state.pointer.x * 0.18,
        0.035
      );

    scene.current.position.y =
      THREE.MathUtils.lerp(
        scene.current.position.y,
        state.pointer.y * 0.08,
        0.035
      );

    /* Entrance */

    scene.current.position.z =
      THREE.MathUtils.lerp(
        scene.current.position.z,
        0,
        0.015
      );

    scene.current.scale.x =
      THREE.MathUtils.lerp(
        scene.current.scale.x,
        1,
        0.015
      );

    scene.current.scale.y =
      THREE.MathUtils.lerp(
        scene.current.scale.y,
        1,
        0.015
      );

    scene.current.scale.z =
      THREE.MathUtils.lerp(
        scene.current.scale.z,
        1,
        0.015
      );

    /* Scroll movement */

    const scrollRotation =
      Math.min(scroll, 1) * 0.12;

    scene.current.rotation.y +=
      scrollRotation;

    scene.current.position.y -=
      Math.min(scroll, 1) * 0.3;
  });

  return (
    <group ref={scene}>
      <Environment preset="city" />

      <ambientLight intensity={0.28} />

      <spotLight
        position={[5, 7, 6]}
        intensity={10}
        angle={0.32}
        penumbra={1}
        distance={18}
      />

      <spotLight
        position={[-6, 4, 1]}
        intensity={6}
        angle={0.45}
        penumbra={1}
        distance={15}
      />

      <pointLight
        position={[0, 2, 5]}
        intensity={2.5}
        distance={10}
      />

      <BarberMirror />
      <BarberChair />

      <Razor />
      <Scissors />

      <GoldParticles />

      <Sparkles
        count={35}
        scale={[5, 4, 4]}
        size={1}
        speed={0.15}
        noise={0.8}
        color="#f1eee7"
      />

      <ContactShadows
        position={[0, -3.35, 0]}
        opacity={0.55}
        scale={8}
        blur={2.8}
        far={5}
      />
    </group>
  );
}

/* =========================
   HERO
========================= */

function Noir3DHero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className={`noir-3d-hero ${
        loaded ? "is-loaded" : ""
      }`}
    >
      <div className="noir-3d-canvas">
        <Canvas
          camera={{
            position: [0, 0.3, 9],
            fov: 42,
          }}
          dpr={[1, 2]}
        >
          <CinematicCamera />
          <Scene />
        </Canvas>
      </div>

      <div className="noir-hero-overlay" />

      <div className="noir-hero-content">
        <p className="noir-hero-eyebrow">
          PREMIUM MEN'S GROOMING
        </p>

        <h1>
          PRECISION
          <br />
          <span>IN EVERY CUT.</span>
        </h1>

        <p className="noir-hero-description">
          Premium grooming crafted for those who expect
          more than just a haircut.
        </p>

        <div className="noir-hero-actions">
          <a
            href="#booking"
            className="noir-btn noir-btn-primary"
          >
            BOOK AN APPOINTMENT
          </a>

          <a
            href="#services"
            className="noir-btn noir-btn-outline"
          >
            EXPLORE SERVICES
          </a>
        </div>
      </div>

      <div className="noir-hero-bottom">
        <span>NOIR / 2026</span>

        <div className="noir-scroll">
          <span>SCROLL TO EXPLORE</span>
          <div className="scroll-line" />
        </div>
      </div>
    </section>
  );
}

export default Noir3DHero;