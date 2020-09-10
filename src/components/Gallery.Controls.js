import React from 'react';

import OrbitControls from './Zone.OrbitControls';
import OrbitControlsLimited from './Zone.OrbitControlsLimited';
import DeviceOrientationControls from './Gallery.DeviceOrientationControls';

export default ({ orientationPermission, localHost }) => {
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
