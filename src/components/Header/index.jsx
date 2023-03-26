import React from 'react';

import * as S from './styles';
import * as C from '@/components/index'
import { useNavigate } from 'react-router-dom/dist';

function Header() {

  const navigate = useNavigate()

  function handleHomePage() {
    navigate(`/`)
  }

  return (
    <S.Container>
      <S.Row>
        <S.RowImage>
          <S.Logo onClick={handleHomePage} />
        </S.RowImage>
        <S.RowSearchAndProfile>
          <S.HeartIcon />
          {/* <S.RowFavorites>
            <S.ArrowIcon />
          </S.RowFavorites> */}
          <C.Search />
          <C.Profile />
        </S.RowSearchAndProfile>
      </S.Row>
    </S.Container>
  )
}

export default Header;