import styled from 'styled-components';

export const Container = styled.div``;

export const Title = styled.h1`
  font-size: 1.2rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 750px) {
    text-align: center;
  }
`;

export const CardsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 750px) {
    flex-direction: column;
  }
`;
