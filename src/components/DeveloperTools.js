import React, { useEffect } from 'react';
import styled from 'styled-components';
import packageJson from '../../package.json';

import attachUIConsole from '../util/attachUIConsole';

export default () => {
    useEffect(() => {
        attachUIConsole();
        console.info(packageJson.name, packageJson.version);
    }, []);

    return (
        <DeveloperTools>
            {packageJson.version}{' '}
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
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    color: white;
    z-index: 9999;
`;
