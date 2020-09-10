import React from 'react';

export default () => (
    <>
        <ambientLight intensity={0.85} />
        <directionalLight color="white" intensity={0.4} position={[-2, 9, 0]} />
        <directionalLight
            color="white"
            intensity={0.4}
            position={[7, -3, -5]}
        />
        <directionalLight color="white" intensity={0.4} position={[10, 6, 5]} />
    </>
);
