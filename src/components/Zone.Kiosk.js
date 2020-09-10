import React from 'react';

import VideoScreen from './Zone.VideoScreen';

export default ({
    href = '',
    to = '',
    video = false,
    color = 'rgb(200, 200, 200)',
    position = [0, 0, 0],
    dimension = [0, 0, 0],
    ...props
}) => {
    return (
        <>
            {!video && (
                <mesh
                    position={position}
                    {...props}
                    onClick={() =>
                        href
                            ? (window.location.href = href)
                            : !video && window.appHistory.push(to)
                    }
                    onPointerUp={() =>
                        href
                            ? (window.location.href = href)
                            : !video && window.appHistory.push(to)
                    }
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
            )}

            {video && (
                <VideoScreen
                    video={video}
                    position={video === 1 ? [1.4, 0.3, 1.4] : [1.4, 0.3, -1.4]}
                    dimension={[0.9, 1.6, 1, 1]}
                    rotation={
                        video === 1 ? [0, -Math.PI / 4, 0] : [0, Math.PI / 4, 0]
                    }
                />
            )}
        </>
    );
};
