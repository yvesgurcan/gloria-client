import React from 'react';

import VideoScreen from './VideoScreen';

export default ({
    to = '',
    video = false,
    color = 'rgb(200, 200, 200)',
    position = [0, 0, 0],
    dimension = [0, 0, 0],
    ...props
}) => {
    return (
        <>
            <mesh
                position={position}
                {...props}
                onClick={() => !video && window.appHistory.push(to)}
                onPointerUp={() => !video && window.appHistory.push(to)}
            >
                <boxBufferGeometry attach="geometry" args={dimension} />
                <meshPhongMaterial
                    attach="material"
                    color="rgb(35, 35, 35)"
                    roughness={0.5}
                    opacity={1}
                    transparent={false}
                />
            </mesh>

            {video && (
                <VideoScreen
                    position={[1.5, 0.0, -1.3]}
                    dimension={[0.6, 0.9, 1, 1]}
                    rotation={[0, Math.PI / 4, 0]}
                />
            )}
        </>
    );
};
