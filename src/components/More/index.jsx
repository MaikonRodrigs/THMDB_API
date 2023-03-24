import React from 'react';
import * as S from './styles';

function More({ display, onClick }) {
  return (
    <S.Container display={display}>
      <S.Row>
        <S.CloseIcon onClick={onClick} />
      </S.Row>
    </S.Container>
  )
}

export default More;