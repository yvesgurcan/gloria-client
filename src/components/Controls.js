import React, { useRef, useEffect, useState } from 'react';
import { useFrame, useThree, extend } from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { DeviceOrientationControls } from 'three/examples/jsm/controls/DeviceOrientationControls.js';

extend({ OrbitControls, DeviceOrientationControls });

const simulateDeviceOrientation = (orientation, onDeviceOrientation) => {
    setInterval(
        () =>
            onDeviceOrientation({
                alpha: orientation[0], // up and down
                beta: orientation[1], // forward and backward
                gamma: orientation[2] // left and right
            }),
        50
    );
};

export default ({
    autoRotate = false,
    delayRotation,
    target: targetProp = [3, 0.08, 0],
    ...props
}) => {
    const [manualControls, setManualControls] = useState(true);
    const [target, setTarget] = useState(targetProp);
    const targetRef = useRef(targetProp);
    const orbitControlsReference = useRef();
    const { camera, gl } = useThree();

    const onDeviceOrientation = event => {
        // deactivate orbit controls
        if (manualControls) {
            // setManualControls(false);
        }

        const { alpha, beta, gamma } = event;

        var rotateDegrees = alpha;
        // gamma: left to right
        var leftToRight = gamma;
        // beta: front back motion
        var frontToBack = beta;

        const newTarget = [
            Math.max(-15, Math.min(15, targetRef.current[0] - alpha / 360)), // up and down
            targetRef.current[1], //targetRef.current[1] - beta / 180, // forward and backward
            targetRef.current[2] //targetRef.current[2] - gamma / 90 // left and right
        ];
        console.log('target', target);
        console.log('newTarget', newTarget);
        console.log({ alpha, beta, gamma });
        console.log('---');

        targetRef.current = newTarget;
        setTarget(newTarget);
    };

    /*
    useEffect(() => {
        simulateDeviceOrientation(
            [
                // Math.random() * 360,
                50, // Math.random() * 180 - 180,
                Math.random() * 90 - 90
            ],
            onDeviceOrientation
        );

        window.addEventListener(
            'deviceorientation',
            onDeviceOrientation,
            false
        );

        return () => {
            window.removeEventListener(
                'deviceorientation',
                onDeviceOrientation
            );
        };
    }, []);
    */

    const controls = new DeviceOrientationControls(camera);

    useFrame(() => {
        controls.update();

        if (delayRotation) {
            return;
        }

        // We need to update frames when the camera is rotating without user input
        orbitControlsReference.current.update();
    });

    return (
        <orbitControls
            enabled={manualControls}
            enableDamping
            enablePan
            keyPanSpeed={40}
            ref={orbitControlsReference}
            args={[camera, gl.domElement]}
            rotateSpeed={0.5}
            dampingFactor={1}
            autoRotate={autoRotate}
            target={target}
            {...props}
        />
    );
};
