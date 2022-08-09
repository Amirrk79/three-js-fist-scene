import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import gsap from 'gsap';
import { useRef } from 'react'
import { angleToRadians } from '../../../helper/angle';

export function Car(props) {
  const carRef = useRef();
  const { nodes, materials } = useGLTF('/ford-transformed.glb')

  useFrame((state) => {
    if(carRef.current) {
      const {x,y} = state.mouse;
      gsap.to(carRef.current.rotation, {
        y: (-x * angleToRadians(45)),
        duration: 0
      })
    }
  })

  return (
    <group ref={carRef} castShadow receiveShadow {...props} dispose={null}>
      <group  castShadow receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
        <mesh castShadow receiveShadow geometry={nodes.Object_2.geometry} material={materials.BODY_COLOR_Dodge_B_Series_Custom} />
        <mesh castShadow receiveShadow geometry={nodes.Object_3.geometry} material={materials.black_aluminium} />
        <mesh castShadow receiveShadow geometry={nodes.Object_4.geometry} material={materials.black_chrome} />
        <mesh castShadow receiveShadow geometry={nodes.Object_5.geometry} material={materials.black_mate} />
        <mesh castShadow receiveShadow geometry={nodes.Object_6.geometry} material={materials.black_chrome} />
        <mesh castShadow receiveShadow geometry={nodes.Object_7.geometry} material={materials.bottom} />
        <mesh castShadow receiveShadow geometry={nodes.Object_8.geometry} material={materials.carbon} />
        <mesh castShadow receiveShadow geometry={nodes.Object_9.geometry} material={materials.dodge_rim_sticker_MATE} />
        <mesh castShadow receiveShadow geometry={nodes.Object_10.geometry} material={materials.gray_chrome} />
        <mesh castShadow receiveShadow geometry={nodes.Object_11.geometry} material={materials.plate} />
        <mesh castShadow receiveShadow geometry={nodes.Object_12.geometry} material={materials.texture_1_INT_EMB} />
        <mesh castShadow receiveShadow geometry={nodes.Object_13.geometry} material={materials.texture_1_INT_MATE} />
        <mesh castShadow receiveShadow geometry={nodes.Object_14.geometry} material={materials.texture_1_INT_EMB} />
        <mesh castShadow receiveShadow geometry={nodes.Object_15.geometry} material={materials.texture_1_INT_EMB} />
        <mesh castShadow receiveShadow geometry={nodes.Object_16.geometry} material={materials.texture_1_INT_MATE} />
        <mesh castShadow receiveShadow geometry={nodes.Object_17.geometry} material={materials.texture_1_INT_MATE} />
        <mesh castShadow receiveShadow geometry={nodes.Object_18.geometry} material={materials.texture_2_CHROME} />
        <mesh castShadow receiveShadow geometry={nodes.Object_19.geometry} material={materials.texture_2_INT_UP} />
        <mesh castShadow receiveShadow geometry={nodes.Object_20.geometry} material={materials.texture_2_MATE} />
        <mesh castShadow receiveShadow geometry={nodes.Object_21.geometry} material={materials.texture_2_INT_UP} />
        <mesh castShadow receiveShadow geometry={nodes.Object_22.geometry} material={materials.texture_2_INT_UP} />
        <mesh castShadow receiveShadow geometry={nodes.Object_23.geometry} material={materials.texture_2_INT_UP} />
        <mesh castShadow receiveShadow geometry={nodes.Object_24.geometry} material={materials.texture_2_INT_UP} />
        <mesh castShadow receiveShadow geometry={nodes.Object_25.geometry} material={materials.texture_2_suports} />
        <mesh castShadow receiveShadow geometry={nodes.Object_26.geometry} material={materials.texture_3_brakelights} />
        <mesh castShadow receiveShadow geometry={nodes.Object_27.geometry} material={materials.texture_3_brakelights} />
        <mesh castShadow receiveShadow geometry={nodes.Object_28.geometry} material={materials.texture_3_brakelights} />
        <mesh castShadow receiveShadow geometry={nodes.Object_29.geometry} material={materials.texture_4_RIM_chrome} />
        <mesh castShadow receiveShadow geometry={nodes.Object_30.geometry} material={materials.texture_4_foglights} />
        <mesh castShadow receiveShadow geometry={nodes.Object_31.geometry} material={materials.tire_left_L} />
        <mesh castShadow receiveShadow geometry={nodes.Object_32.geometry} material={materials.tire_left_RIM_EMBLEM_L} />
        <mesh castShadow receiveShadow geometry={nodes.Object_33.geometry} material={materials.tire_protector} />
        <mesh castShadow receiveShadow geometry={nodes.Object_34.geometry} material={materials.tire_right_COLOR_CIRCLE} />
        <mesh castShadow receiveShadow geometry={nodes.Object_35.geometry} material={materials.tire_right_R} />
        <mesh castShadow receiveShadow geometry={nodes.Object_36.geometry} material={materials.tire_right_R} />
        <mesh castShadow receiveShadow geometry={nodes.Object_37.geometry} material={materials.tire_right_RIM_CENTRE} />
        <mesh castShadow receiveShadow geometry={nodes.Object_38.geometry} material={materials.tire_right_RIM_EMBLEM_R} />
        <mesh castShadow receiveShadow geometry={nodes.Object_39.geometry} material={materials.window_glass} />
        <mesh castShadow receiveShadow geometry={nodes.Object_40.geometry} material={materials.wood} />
      </group>
    </group>
  )
}

useGLTF.preload('/ford-transformed.glb')
