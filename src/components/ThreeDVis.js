/* eslint-disable react/style-prop-object */
import "./ThreeDVis.css"
import { Canvas } from '@react-three/fiber'
import { Suspense, useRef } from 'react'
import { PresentationControls } from '@react-three/drei'
import { PencilRocket } from "./PencilRocket"

export const ThreeDVis = (props) => {

    const modelRef = useRef();

    return (
        <Canvas camera={{ fov: 25, position: [-3, 6, 10] }} >
           
          <ambientLight intensity={0.5} />
          <directionalLight color="white" position={[0, 1, .5]} />

          <PresentationControls global zoom={0.8} rotation={[0, -Math.PI / 4, 0]} polar={[0, Math.PI / 10]} azimuth={[-Math.PI / 4, Math.PI / 4]}>
            <group position-y={-0.75} dispose={null}></group>
            <Suspense fallback={null}>
                <PencilRocket 
                    scale={[.8, .8, .8]} 
                    position={[0, -2, 0]}
                    topColor={props.topColor} 
                    middleColor={props.middleColor} 
                    bottomColor={props.bottomColor} 
                    legColor={props.legColor} 
                />
            </Suspense>
          </PresentationControls>

        </Canvas>
    )
}