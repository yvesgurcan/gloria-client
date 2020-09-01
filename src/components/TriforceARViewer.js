import React from 'react';

export default () => {
    return (
        <model-viewer
            src="https://raw.githubusercontent.com/yvesgurcan/3d-dome/master/public/triforce2/scene.gltf"
            ios-src="https://gloria-3d-assets.s3-us-west-2.amazonaws.com/triforce.usdz"
            ar-modes="webxr scene-viewer quick-look"
            ar
            auto-rotate
            camera-controls
        />
    );
};
