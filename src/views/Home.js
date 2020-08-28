import React, { useEffect, useState, useRef } from 'react';
import { Canvas, useFrame, useThree } from 'react-three-fiber';

import GlobalStyles from '../components/GlobalStyles';
import Controls from '../components/Controls';
import ControlsLimited from '../components/ControlsLimited';
import DeviceOrientation from '../components/DeviceOrientation';

import DomeWalls from '../components/DomeWalls';
import Pedestal from '../components/Pedestal';
import Triforce from '../components/Triforce';
import ScreenSupport from '../components/ScreenSupport';
import Screen from '../components/Screen';
import DomeFloor from '../components/DomeFloor';

function Camera(props) {
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
    return <perspectiveCamera ref={cameraReference} {...props} />;
}

function Camera2(props) {
    const cameraReference = useRef();
    const { setDefaultCamera } = useThree();
    // Make the camera known to the system
    useEffect(() => {
        setDefaultCamera(cameraReference.current);
    }, []);
    // Update it every frame
    useFrame(() => cameraReference.current.updateMatrixWorld());
    return <perspectiveCamera ref={cameraReference} {...props} />;
}

export default () => {
    const [orientationControls, setOrientationControls] = useState(false);

    const onDeviceOrientation = event => {
        if (!orientationControls) {
            setOrientationControls(true);
        }
    };

    useEffect(() => {
        async function askForDeviceOrientationPermission() {
            console.log(navigator);
            /*
            console.info('Checking some browser permissions...');
            const accelerometerPermissionStatus = await navigator.permissions.query(
                {
                    name: 'accelerometer'
                }
            );
            const magnetometerPermissionStatus = await navigator.permissions.query(
                {
                    name: 'magnetometer'
                }
            );
            const gyroscopePermissionStatus = await navigator.permissions.query(
                {
                    name: 'gyroscope'
                }
            );
            console.info({ accelerometerPermissionStatus });
            console.info({ magnetometerPermissionStatus });
            console.info({ gyroscopePermissionStatus });
            */

            console.info('Checking device orientation permission...');
            if (typeof DeviceOrientation === 'undefined') {
                console.error(
                    'DeviceMotionEvent is undefined. Is this a secure connection over HTTPS?'
                );
            } else if (
                DeviceOrientation &&
                typeof DeviceOrientation.requestPermission === 'function'
            ) {
                const permissionState = await DeviceOrientation.requestPermission();

                if (permissionState === 'granted') {
                    console.info('Device orientation permission granted.');
                    return true;
                } else {
                    console.error('Device orientation permission denied.');
                }
            } else {
                console.info(
                    'DeviceOrientation.requestPermission is not a function. Can not ask for permission to use device orientation.'
                );
                return true;
            }

            return false;
        }

        askForDeviceOrientationPermission().then(granted => {
            if (granted) {
                console.info('Setting up device orientation listener...');
                window.addEventListener(
                    'deviceorientation',
                    onDeviceOrientation,
                    false
                );
            }
        });

        return () => {
            window.removeEventListener(
                'deviceorientation',
                onDeviceOrientation
            );
        };
    }, []);

    function isLocalHost() {
        return location.hostname === 'localhost';
    }

    return (
        <span>
            <GlobalStyles />
            <Canvas style={{ background: 'rgb(140, 140, 255)' }}>
                <Camera position={[0, 0, 0]} />
                {orientationControls ? null : isLocalHost() ? (
                    <Controls />
                ) : (
                    <ControlsLimited />
                )}
                {orientationControls && <DeviceOrientation />}
                <group position={[4, 0, 0]} rotation={[0, -Math.PI, 0]}>
                    <ambientLight intensity={0.85} />
                    <spotLight
                        color="white"
                        intensity={0.5}
                        position={[-20, 20, -5]}
                    />
                    <directionalLight
                        color="white"
                        intensity={0.1}
                        position={[-2, 9, 0]}
                    />
                    <directionalLight
                        color="white"
                        intensity={0.2}
                        position={[7, -3, -5]}
                    />
                    <directionalLight
                        color="white"
                        intensity={0.1}
                        position={[10, 6, 5]}
                    />
                    <Pedestal />
                    <Triforce />
                    <ScreenSupport
                        position={[1.25, 0, 1.5]}
                        dimension={[0.1, 1, 0.6]}
                        rotation={[0, Math.PI / 4, 0]}
                    />
                    {/*<Screen
                    position={[1.8, 0, 1.95]}
                    dimension={[0, 1, 0.6]}
                    rotation={[0, Math.PI / 4, 0]}
                />*/}
                    <ScreenSupport
                        position={[1.25, 0, -1.5]}
                        dimension={[0.1, 1, 0.6]}
                        rotation={[0, -Math.PI / 4, 0]}
                    />
                    {/*<Screen
                    position={[1.8, 0, -1.95]}
                    dimension={[0, 1, 0.6]}
                    rotation={[0, -Math.PI / 4, 0]}
                />*/}
                    <ScreenSupport
                        position={[-1.5, 0, -1.25]}
                        dimension={[0.1, 1, 0.6]}
                        rotation={[0, -Math.PI / 8, 0]}
                    />
                    <ScreenSupport
                        position={[-1.5, 0, 1.25]}
                        dimension={[0.1, 1, 0.6]}
                        rotation={[0, Math.PI / 8, 0]}
                    />
                    <DomeFloor />
                    <DomeWalls />
                </group>
            </Canvas>
        </span>
    );
};
