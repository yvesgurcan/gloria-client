import React, { useState, useEffect } from 'react';

import isLocalHost from '../util/localHost';
import ScreenMask from '../components/Gallery.ScreenMask';
import Scene from '../components/Gallery.Scene';
import Routes from '../components/Gallery.Routes';

export default () => {
    const [loading, setLoading] = useState(false);
    const [orientationPermission, setOrientationPermission] = useState();
    const [localHost, setLocalHost] = useState(false);

    useEffect(() => {
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

    useEffect(() => setLocalHost(isLocalHost(), []));

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

    if (!orientationPermission) {
        return (
            <ScreenMask>
                <button onClick={requestOrientationPermission}>
                    Enable access device orientation
                </button>
            </ScreenMask>
        );
    }

    if (loading) {
        return <ScreenMask>Loading...</ScreenMask>;
    }

    return (
        <>
            <Scene
                localHost={localHost}
                orientationPermission={orientationPermission}
            />
            <Routes />
        </>
    );
};
