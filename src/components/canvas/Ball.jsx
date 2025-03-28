import React, { Suspense } from "react";  // Required from react
import { Canvas } from '@react-three/fiber'  
import { Decal , Float, OrbitControls, Preload, useTexture } from '@react-three/drei'

import CanvasLoader from "../Loader";


const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
   return (
    <Float speed={.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={12.5} />
      <directionalLight position={[0 ,0 ,0.05]}/>
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1,1]}/>
        <meshStandardMaterial 
        color='#fff8eb'
        polygonOffset
        polygonOffsetFactor={-5}
        floatShading
        />
        <Decal position={[0,0,1]} rotation={[2 * Math.PI, 0, 6.25]} map={decal} floatShading></Decal>
      </mesh>
       </Float>
  )
};

// Similar to Computer Canvas
const BallCanvas = ({icon}) => {
return (
    <Canvas 
    frameloop="demand"
    gl = {{preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls 
        enableZoom={false}/>
        // Rotate only certain way
        
        <Ball imgUrl={icon}/>
      </Suspense>
      <Preload all />
      </Canvas>
  )
}

export default BallCanvas;
