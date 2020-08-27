import React, { useRef, useEffect } from 'react';
import * as Three from 'three';
import { useFrame, useThree, extend } from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { DeviceOrientationControls } from 'three/examples/jsm/controls/DeviceOrientationControls';

extend({ OrbitControls, DeviceOrientationControls });

export default ({
    autoRotate = false,
    delayRotation,
    target = [3, 0.08, 0],
    ...props
}) => {
    const elementReference = useRef();
    const { camera, gl } = useThree();

    window.addEventListener(
        'deviceorientation',
        event => console.log('deviceorientation changed', event),
        true
    );

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
            enablePan
            keyPanSpeed={40}
            ref={elementReference}
            args={[camera, gl.domElement]}
            rotateSpeed={0.5}
            dampingFactor={1}
            autoRotate={autoRotate}
            target={target}
            {...props}
        />
    );
};
