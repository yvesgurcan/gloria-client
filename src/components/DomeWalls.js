import React from 'react';
import { ThreeBSP } from 'three';

const DomeWalls = () => {
    return (
        <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry attach="geometry" args={[30, 30, 80, 20, 4]} />
            <meshLambertMaterial
                attach="material"
                color="rgb(0, 168, 224)"
                roughness={1}
                metalness={0.3}
            />
        </mesh>
    );
};

export default new ThreeBSP(DomeWalls);
