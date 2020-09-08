import React, { useEffect, useRef } from 'react';
import * as Three from 'three';

export default ({ position = [0, 0, 0] }) => {
    const videoReference = useRef();

    useEffect(() => {
        if (!videoReference) {
            /*
            const videoElement = document.createElement('video');
            videoElement.src = 'public/wonderwoman.mp4';
            videoElement.load();
            videoElement.play();

            videoReference.current = videoElement;
            */
        }
    });

    return <video src="public/wonderwoman.mp4" />;
};
