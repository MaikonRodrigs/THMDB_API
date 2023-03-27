import React from 'react';

import * as S from './styles';

export function Loading() {
  return (
    <S.Wrapper>
      <S.Dot delay="0.1s" />
      <S.Dot delay="0.2s" />
      <S.Dot delay="0.3s" />
    </S.Wrapper>
  );
}


export function THMDB() {
  return (
    <S.Container>
      <S.LoadingTHMDB />
    </S.Container>
  );
}
