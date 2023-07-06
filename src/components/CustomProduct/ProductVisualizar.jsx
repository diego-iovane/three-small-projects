import { useState } from 'react'
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { CanvasContainer, Overlay, OverlayTracker, Icon, IconContainer, RotatedIcon } from "./Elements"
import { Suspense } from "react"
import Product from "./Product"
import Lights from "./Lights"
import { LuRotateCw } from 'react-icons/lu'

const ProductVisualizar = ({ colors }) => {

  const [mask, setMask] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

  const handleHoverStart = () => {
    setMask(true)
  }

  const handleHoverEnd = () => {
    setMask(false)
    setIsClicked(false)
  }

  const handleClick = () => {
    setIsClicked(true)
    setMask(false)
  }

  return (
    <CanvasContainer>
      <Canvas id="three-custom-product-canvas" camera={{ zoom: 3.5, near: 1, far: 1000 }}>
        <Lights />
        <OrbitControls makeDefault />
        <Overlay fullscreen show={mask}>
          <OverlayTracker
            onHoverStart={handleHoverStart}
            onHoverEnd={handleHoverEnd}
            onMouseDown={handleClick}
          >
            <IconContainer show={mask}>
              <RotatedIcon>
                <Icon><LuRotateCw stroke="#ffffff"/></Icon>
              </RotatedIcon>
            </IconContainer>
          </OverlayTracker>
        </Overlay>
        <Suspense fallback={null}>
          <group
            position={[0, -2.9, 0]}
          >
            <Product colors={colors} />
          </group>
        </Suspense>
      </Canvas>
    </CanvasContainer>
  )
}

export default ProductVisualizar