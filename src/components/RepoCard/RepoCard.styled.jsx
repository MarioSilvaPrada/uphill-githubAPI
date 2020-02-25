import styled from 'styled-components';

export const CardRepo = styled.a`
  width: 12.3rem;
  height: 11.9rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 2px 4px 0 rgba(235, 237, 238, 0.8);
  padding: 1.5rem 1rem;
  border-top: 4px solid ${(props) => props.theme.colorArr[props.colorIndex]};
`;

export const RepoName = styled.p`
  font-size: .9rem;
  font-weight: bold;
  margin-bottom: .8rem;
`;

export const StarWrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.yellow};
  font-size: .8rem;
  margin-bottom: .9rem;

  p {
    margin-left: 9px;
  }
`;

export const Description = styled.p`
  font-size: .8rem;
  width: 100%;
  overflow-y: scroll;
  text-align: center;
`;
