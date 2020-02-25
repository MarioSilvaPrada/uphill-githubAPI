import React from 'react';

import { FaUserAlt } from 'react-icons/fa';
import { IoIosStarOutline } from 'react-icons/io';
import * as S from './UserCard.styled';

const UserCard = ({ repoArr, login, name, avatar, github, followers }) => (
  <S.Card>
    <S.Poster className='poster' img={avatar}>
      <S.Overlay />
    </S.Poster>
    <S.Avatar alt='avatar' src={avatar} />
    <S.Name>{name}</S.Name>
    <S.Login>{login}</S.Login>
    <S.FollowersWrapper>
      <FaUserAlt />
      <p>{followers} Followers</p>
    </S.FollowersWrapper>
    <S.Button className='button' target='blank' href={github}>
      open profile
    </S.Button>
    {/* map throught repos and if matchs current user, render it */}
    {repoArr.map(
      (repo) =>
        repo.owner === login && (
          <S.WrapperRepoCard className='repo' key={repo.owner}>
            <S.RepoCard>
              <S.Wrapper>
                <p>{repo.repo.name}</p>
                <S.StarWrapper>
                  <IoIosStarOutline />
                  <p>{repo.repo.stargazers_count}</p>
                </S.StarWrapper>
              </S.Wrapper>
              <p>{repo.repo.description}</p>
            </S.RepoCard>
          </S.WrapperRepoCard>
        ),
    )}
  </S.Card>
);

export default UserCard;
