import React from 'react';

export default props => (
    <model-viewer
        ar-modes="quick-look webxr scene-viewer"
        ar
        auto-rotate
        camera-controls
        {...props}
        style={{ width: '60vw', height: '60vh' }}
    />
);
