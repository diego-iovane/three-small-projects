import styled, { keyframes } from 'styled-components'
import { Html } from '@react-three/drei'
import { motion } from 'framer-motion'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: grid;
    place-items: center;
`

export const Inner = styled.div`
    box-shadow: -1px 10px 25px -14px rgba(0,0,0,0.75);
    width: 80%;
    max-width: 25rem;
    padding: 2rem;
    border-radius: 12px;

    @media all and (max-width: 400px) {
        box-shadow: none;
        width: 95%;
        padding: .5rem;
    }
`

export const CanvasContainer = styled.div`
    width: 100%;
    height: 20rem;
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid "ededed";

    @media all and (max-width: 400px) {
        width: 80%;
        height: 15rem;
        margin: 0 auto 2rem auto;
    }
`

export const OverlayTracker = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`

export const Overlay = styled(Html)`
    background-color: ${({show}) => show ? "rgba(0, 0, 0, .1)" : ""};
    transition: background-color .2s;
    display: grid;
    align-items: center;
`

export const IconContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: ${({show}) => show ? 1 : 0};
    pointer-events: none;
    transition: opacity .2s;
`

export const RotatedIcon = styled.div`
    transform: rotateX(60deg); 
    transform-origin: center;
`

const zRotateAnimation = keyframes`
    from { transform: rotateZ(0); }
    to { transform: rotateZ(360deg); }
`

export const Icon = styled.div`
    font-size: 2.3rem;
    animation: ${zRotateAnimation} 2s ease-in-out infinite;
`

export const Editor = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const CustomEl = styled.div``

export const Label = styled.p`
    font-size: .9rem;
    font-weight: light;
    border-bottom: 1px solid #ededed;
    padding-bottom: .5rem;
`

export const ColorsContainer = styled.div`
    display: flex;
    gap: 1rem;
`

export const ColorButton = styled.button`
    background-color: ${({color}) => color ? color : "ffffff"};
    width: 2rem;
    height: 2rem;
    border-radius: 4px;
`