import React from 'react';
import { Link, Route } from 'react-router-dom';
import { Canvas } from 'react-three-fiber';
import { Vector3 } from 'three';
import styled from 'styled-components';

import ViewLayer from '../components/ViewLayer';
import Controls from '../components/Controls';
import Block from '../components/Block';
import Pointer from '../components/Pointer';

// For readability
const Wall = Block;
const Pedestal = Block;

export default ({ color, to }) => {
    const size1 = 500;
    const size2 = 500;
    const bottom = -27;
    const offset = 15;
    return (
        <ViewLayer backgroundColor="rgb(140, 140, 255)" zIndex={600}>
            <BackLink to="/">Back</BackLink>
            <Canvas
                camera={{
                    position: new Vector3(-2, 0, 0)
                }}
            >
                <ambientLight intensity={0.5} />
                <hemisphereLight
                    color="rgb(100, 100, 100)"
                    intensity={0.5}
                    position={[10, 5, 0]}
                />
                <Wall
                    color={color}
                    x={-size1}
                    y={0}
                    z={0}
                    length={size2}
                    width={size1 / 2}
                />
                <Wall
                    color={color}
                    x={size1}
                    y={0}
                    z={0}
                    length={size2}
                    width={size1 / 2}
                />
                <Wall
                    color={color}
                    x={0}
                    y={size1 / 4}
                    z={0}
                    length={size2}
                    depth={size1 * 2}
                />
                <Wall
                    color={color}
                    x={offset}
                    y={-size1 / 4}
                    z={0}
                    length={size2}
                    depth={size1 * 2}
                />
                <Wall
                    color={color}
                    x={0}
                    y={0}
                    z={size2 / 2}
                    depth={size1 * 2}
                    width={size1 / 2}
                />
                <Wall
                    color={color}
                    x={0}
                    y={0}
                    z={-size2 / 2}
                    depth={size1 * 2}
                    width={size1 / 2}
                />
                <Pointer to={`${to}/pin1`} x={23} y={bottom + offset} z={-18} />
                <Pointer to={`${to}/pin2`} x={110} y={bottom} z={15} />
                <Pointer to={`${to}/pin3`} x={70} y={bottom} z={50} />
                <Pedestal
                    color="rgb(50, 50, 50)"
                    x={30}
                    y={bottom + offset}
                    z={-10}
                    depth={5}
                    width={5}
                    length={5}
                />
                <Pedestal
                    color="rgb(50, 50, 50)"
                    x={35}
                    y={bottom + offset}
                    z={0}
                    depth={5}
                    width={5}
                    length={5}
                />
                <Pedestal
                    color="rgb(50, 50, 50)"
                    x={30}
                    y={bottom + offset}
                    z={10}
                    depth={5}
                    width={5}
                    length={5}
                />
                <Controls
                    enableZoom={false}
                    minAzimuthAngle={-Math.PI}
                    maxAzimuthAngle={0}
                    minPolarAngle={Math.PI / 2}
                    maxPolarAngle={-Math.PI / 2}
                />
            </Canvas>
        </ViewLayer>
    );
};

const BackLink = styled(Link)`
    padding: 2rem;
    position: absolute;
    z-index: 610;
`;
