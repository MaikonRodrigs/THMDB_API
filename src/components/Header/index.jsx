import React from 'react';
import * as S from './styles';
import * as C from '@/components/index'

function Header() {

  return (
    <S.Container>
      <S.Row>
        <S.RowImage>
          <S.Logo />
        </S.RowImage>
        <S.RowSearchAndProfile>
          <C.Search />
          <C.Profile />
        </S.RowSearchAndProfile>
      </S.Row>
    </S.Container>
  )
}

export default Header;