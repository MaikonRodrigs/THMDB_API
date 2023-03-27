import React, { useContext } from 'react';
import * as S from './styles';
import { GlobalContext } from '@/hooks/useContext'


function Cards({ onClick, img }) {
  const { rated } = useContext(GlobalContext)

  return (
    <>
      <S.Container onClick={onClick}>
        {!rated && (<S.Skeletoon />)}
        <S.Card src={img} />
      </S.Container>
    </>
  )
}

export default Cards;
