import React from 'react';
import * as S from './styles';

function Tips({ children }) {
  return (
    <S.TipsDot>
      {children}
    </S.TipsDot>
  )
}

export default Tips