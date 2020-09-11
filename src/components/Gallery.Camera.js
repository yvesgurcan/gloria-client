import React, { useEffect, useRef } from 'react';
import { useFrame, useThree } from 'react-three-fiber';

export default () => {
    const cameraReference = useRef();
    const { setDefaultCamera } = useThree();

    // Make the camera known to the system
    useEffect(() => {
        setDefaultCamera(cameraReference.current);
    }, []);

    // Update it every frame
    useFrame(() => {
        cameraReference.current.updateMatrixWorld();
    });

    return <perspectiveCamera fov={60} ref={cameraReference} />;
};
