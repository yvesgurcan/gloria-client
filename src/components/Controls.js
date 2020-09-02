import React from 'react';

import OrbitControls from './OrbitControls';
import OrbitControlsLimited from './OrbitControlsLimited';
import DeviceOrientationControls from './DeviceOrientationControls';

export default ({ orientationPermission, localHost }) => (
    <>
        {orientationPermission !== 'denied' ? null : localHost ? (
            <OrbitControls />
        ) : (
            <OrbitControlsLimited />
        )}
        {orientationPermission === 'granted' && <DeviceOrientationControls />}
    </>
);
