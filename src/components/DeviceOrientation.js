import React, { useRef, useEffect } from 'react';
import { extend, useThree, useFrame } from 'react-three-fiber';
import { DeviceOrientationControls } from 'three/examples/jsm/controls/DeviceOrientationControls';

extend({ DeviceOrientationControls });

export default props => {
    const controlsRef = useRef();
    const { camera } = useThree();
    useFrame(({ gl, scene }) => {
        controlsRef.current.update();
        gl.render(scene, camera);
    });
    // props.active: true when the start button is pressed
    useEffect(() => {
        controlsRef.current.connect();
    });
    return <deviceOrientationControls ref={controlsRef} args={[camera]} />;
};
