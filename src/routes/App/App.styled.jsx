import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    background: ${(props) => props.theme.white(0.5)};
    padding: 2.5rem;
`;

export const Title = styled.div`color: red;`;

export const Wrapper = styled.div`
    max-width: ${(props) => props.theme.maxWidth};
    margin: 0 auto;
`;
