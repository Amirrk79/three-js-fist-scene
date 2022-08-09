import * as THREE from 'three';
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { angleToRadians } from '../../helper/angle';
import { useFrame } from '@react-three/fiber';
import {useEffect, useRef} from 'react';
import { Car } from '../Models/Car';
import gsap from 'gsap';


function FirstScene() {

  const orbitControlRef = useRef(null)
  const ballRef = useRef(null)


useFrame((state) => {
if(orbitControlRef.current) {
  const {x , y} = state.mouse;
  orbitControlRef.current.setAzimuthalAngle(-x * angleToRadians(45));
  orbitControlRef.current.setPolarAngle((y + 1) * angleToRadians(60))
  orbitControlRef.current.update()
}
  })




  useEffect(() => {
    if(ballRef.current) {
      const timeline = gsap.timeline();

timeline.to(ballRef.current.position, {
        x:3,
        duration:3
      })

      timeline.to(ballRef.current.position, {
        y: 0.3,
        duration: 1,
        ease: 'bounce.out'
      }, '<')
      
      timeline.play();
    }
  }, [])


return <>
<PerspectiveCamera makeDefault position={[0, 1, 6]} />
    <mesh position={[-2, 10, 0]} castShadow ref={ballRef}>
    <sphereGeometry args={[0.3, 32, 32]}/>
    <meshStandardMaterial metalness={0.5} roughness={0.3} color='#fff' />
    </mesh>
    <mesh rotation={[-(angleToRadians(90)), 0, 0]} receiveShadow>
    <planeGeometry args={[100,100]} />
    <meshPhongMaterial color='#404040' />
    </mesh>
    <OrbitControls ref={orbitControlRef} minPolarAngle={angleToRadians(70)} maxPolarAngle={angleToRadians(85)} />
    <ambientLight args={['#fff', 1]} />
            <spotLight args={["#ffffff", 3, 7, angleToRadians(45), 0.4]} position={[-3, 1, -2]} castShadow />

    <Car scale={0.5} position={[-2, 0, 1]} />
    <spotLight args={['#fff', 2]} position={[0, 3 , 0]} castShadow />

   

   <Environment background>
    <mesh>
    <sphereGeometry args={[30, 100, 100]} />
    <meshBasicMaterial color='#404040' side={THREE.BackSide} />
    </mesh>
    </Environment> 
    </>
}

export default FirstScene
