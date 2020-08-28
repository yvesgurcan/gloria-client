import React, { useRef, useEffect } from 'react';
import { extend, useThree, useFrame } from 'react-three-fiber';
import { DeviceOrientationControls } from 'three/examples/jsm/controls/DeviceOrientationControls';
import * as Three from 'three';

extend({ DeviceOrientationControls });

export default ({ target = [3, 0.08, 0] }) => {
    const controlsReference = useRef();
    const { camera } = useThree();

    useEffect(() => {
        controlsReference.current.connect();
    }, []);

    useFrame(({ gl, scene }) => {
        controlsReference.current.update();
        gl.render(scene, camera);
    });

    return (
        <deviceOrientationControls ref={controlsReference} args={[camera]} />
    );
};
