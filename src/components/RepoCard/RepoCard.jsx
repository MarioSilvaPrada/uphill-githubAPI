import React from 'react';
import { IoIosStarOutline } from 'react-icons/io';
import * as S from './RepoCard.styled';


const RepoCard = ({
  name, stars, description, github, index,
}) => (
  <S.CardRepo href={github} target="blank" colorIndex={index}>
    <S.RepoName>{name}</S.RepoName>
    <S.StarWrapper>
      <IoIosStarOutline />
      <p>{stars}</p>
    </S.StarWrapper>
    <S.Description>{description}</S.Description>
  </S.CardRepo>
);

export default RepoCard;
