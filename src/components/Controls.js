import React, { useRef, useEffect } from 'react';
import * as Three from 'three';
import { useFrame, useThree, extend } from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

extend({ OrbitControls });

export default ({ autoRotate = false, delayRotation, ...props }) => {
    const elementReference = useRef();
    const { camera, gl } = useThree();

    useFrame(() => {
        if (delayRotation) {
            return;
        }

        // We need to update frames when the camera is rotating without user input
        elementReference.current.update();
    });

    return (
        <orbitControls
            enabled
            enableDamping
            enablePan={true}
            keyPanSpeed={80}
            ref={elementReference}
            args={[camera, gl.domElement]}
            rotateSpeed={0.5}
            dampingFactor={1}
            autoRotate={autoRotate}
            target={[3, 0, 0]}
            keys={{
                LEFT: 37, //left arrow
                RIGHT: 39 // right arrow
            }}
            {...props}
        />
    );
};
