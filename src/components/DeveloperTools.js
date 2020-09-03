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
            {packageJson.version}
            <FPSStats />{' '}
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
    bottom: 1rem;
    left: 1rem;
    color: white;
    z-index: 9999;
    background: rgb(0, 0, 0, 0.3);
    padding: 0.3rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    border-radius: 0.5rem;
`;
