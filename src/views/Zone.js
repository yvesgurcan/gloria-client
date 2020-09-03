import React, { useEffect, useState } from 'react';
import { Canvas } from 'react-three-fiber';

import ScreenMask from '../components/ScreenMask';
import Camera from '../components/Camera';
import Controls from '../components/Controls';
import DomeWalls from '../components/DomeWalls';
import Pedestal from '../components/Pedestal';
import Triforce from '../components/Triforce';
import Kiosk from '../components/Kiosk';
import DomeFloor from '../components/DomeFloor';

export default ({ io }) => {
    const [localHost, setLocalHost] = useState(false);
    const [loading, setLoading] = useState(true);
    const [orientationPermission, setOrientationPermission] = useState();

    useEffect(() => {
        function isLocalHost() {
            if (location.hostname === 'localhost') {
                console.info('This is localhost.');
                return true;
            }

            console.info('This is not localhost.');
            return false;
        }

        function getOrientationPermissionFromLocalStorage() {
            const storageOrientationPermission = localStorage.getItem(
                '3d-dome-orientationPermission'
            );
            if (storageOrientationPermission) {
                setOrientationPermission(storageOrientationPermission);
            }
        }

        setLocalHost(isLocalHost());
        getOrientationPermissionFromLocalStorage();
        setLoading(false);
    }, []);

    async function requestOrientationPermission() {
        try {
            if (localHost) {
                console.error(
                    'Device orientation permissions can not be set on localhost (not secure). Sorry!'
                );
            }

            // Android devices don't use requestPermission()
            if (
                typeof DeviceOrientationEvent.requestPermission !== 'function'
            ) {
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
            console.error(error);
            setOrientationPermission('denied');
            localStorage.setItem('3d-dome-orientationPermission', 'denied');
        }
    }

    if (loading) {
        return <ScreenMask>Loading...</ScreenMask>;
    }

    if (!orientationPermission) {
        return (
            <ScreenMask>
                <button onClick={requestOrientationPermission}>
                    Enable access device orientation
                </button>
            </ScreenMask>
        );
    }

    return (
        <Canvas style={{ background: 'rgb(140, 140, 255)' }}>
            <Camera position={[0, 0, 0]} />
            <Controls
                orientationPermission={orientationPermission}
                localHost={localHost}
            />
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
                <Kiosk
                    to={`/kiosk1/${io.id}`}
                    position={[1.25, 0, 1.5]}
                    dimension={[0.1, 1, 0.6]}
                    rotation={[0, Math.PI / 4, 0]}
                />
                <Kiosk
                    to={`/kiosk2/${io.id}`}
                    position={[1.25, 0, -1.5]}
                    dimension={[0.1, 1, 0.6]}
                    rotation={[0, -Math.PI / 4, 0]}
                />
                <Kiosk
                    to={`/kiosk3/${io.id}`}
                    position={[-1.5, 0, -1.25]}
                    dimension={[0.1, 1, 0.6]}
                    rotation={[0, -Math.PI / 8, 0]}
                />
                <Kiosk
                    to={`/kiosk4/${io.id}`}
                    position={[-1.5, 0, 1.25]}
                    dimension={[0.1, 1, 0.6]}
                    rotation={[0, Math.PI / 8, 0]}
                />
                <DomeFloor />
                <DomeWalls />
            </group>
        </Canvas>
    );
};
