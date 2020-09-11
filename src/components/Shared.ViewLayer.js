import React from 'react';
import styled from 'styled-components';

import ViewContent from './Shared.ViewContent';
import Back from './Shared.Back';

export default ({ back = '/', children, ...props }) => (
    <ViewLayer {...props}>
        <ViewContent>
            <Back to={back} />
            {children}
        </ViewContent>
    </ViewLayer>
);

const ViewLayer = styled.div`
    background: ${props => props.backgroundColor};
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    min-height: 100vh;
    box-sizing: border-box;
    z-index: ${props => props.zIndex};
    color: white;
`;
