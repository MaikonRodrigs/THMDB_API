import React from 'react';
import * as S from './styles';

function Pagination({ onClickPrevious, onClickNext, page}) {
  return (
    <S.Container>
      <S.Previous onClick={onClickPrevious} />
      <S.Next onClick={onClickNext} />
      <S.Page>{page}</S.Page>
    </S.Container>
  )
}

export default Pagination;