import React, { useState, useEffect } from 'react';
import api from 'api/api';

import RepoCard from 'components/RepoCard/RepoCard';
import * as S from './TopRepos.styled';


const TopRepos = () => {
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getRepos = () => {
    // get top repo sorted by stars
    api.get('search/repositories?q=stars:%3E10000&sort=stars&order=desc').then((res) => {
      const reposArr = res.data.items.slice(0, 4);
      setRepos(reposArr);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    getRepos();
  }, []);
  return (
    <S.Container>
      <S.Title>Top Repositories</S.Title>
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <S.CardsWrapper>
          {repos.map(({
            name, stargazers_count, description, html_url,
          }, i) => (
            <RepoCard
              name={name}
              stars={stargazers_count}
              description={description}
              github={html_url}
              index={i}
            />
          ))}
        </S.CardsWrapper>
      )}
    </S.Container>
  );
};

export default TopRepos;
