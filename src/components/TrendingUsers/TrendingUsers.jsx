import React, { useState, useEffect } from 'react';
import api from 'api/api';

import UserCard from 'components/UserCard/UserCard';
import Spinner from 'components/Spinner/Spinners';
import * as S from './TrendingUsers.styled';

const TrendingUsers = () => {
  const [ isLoading, setIsLoading ] = useState(true);

  const [ infoUsers, setInfoUsers ] = useState([]);
  const [ repoUser, setRepoUser ] = useState([]);

  const getUsers = () => {
    // get top users sorted by followers
    api.get('search/users?q=followers:%3E10000&sort=followers&order=desc').then((res) => {
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
            // sort array by followers in case we get users in a different order
            setInfoUsers(newArr.sort((a, b) => b.followers - a.followers));
          })
          .then(() => {
            // fetch a repo from each user so we can display it
            const repoArr = [];
            userArr.map((userInfo) => {
              api
                .get(`users/${userInfo.login}/repos`)
                .then((info) => ({
                  repo: info.data[0],
                  owner: info.data[0].owner.login,
                }))
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
      <S.Title>Trending Users</S.Title>
      {isLoading ? (
        <Spinner />
      ) : (
        <S.CardsWrapper>
          {infoUsers.map(({ login, name, avatar, github, followers }) => (
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

export default TrendingUsers;
