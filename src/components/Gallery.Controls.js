import React from 'react';

import OrbitControls from './Gallery.OrbitControls';
import OrbitControlsLimited from './Gallery.OrbitControlsLimited';
import DeviceOrientationControls from './Gallery.DeviceOrientationControls';

export default ({ orientationPermission, localHost }) => {
    return (
        <>
            {orientationPermission !== 'denied' ? null : localHost ? (
                <OrbitControls target={[0.2, 0, 0]} />
            ) : (
                <OrbitControlsLimited />
            )}
            {orientationPermission === 'granted' && (
                <DeviceOrientationControls />
            )}
        </>
    );
};
