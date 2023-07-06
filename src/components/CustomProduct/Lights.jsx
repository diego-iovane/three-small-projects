const Lights = () => {
    return (
        <>
            <directionalLight
                position={[0, 2, 1]}
                intensity={6}
            />
            <directionalLight
                position={[0, 1, -4]}
                intensity={4}
            />
            <directionalLight
                position={[0, -1, 0]}
                intensity={3}
            />
            <directionalLight
                position={[0, -1, 0]}
                intensity={3}
            />
            <directionalLight
                position={[-1, -1, 0]}
                intensity={.3}
            />
        </>
    )
}

export default Lights