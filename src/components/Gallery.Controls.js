import React from 'react';

import OrbitControls from './Gallery.OrbitControls';
import DeviceOrientationControls from './Gallery.DeviceOrientationControls';

export default ({ orientationPermission, localHost }) => {
    return (
        <>
            {orientationPermission !== 'denied' ? null : <OrbitControls />}
            {orientationPermission === 'granted' && (
                <DeviceOrientationControls />
            )}
        </>
    );
};
