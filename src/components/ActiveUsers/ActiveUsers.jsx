import React, { useState, useEffect } from 'react';
import api from 'api/api';

import UserCard from 'components/UserCard/UserCard';
import Spinner from 'components/Spinner/Spinners';
import * as S from './ActiveUsers.styled';

const ActiveUsers = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [infoUsers, setInfoUsers] = useState([]);
  const [repoUser, setRepoUser] = useState([]);

  const getUsers = () => {
    // get top users sorted by events (commits) with javascript as language
    api.get('search/users?q=language:javascript&sort=events&order=desc').then((res) => {
      // Array with top 3 users
      const userArr = res.data.items.slice(0, 3);

      // fetch more information from the user like name, followers etc.
      const newArr = [];
      userArr.map((user) => {
        api
          .get(`users/${user.login}`)
          .then((data) => {
            newArr.push({
              name: data.data.name,
              login: data.data.login,
              followers: data.data.followers,
              avatar: data.data.avatar_url,
              github: data.data.html_url,
              location: data.data.location,
            });
            setInfoUsers(newArr);
          })
          .then(() => {
            // fetch a repo from each user so we can display it
            const repoArr = [];
            userArr.map((userInfo) => {
              api
                .get(`users/${userInfo.login}/repos`)
                .then((info) => {
                  // map through user repos and check which one has more stars
                  let numberStars = 0;
                  let repoSelected = null;
                  info.data.map((repo) => {
                    if (repo.stargazers_count > numberStars) {
                      repoSelected = repo;
                      numberStars = repo.stargazers_count;
                    }
                    return null;
                  });
                  return {
                    repo: repoSelected,
                    owner: info.data[0].owner.login,
                  };
                })
                .then((info) => {
                  repoArr.push(info);
                  setRepoUser(repoArr);
                  setIsLoading(false);
                });
              return null;
            });
          });
        return null;
      });
    });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <S.Container>
      <S.Title>Active Users</S.Title>
      {isLoading ? (
        <Spinner />
      ) : (
        <S.CardsWrapper>
          {infoUsers.map(({
            login, name, avatar, github, followers,
          }) => (
            <UserCard
              key={login}
              login={login}
              name={name}
              avatar={avatar}
              github={github}
              followers={followers}
              repoArr={repoUser}
            />
          ))}
        </S.CardsWrapper>
      )}
    </S.Container>
  );
};

export default ActiveUsers;
