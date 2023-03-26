import React, { useContext } from 'react';
import { GlobalContext } from '@/hooks/useContext'
import * as S from './styles';


function Cards({ onClick, img = '#' }) {
  const { movies } = useContext(GlobalContext)

  return (
    (movies && (
      <S.Container onClick={onClick}>
        <S.Card src={img} />
      </S.Container>
    ))
  )
}

export default Cards;
