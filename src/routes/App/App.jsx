import React from 'react';

// Components
import TrendingUsers from 'components/TrendingUsers/TrendingUsers';
import ActiveUsers from 'components/ActiveUsers/ActiveUsers';
import TopRepos from 'components/TopRepos/TopRepos';

import * as S from './App.styled';

const App = () => (
  <S.Container>
    <S.Wrapper>
      <TrendingUsers />
      <ActiveUsers />
      <TopRepos />
    </S.Wrapper>
  </S.Container>
);

export default App;
