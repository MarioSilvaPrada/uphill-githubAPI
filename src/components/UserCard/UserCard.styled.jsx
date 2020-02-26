import styled from 'styled-components';

export const CardsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Card = styled.div`
  width: 17.5rem;
  min-height: 22rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 2px 4px 0 rgba(235, 237, 238, 0.8);
  color: ${(props) => props.theme.mainColor};
  background: white;
  position: relative;
  padding-bottom: .5rem;
  transition: 1s;

  &:hover {
    color: white;
    .poster {
      height: 100%;
    }

    .button {
      display: block;
    }

    .repo {
      display: none;
    }
  }

  @media screen and (max-width: 750px) {
    margin-bottom: 2rem;
  }
`;

export const Avatar = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 100%;
  margin-top: 1.4rem;
  z-index: 2;
`;

export const Name = styled.p`
  font-size: 1rem;
  font-weight: bold;
  margin-top: 8px;
  z-index: 2;
`;

export const Login = styled.p`
  margin-top: 4px;
  font-size: .81rem;
  z-index: 2;
`;

export const FollowersWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  font-size: .81rem;
  z-index: 2;

  p {
    margin-left: 8px;
  }
`;

export const Button = styled.a`
  border: 1px solid white;
  background: ${(props) => props.theme.white(0.2)};
  padding: 10px;
  font-size: .88rem;
  color: white;
  text-transform: uppercase;
  margin-top: 3.13rem;
  display: none;
  z-index: 2;
  cursor: pointer;
  transition: 1s;
`;

export const RepoCard = styled.div`
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.grey};
  border-left: 3px solid ${(props) => props.theme.mainColor};
  padding: 1.2rem;
  font-size: .8rem;
`;

export const WrapperRepoCard = styled.div`
  width: 90%;
  padding-top: 1rem;
  border-top: 1px solid ${(props) => props.theme.grey};
  margin-top: 1rem;
`;

export const StarWrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.yellow};
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const Poster = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 17%;
  width: 100%;
  z-index: 1;
  background-image: url(${(props) => props.img});
  background-position: center;
  transition: 1s;
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(46, 58, 83, 0.8);
`;
