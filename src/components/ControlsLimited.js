import React from 'react';

import Controls from './Controls';

export default () => (
    <Controls
        enableZoom={false}
        minAzimuthAngle={0}
        maxAzimuthAngle={Math.PI}
        minPolarAngle={Math.PI / 1.9}
        maxPolarAngle={Math.PI / 1.9}
    />
);
