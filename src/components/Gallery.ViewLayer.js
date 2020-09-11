import React from 'react';
import styled from 'styled-components';

import Back from './Shared.Back';

export default ({ back = '/', children, ...props }) => (
    <ViewLayer {...props}>
        <Overlay>
            <Back to={back} />
        </Overlay>
        {children}
    </ViewLayer>
);

const ViewLayer = styled.div`
    background: ${props => props.backgroundColor};
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    z-index: ${props => props.zIndex};
    color: white;
`;

const Overlay = styled.div`
    position: fixed;
    box-sizing: border-box;
    padding: 1rem;
`;
