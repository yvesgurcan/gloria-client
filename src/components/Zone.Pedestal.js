import React from 'react';

export default ({
    position = [0, 0, 0],
    dimension = [0.3, 0.3, 0.25, 100],
    props
}) => {
    return (
        <mesh position={position}>
            <cylinderGeometry attach="geometry" args={dimension} />
            <meshPhongMaterial
                attach="material"
                color="rgb(40, 40, 40)"
                roughness={0.5}
                {...props}
            />
        </mesh>
    );
};
