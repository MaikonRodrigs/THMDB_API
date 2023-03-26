import React from 'react';
import * as S from './styles';

function Pagination({ onClickPrevious, onClickNext }) {
  return (
    <S.Container>
      <S.Previous onClick={onClickPrevious} />
      <S.Next onClick={onClickNext} />
    </S.Container>
  )
}

export default Pagination;