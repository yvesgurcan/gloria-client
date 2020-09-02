import styled from 'styled-components';

export default styled.div`
    position: absolute;
    top: 0;
    left: 0;
    padding: 3rem;
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    color: white;
    z-index: ${props => props.zIndex};
`;
