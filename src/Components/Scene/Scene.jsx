// src/components/Scene/Scene.js
import React, { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { 
  Float, 
  Text, 
  MeshReflectorMaterial, 
  Environment, 
  Lightformer,
  Html,
  PresentationControls,
  ContactShadows,
  Stars
} from '@react-three/drei';
import * as THREE from 'three';

const Scene = ({ currentSection }) => {
  const meshRef = useRef();
  const groupRef = useRef();
  const cubeRefs = useRef([]);
  const { camera } = useThree();
  
  // Create cubes with initial positions
  const cubes = useMemo(() => [
    { color: '#3b82f6', size: 0.5 },
    { color: '#8b5cf6', size: 0.4 },
    { color: '#ec4899', size: 0.3 },
    { color: '#10b981', size: 0.6 },
    { color: '#f59e0b', size: 0.45 },
    { color: '#ef4444', size: 0.35 },
  ], []);

  // Tech icons data
  const techIcons = useMemo(() => [
    { letter: 'R', color: '#61DAFB' },
    { letter: 'N', color: '#68A063' },
    { letter: 'M', color: '#47A248' },
    { letter: 'E', color: '#000000' },
    { letter: 'J', color: '#F7DF1E' },
    { letter: 'T', color: '#3178C6' },
  ], []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Main mesh rotation
    if (meshRef.current) {
      meshRef.current.rotation.x = time * 0.2;
      meshRef.current.rotation.y = time * 0.3;
      meshRef.current.rotation.z = time * 0.1;
    }

    // Animate cubes
    cubeRefs.current.forEach((cube, i) => {
      if (cube) {
        cube.rotation.x = time * 0.5;
        cube.rotation.y = time * 0.3;
        const offset = i * 0.5;
        cube.position.y = Math.sin(time * 0.5 + offset) * 0.3;
        cube.position.x = Math.cos(time * 0.3 + offset) * 2;
      }
    });

    // Group floating animation
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(time * 0.5) * 0.2;
    }

    // Smooth camera transitions
    const cameraPositions = {
      home: new THREE.Vector3(0, 0, 8),
      about: new THREE.Vector3(4, 2, 10),
      experience: new THREE.Vector3(-4, 1, 9),
      skills: new THREE.Vector3(0, -1, 7),
      projects: new THREE.Vector3(2, -2, 8),
      contact: new THREE.Vector3(-2, 0, 6),
    };

    const targetPosition = cameraPositions[currentSection] || cameraPositions.home;
    camera.position.lerp(targetPosition, 0.05);
    
    const lookAtPositions = {
      home: new THREE.Vector3(0, 0, 0),
      about: new THREE.Vector3(2, 1, 0),
      experience: new THREE.Vector3(-2, 0, 0),
      skills: new THREE.Vector3(0, -1, 0),
      projects: new THREE.Vector3(1, -1, 0),
      contact: new THREE.Vector3(-1, 0, 0),
    };

    const targetLookAt = lookAtPositions[currentSection] || lookAtPositions.home;
    camera.lookAt(targetLookAt);
  });

  // Create gradient texture
  const gradientTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const context = canvas.getContext('2d');
    
    const gradient = context.createRadialGradient(128, 128, 0, 128, 128, 128);
    gradient.addColorStop(0, '#3b82f6');
    gradient.addColorStop(0.5, '#8b5cf6');
    gradient.addColorStop(1, '#ec4899');
    
    context.fillStyle = gradient;
    context.fillRect(0, 0, 256, 256);
    
    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }, []);

  return (
    <>
      {/* Background Stars */}
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      {/* Environment & Lighting */}
      <Environment preset="studio" />
      
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#3b82f6" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
      
      <group ref={groupRef} position={[0, 0, 0]}>
        <PresentationControls
          global
          rotation={[0, 0, 0]}
          polar={[-Math.PI / 4, Math.PI / 4]}
          azimuth={[-Math.PI / 4, Math.PI / 4]}
          config={{ mass: 2, tension: 400 }}
          snap={{ mass: 4, tension: 400 }}
        >
          {/* Main Octahedron */}
          <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <mesh ref={meshRef}>
              <octahedronGeometry args={[1.2, 1]} />
              <meshPhysicalMaterial
                map={gradientTexture}
                metalness={0.9}
                roughness={0.1}
                clearcoat={1}
                clearcoatRoughness={0}
                emissive="#3b82f6"
                emissiveIntensity={0.2}
                transparent
                opacity={0.9}
              />
            </mesh>
          </Float>

          {/* Floating Cubes with manual animation */}
          {cubes.map((cube, index) => (
            <mesh
              key={index}
              ref={el => cubeRefs.current[index] = el}
              position={[
                Math.cos(index) * 3,
                Math.sin(index) * 2,
                -index - 2
              ]}
            >
              <boxGeometry args={[cube.size, cube.size, cube.size]} />
              <meshStandardMaterial
                color={cube.color}
                metalness={0.8}
                roughness={0.2}
                transparent
                opacity={0.7}
              />
            </mesh>
          ))}

          {/* Tech Icons */}
          {techIcons.map((icon, index) => (
            <Float
              key={index}
              speed={1 + index * 0.2}
              rotationIntensity={0.5}
              floatIntensity={1.5}
            >
              <Text
                position={[
                  Math.sin(index) * 4,
                  Math.cos(index) * 3,
                  -index - 4
                ]}
                fontSize={0.4}
                color={icon.color}
                anchorX="center"
                anchorY="middle"
              >
                {icon.letter}
                <meshStandardMaterial
                  emissive={icon.color}
                  emissiveIntensity={0.5}
                  color={icon.color}
                />
              </Text>
            </Float>
          ))}

          {/* Wireframe Sphere */}
          <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
            <mesh position={[0, -1, 0]}>
              <sphereGeometry args={[2, 32, 32]} />
              <meshBasicMaterial
                color="#3b82f6"
                wireframe
                transparent
                opacity={0.2}
              />
            </mesh>
          </Float>

          {/* 3D Name Text */}
          <Text
            position={[0, 3, -2]}
            fontSize={0.5}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
          >
            PRATEEK MISHRA
            <meshStandardMaterial
              emissive="#3b82f6"
              emissiveIntensity={0.3}
              color="#ffffff"
            />
          </Text>

          {/* 3D Title Text */}
          <Text
            position={[0, 2.2, -2]}
            fontSize={0.3}
            color="#a1a1aa"
            anchorX="center"
            anchorY="middle"
          >
            FULL STACK DEVELOPER
          </Text>

          {/* MERN Stack Text */}
          <Text
            position={[0, -2, -1]}
            fontSize={0.4}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
            rotation={[0, Math.PI / 4, 0]}
          >
            MERN STACK
            <meshStandardMaterial
              emissive="#10b981"
              emissiveIntensity={0.2}
              color="#ffffff"
            />
          </Text>
        </PresentationControls>
      </group>

      {/* Particles */}
      <points>
        <sphereGeometry args={[5, 64, 64]} />
        <pointsMaterial
          size={0.02}
          color="#3b82f6"
          transparent
          opacity={0.1}
          sizeAttenuation
        />
      </points>

      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -4, 0]}>
        <planeGeometry args={[50, 50]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={1024}
          mixBlur={1}
          mixStrength={80}
          roughness={0.6}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#050505"
          metalness={0.8}
          mirror={1}
        />
      </mesh>

      <ContactShadows
        position={[0, -3.9, 0]}
        opacity={0.4}
        scale={20}
        blur={2}
        far={10}
      />
    </>
  );
};

export default Scene;