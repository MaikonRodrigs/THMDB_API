import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '@/hooks/useContext'

import * as S from './styles';
import * as C from '@/components/index'


function Cards({ onClick, img }) {
  const { status, rated } = useContext(GlobalContext)

  // if (!rated) {
  //   return (
  //     <S.Skeletoon />
  //   )
  // }


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
