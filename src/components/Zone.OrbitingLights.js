import React, { useState } from 'react';
import { useFrame } from 'react-three-fiber';

const DELTA = 0.005;
const HEIGHT = 1.5;
const DISTANCE = 4;

export default () => {
    const [angle, setAngle] = useState(0);

    useFrame(() => {
        setAngle(angle => (angle += DELTA));
    });

    return (
        <>
            <pointLight
                color="white"
                intensity={1}
                position={[
                    DISTANCE * Math.sin(angle),
                    HEIGHT,
                    DISTANCE * Math.cos(angle)
                ]}
            />
            <pointLight
                color="white"
                intensity={1}
                position={[
                    DISTANCE * Math.sin(angle + Math.PI),
                    HEIGHT,
                    DISTANCE * Math.cos(angle + Math.PI)
                ]}
            />
        </>
    );
};
