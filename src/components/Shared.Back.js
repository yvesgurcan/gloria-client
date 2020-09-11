import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default ({ to = '/' }) =>
    to && (
        <Container>
            <Link to={to}>Back</Link>
        </Container>
    );

const Container = styled.div`
    background: rgb(210, 210, 210, 0.3);
    border-radius: 0.5rem;
    padding: 0.5rem;
`;
