import React from 'react';
import Text from './Text';
import Block from './Block';

export default ({
    text = '',
    to = '/inside',
    x = 0,
    y = 0,
    z = 0,
    color = 'rgb(230, 230, 230)',
    textRotation = [Math.PI / 2, 0, 0],
    textOffset = [0, 0, 0],
    blockProps = {},
    opacity,
    ...props
}) => {
    return (
        <mesh position={[0 + x, 0 + y, 0 + z]} {...props}>
            <boxBufferGeometry attach="geometry" args={[0.025, 0.025, 1]} />{' '}
            <Text
                onClick={() => window.appHistory.push(to)}
                onPointerUp={() => window.appHistory.push(to)}
                rotation={textRotation}
                offset={textOffset}
            >
                {text}
            </Text>
            <Block
                {...blockProps}
                opacity={opacity}
                onClick={() => window.appHistory.push(to)}
                onPointerUp={() => window.appHistory.push(to)}
            />
            <meshStandardMaterial
                attach="material"
                color={color}
                roughness={0.5}
            />
        </mesh>
    );
};
