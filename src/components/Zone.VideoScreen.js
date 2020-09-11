import React, { useEffect, useRef } from 'react';
import { useFrame } from 'react-three-fiber';

import * as Three from 'three';

export default ({
    position = [0, 0, 0],
    dimension = [1, 1, 1, 1],
    videoDimension = { width: 1, height: 1 },
    partialPath,
    ...props
}) => {
    const videoReference = useRef();
    const videoTextureReference = useRef();
    const videoContextReference = useRef();

    useEffect(() => {
        if (!videoReference.current) {
            const videoElement = document.createElement('video');
            videoElement.src = `public/${partialPath}`;
            videoElement.muted = true;
            videoElement.autoplay = true;
            videoElement.loop = true;
            videoElement.disablePictureInPicture = true;
            videoElement.preload = 'auto';
            videoElement.controlslist =
                'nodownload,nofullscreen,noremoteplayback';
            videoElement.playsinline = true;
            videoElement.playsInline = true;
            videoElement.webkitPlaysinline = true;
            videoElement.webkitPlaysInline = true;
            videoElement.play();

            videoReference.current = videoElement;
        }

        if (!videoTextureReference.current) {
            // create a canvas to display the video
            const videoImageElement = document.createElement('canvas');
            videoImageElement.width = videoDimension.width * 4;
            videoImageElement.height = videoDimension.height * 4;

            const videoContext = videoImageElement.getContext('2d');
            videoContext.fillStyle = 'rgb(0, 0, 0, 0.5)';
            videoContext.fillRect(
                0,
                0,
                videoImageElement.width,
                videoImageElement.height
            );

            videoContextReference.current = videoContext;

            const videoTexture = new Three.Texture(videoImageElement);
            videoTexture.minFilter = Three.LinearFilter;
            videoTexture.magFilter = Three.LinearFilter;

            videoTextureReference.current = videoTexture;
        }
    });

    useFrame(() => {
        if (videoReference.current && videoContextReference.current) {
            videoContextReference.current.drawImage(
                videoReference.current,
                0,
                0
            );
            videoTextureReference.current.needsUpdate = true;
        }
    });

    function handleVideoClick() {
        if (videoReference.current.paused) {
            videoReference.current.play();
        } else {
            videoReference.current.pause();
        }
    }

    return (
        <>
            <mesh position={position} {...props} onClick={handleVideoClick}>
                <planeGeometry attach="geometry" args={dimension} />
                <meshBasicMaterial
                    attach="material"
                    map={videoTextureReference.current}
                    overdraw
                    side={Three.DoubleSide}
                />
            </mesh>
        </>
    );
};
