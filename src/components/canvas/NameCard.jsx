import React, { Suspense, useEffect, useState } from "react";

// All animated goes inside canvas
import { Canvas } from "@react-three/fiber";

// Helpers to draw GLTF models
// Responsible for motion control
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const NameCard = ({isMobile}) => {
  const namecard = useGLTF("./desktop_pc/Namecard_.glb");
  return (
    <mesh>
      <hemisphereLight intensity={5.5}  groundColor="black"/>

      <pointLight intensity={1}/>
      <spotLight  position={[-20, 50, 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024}/>
      
      
      <primitive 
      object={namecard.scene}
      // scale={isMobile? 0.7: 0.75}
      scale={isMobile? 0.7: 0.75}
      // position = {isMobile? [0, -3, -2.2]:[0, -3.25, -1.5]}
      position = {isMobile? [0, 0, 0]:[0, 0, 0]}
      rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const NameCardCanvas = () => {
  // Setting up mobile UI
  const [ isMobile, setIsMobile] = useState(false); 

  useEffect(()=> {
  const mediaQuery = window.matchMedia('(max-width:500)');
  setIsMobile(mediaQuery.matches);

  const handleMediaQueryChange = (event) => {
    setIsMobile(event.matches);
  }

  mediaQuery.addEventListener('change', handleMediaQueryChange);


  // In useEffect close the EventListneder
  return () => {
    mediaQuery.removeEventListener('change', handleMediaQueryChange);
  }
},[])

  return (
    <>

    <Canvas 
    frameloop="demand"
    shadows 
    // camera={{position: [20, 3, 5], fov: 25}}
    camera={
      {position: [10, 3, -30], fov: isMobile? 5: 20}}
    gl = {{preserveDrawingBuffer: true}}
    >
      
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls 
        enableZoom={false}
        // Rotate only certain way
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI/ 2}
        />
        <NameCard isMobile={isMobile}/>
        </Suspense>
      <Preload all />
      </Canvas>
      </>
  )
}




export default NameCardCanvas;
