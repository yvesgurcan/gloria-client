import React, { useState, useEffect, useRef } from 'react';
import { Canvas } from 'react-three-fiber';
import { Vector3 } from 'three';

import GlobalStyles from '../components/GlobalStyles';
import Controls from '../components/Controls';
import Globe from '../components/Globe';
import Pin from '../components/GlobePin';

export default () => {
    const [delayRotation, setDelayRotation] = useState(0);
    const elementReference = useRef();
    const delayRotationRef = useRef(delayRotation);

    // Set up event listeners for clicks
    useEffect(() => {
        if (!elementReference.current) {
            return;
        }

        elementReference.current.addEventListener('click', delayAutoRotate);
        setInterval(() => decreaseAutoRotate(delayRotation), 1000);
        elementReference.current.addEventListener(
            'touchstart',
            delayAutoRotate
        );
        setInterval(() => decreaseAutoRotate(delayRotation), 1000);

        return () => {
            elementReference.current.removeEventListener(
                'click',
                delayAutoRotate
            );
            elementReference.current.removeEventListener(
                'touchstart',
                delayAutoRotate
            );
        };
    }, [elementReference]);

    // Stop rotation for 3 seconds
    function delayAutoRotate() {
        const updatedDelayRotation = 3000;
        delayRotationRef.current = updatedDelayRotation;
        setDelayRotation(updatedDelayRotation);
    }

    // Decrease timer to reset rotation by 1 second
    function decreaseAutoRotate(delayRotation) {
        const updatedDelayRotation = Math.max(
            0,
            delayRotationRef.current - 1000
        );
        setDelayRotation(updatedDelayRotation);
        delayRotationRef.current = updatedDelayRotation;
    }

    return (
        <span ref={elementReference}>
            <GlobalStyles />
            <Canvas
                shadowMap
                camera={{
                    position: new Vector3(0, 6, 9)
                }}
            >
                <ambientLight intensity={0.9} />
                <directionalLight
                    color="rgb(200, 200, 100)"
                    intensity={0.3}
                    position={[-2, 9, 0]}
                />
                <directionalLight
                    color="rgb(200, 200, 100)"
                    intensity={0.2}
                    position={[7, -3, -5]}
                />
                <directionalLight
                    color="rgb(200, 200, 100)"
                    intensity={0.1}
                    position={[10, 6, 5]}
                />
                <Globe />
                <Pin
                    to="/menu1"
                    text="HBO"
                    color="red"
                    x={3}
                    y={3}
                    z={3}
                    rotation={[-Math.PI / 3, Math.PI / 4, -Math.PI / 4]}
                    blockProps={{
                        z: 0.8,
                        depth: 1,
                        length: 0.6,
                        width: 0.01
                    }}
                    opacity={0.5}
                />
                <Pin
                    text="Wonder Woman"
                    color="blue"
                    x={-4}
                    y={3}
                    z={2}
                    rotation={[-Math.PI / 3, -Math.PI / 3.5, Math.PI / 5]}
                    blockProps={{
                        x: 0,
                        y: 0,
                        z: 0.8,
                        depth: 2.6,
                        length: 0.6,
                        width: 0.01
                    }}
                    opacity={0.5}
                />
                <Pin
                    to="/menu2"
                    text="Friends"
                    color="yellow"
                    y={5}
                    rotation={[-Math.PI / 2, 0, 0]}
                    blockProps={{
                        x: 0,
                        y: 0,
                        z: 0.8,
                        depth: 1.5,
                        length: 0.6,
                        width: 0.01
                    }}
                    opacity={0.5}
                />
                <Controls autoRotate delayRotation={delayRotation} />
            </Canvas>
        </span>
    );
};
