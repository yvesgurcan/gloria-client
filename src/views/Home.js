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
import PermissionScreen from '../components/PermissionScreen';

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

export default () => {
    const [loading, setLoading] = useState(true);
    const [orientationPermission, setOrientationPermission] = useState();

    useEffect(() => {
        const storageOrientationPermission = localStorage.getItem(
            '3d-dome-orientationPermission'
        );
        if (storageOrientationPermission) {
            setOrientationPermission(storageOrientationPermission);
        }
        setLoading(false);
    });

    async function requestOrientationPermission() {
        console.info('requestOrientationPermission');
        try {
            /*
            if (typeof DeviceOrientation === 'undefined') {
                console.warn('DeviceOrientation is not defined.');
                const permission = 'denied';
                console.info({ permission });
                setOrientationPermission(permission);
                localStorage.setItem(
                    '3d-dome-orientationPermission',
                    permission
                );
                return;
            } else if (
                typeof DeviceOrientation.requestPermission !== 'function'
            ) {
                console.warn(
                    'DeviceOrientation.requestPermission is not a function.'
                );
                const permission = 'denied';
                console.info({ permission });
                setOrientationPermission(permission);
                localStorage.setItem(
                    '3d-dome-orientationPermission',
                    permission
                );
                return;
            }
            */

            const permission = await DeviceOrientationEvent.requestPermission();
            console.info({ permission });
            setOrientationPermission(permission);
        } catch (error) {
            console.error({ error });
            setOrientationPermission('denied');
        }
    }

    function isLocalHost() {
        return location.hostname === 'localhost';
    }

    if (loading) {
        return (
            <PermissionScreen>
                <GlobalStyles />
                Loading...
            </PermissionScreen>
        );
    }

    if (!orientationPermission) {
        return (
            <PermissionScreen>
                <GlobalStyles />
                <button onClick={requestOrientationPermission}>
                    Enable access device orientation
                </button>
            </PermissionScreen>
        );
    }

    return (
        <span>
            <GlobalStyles />
            <Canvas style={{ background: 'rgb(140, 140, 255)' }}>
                <Camera position={[0, 0, 0]} />
                {orientationPermission !== 'denied' ? null : isLocalHost() ? (
                    <Controls />
                ) : (
                    <ControlsLimited />
                )}
                {orientationPermission === 'granted' && <DeviceOrientation />}
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
