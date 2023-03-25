import React from 'react';
import * as S from './styles';

function Cards({ onClick}) {
  const card1 = 'https://image.tmdb.org/t/p/original/AusH8YTvTH660jU4q3x0ZHcl453.jpg'
  const card2 = 'https://image.tmdb.org/t/p/original/z3OBcmx8TXLoK3LTwAWIQ0j3wZ7.jpg'
  const card3 = 'https://image.tmdb.org/t/p/original/qqf5l6kxipzuUgzG1LRsZrE46qH.jpg'
  const card4 = 'https://image.tmdb.org/t/p/original/bee08HEMjRmwlGi88X0CJt9kKl3.jpg'
  const card5 = 'https://image.tmdb.org/t/p/original/mxmVAdWEyP8mGKzpKNkauix6ZbQ.jpg'
  const card6 = 'https://image.tmdb.org/t/p/original/dIwzcjWlKxuZ34XsGjHkFEFL8r6.jpg'
  return (
    <S.Container onClick={onClick}>
      <S.Card src={card1} />
      <S.Card src={card2} />
      <S.Card src={card3} />
      <S.Card src={card4} />
      <S.Card src={card5} />
      <S.Card src={card6} />

      {/* <S.IconSearch /> */}
    </S.Container>
  )
}

export default Cards;