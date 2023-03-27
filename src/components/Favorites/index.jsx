import React from 'react';
import { GlobalContext } from '@/hooks/useContext'
import { useFetchSearchMovies, useFetchMovie } from '@/services/RequestsApi'

import * as S from './styles';

function Favorites({ src, title, moreClick, removeClick, cardClick }) {

  return (
    <S.Row>
      <S.RowCard>
        <S.Card src={src} onClick={cardClick} />
        <S.RowIcons>
          <S.Title>{title}</S.Title>
          <S.Icons>
            <S.AddCircleIcon onClick={moreClick} />
            <S.TrashIcon onClick={removeClick} />
          </S.Icons>
        </S.RowIcons>
      </S.RowCard>
    </S.Row>
  )
}

export default Favorites;