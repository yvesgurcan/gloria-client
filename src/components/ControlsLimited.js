import React from 'react';

export default () => (
    <Controls
        enableZoom={false}
        minAzimuthAngle={-Math.PI}
        maxAzimuthAngle={0}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={-Math.PI / 2}
    />
);
