import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Product(props) {

  const { nodes, materials } = useGLTF('./assets/models/hoodie.glb')
  const model = useRef()

  useFrame((state, delta) => model.current.rotation.y += 0.008)

  return (
    <group {...props} dispose={null} ref={model}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.002}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.Hoodie_Material3758_0.geometry} material={materials.Material3758} />
          <mesh geometry={nodes.Hoodie_Material3748_0.geometry} material={materials.Material3748} material-color={props.colors.body} />
          <mesh geometry={nodes.Hoodie_Material3754_0.geometry} material={materials.Material3754} material-color={props.colors.cuff} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./assets/models/hoodie.glb')
