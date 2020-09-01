import React, { useEffect, useState } from 'react';
import { Canvas } from 'react-three-fiber';

import GlobalStyles from '../components/GlobalStyles';
import PermissionScreen from '../components/PermissionScreen';
import Camera from '../components/Camera';
import Controls from '../components/Controls';
import ControlsLimited from '../components/ControlsLimited';
import DeviceOrientation from '../components/DeviceOrientation';
import DomeWalls from '../components/DomeWalls';
import Pedestal from '../components/Pedestal';
import Triforce from '../components/Triforce';
import ScreenSupport from '../components/ScreenSupport';
import Screen from '../components/Screen';
import DomeFloor from '../components/DomeFloor';

export default () => {
    const [localHost, setLocalHost] = useState(false);
    const [loading, setLoading] = useState(true);
    const [orientationPermission, setOrientationPermission] = useState();

    useEffect(() => {
        function getOrientationPermissionFromLocalStorage() {
            const storageOrientationPermission = localStorage.getItem(
                '3d-dome-orientationPermission'
            );
            if (storageOrientationPermission) {
                setOrientationPermission(storageOrientationPermission);
            }
        }

        getOrientationPermissionFromLocalStorage();
        setLoading(false);
    }, []);

    useEffect(() => {
        setLocalHost(isLocalHost());
    }, []);

    async function requestOrientationPermission() {
        try {
            if (localHost) {
                console.error(
                    'Device orientation permissions can not be set on localhost (not secure). Sorry!'
                );
            }

            // Android devices don't use requestPermission()
            if (typeof DeviceOrientation.requestPermission !== 'function') {
                const userAgent = navigator.userAgent.toLowerCase();
                if (userAgent.includes('android')) {
                    console.info(
                        'Android device detected. Permission granted by default.'
                    );
                    setOrientationPermission('granted');
                    return;
                }
            }

            const permission = await DeviceOrientationEvent.requestPermission();
            console.info({ permission });
            setOrientationPermission(permission);
            localStorage.setItem('3d-dome-orientationPermission', permission);
        } catch (error) {
            console.error(
                'An error occurred while setting device orientation permission. Permission denied.'
            );
            console.error({ error });
            setOrientationPermission('denied');
            localStorage.setItem('3d-dome-orientationPermission', 'denied');
        }
    }

    function isLocalHost() {
        if (location.hostname === 'localhost') {
            console.info('This is localhost.');
            return true;
        }

        console.info('This is not localhost.');
        return false;
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
                {orientationPermission !== 'denied' ? null : localHost ? (
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
                        to="/inside1"
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
                        to="/inside2"
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
                        to="/inside3"
                        position={[-1.5, 0, -1.25]}
                        dimension={[0.1, 1, 0.6]}
                        rotation={[0, -Math.PI / 8, 0]}
                    />
                    <ScreenSupport
                        to="/inside4"
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
