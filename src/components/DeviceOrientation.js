import React, { useRef, useEffect } from 'react';
import { extend, useThree, useFrame } from 'react-three-fiber';
import { DeviceOrientationControls } from 'three/examples/jsm/controls/DeviceOrientationControls';

extend({ DeviceOrientationControls });

export default () => {
    const controlsReference = useRef();
    const { camera } = useThree();

    useEffect(() => {
        controlsReference.current.connect();

        return () => {
            controlsReference.current.disconnect();
        };
    }, []);

    useFrame(({ gl, scene }) => {
        controlsReference.current.update();
        gl.render(scene, camera);
    });

    return (
        <deviceOrientationControls ref={controlsReference} args={[camera]} />
    );
};
