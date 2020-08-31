import React from 'react';

export default () => {
    return (
        <model-viewer
            src="https://raw.githubusercontent.com/yvesgurcan/3d-dome/master/public/triforce2/scene.gltf"
            auto-rotate
            camera-controls
            ar
            ar-modes="webxr scene-viewer quick-look"
            ar-scale="auto"
            ios-src="https://raw.githubusercontent.com/yvesgurcan/3d-dome/master/public/triforce.usdz"
        />
    );
};
