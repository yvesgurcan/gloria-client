import React from 'react';

import OrbitControls from './OrbitControls';
import OrbitControlsLimited from './OrbitControlsLimited';
import DeviceOrientationControls from './DeviceOrientationControls';

export default ({ orientationPermission, localHost }) => {
    return localHost ? <OrbitControls /> : <OrbitControlsLimited />;

    return (
        <>
            {orientationPermission !== 'denied' ? null : localHost ? (
                <OrbitControls />
            ) : (
                <OrbitControlsLimited />
            )}
            {orientationPermission === 'granted' && (
                <DeviceOrientationControls />
            )}
        </>
    );
};
