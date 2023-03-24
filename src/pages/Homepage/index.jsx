import React from 'react';
import * as C from '@/components/index';
import * as S from './styles'

function Homepage() {
  return (
    <S.Container>
      <S.FirstSeaction>
        <C.Header />
        <C.Dashboard />
      </S.FirstSeaction>
      <C.Cards />
    </S.Container>

  )
}

export default Homepage;