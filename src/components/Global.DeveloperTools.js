import React, { useEffect } from 'react';
import FPSStats from 'react-fps-stats';
import styled from 'styled-components';
import packageJson from '../../package.json';

import attachUIConsole from '../util/attachUIConsole';
import io from '../util/io';

export default () => {
    useEffect(() => {
        attachUIConsole();
        console.info(packageJson.name, packageJson.version);
        window.io = io;
    }, []);

    return (
        <DeveloperTools>
            <FPSWrapper>
                <FPSStats />
            </FPSWrapper>
            <span>{packageJson.version}</span>{' '}
            <button
                onClick={() => {
                    localStorage.removeItem('3d-dome-orientationPermission');
                    window.location.reload();
                }}
            >
                Reset permissions
            </button>
        </DeveloperTools>
    );
};

const DeveloperTools = styled.div`
    position: fixed;
    bottom: 0.5rem;
    left: 0.5rem;
    color: white;
    z-index: 9999;
    background: rgb(0, 0, 0, 0.3);
    padding: 0.3rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    border-radius: 0.5rem;
`;

const FPSWrapper = styled.div`
    > div {
        /* Override default FPS counter inline style */
        left: auto !important;
        top: 0.6rem !important;
        right: 0.6rem !important;
        opacity: 0.7;
        border-radius: 0.4rem;
    }
`;
