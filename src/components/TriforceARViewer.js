import React from 'react';

export default () => {
    return (
        <a href="https://gloria-3d-assets.s3-us-west-2.amazonaws.com/triforce.usdz">
            <model-viewer
                src="https://raw.githubusercontent.com/yvesgurcan/3d-dome/master/public/triforce2/scene.gltf"
                ar-modes="webxr scene-viewer quick-look"
                ar
                auto-rotate
                camera-controls
            />
        </a>
    );
};
