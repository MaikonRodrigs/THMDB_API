import React, { useEffect, useContext } from 'react';
import * as S from './styles';
import { GlobalContext } from '@/hooks/useContext'

import { useFetchTopRated, useFetchSearchMovies, useFetchMovie, useFetchImages } from '@/services/RequestsApi'

function Cards({ onClick }) {

  const { img_url } = useContext(GlobalContext)

  const { rated, fetchTopRated, data } = useFetchTopRated()

  useEffect(() => {
    fetchTopRated(16)
  }, [])

  return (
    <S.Container onClick={onClick}>
      {data && (
        (rated.map(rating => (
          <S.Card src={img_url + rating.poster_path} />
        )
        )))}
    </S.Container>
  )
}

export default Cards;
