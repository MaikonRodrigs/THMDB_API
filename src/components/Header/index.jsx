import React, { useContext, useEffect, useState } from 'react';
import * as S from './styles';
import * as C from '@/components/index'
import { useNavigate } from 'react-router-dom';

import { GlobalContext } from '@/hooks/useContext'
import { useFetchMovie } from '@/services/RequestsApi'


function Header() {
  const [display, setDisplay] = useState(false)

  const { img_url, loading, setLoading, favorites, setFavorites } = useContext(GlobalContext)

  const navigate = useNavigate()

  function handleHomePage() {
    navigate(`/`)
  }

  function onClickDisplay() {
    setDisplay(!display)
  }

  function handleTMDB(id) {
    setLoading(true)
    setTimeout(() => {
      window.open(`https://www.themoviedb.org/movie/${id} target="_blank"`)
      setLoading(false)
    }, 500)
  }

  function removeFavorite(i) {
    const arr = favorites.filter((item, idx) => idx !== i);
    setFavorites(arr)
  }

  if (loading) {
    return (<C.THMDB />)
  }

  return (
    <S.Container>
      <S.Row>
        <S.RowImage>
          <S.Logo onClick={handleHomePage} display={display} />
        </S.RowImage>
        <S.RowSearchAndProfile>
          <S.HeartIcon onClick={onClickDisplay} display={display} />
          <C.Search />
          <C.Profile />
          <S.ContainerFavorite display={display}>
            {favorites.length === 0 && <S.NotInterestedIcon />}
            {favorites.map((items, idx) => (
              <C.Favorites
                key={items?.id}
                title={items.title}
                src={img_url + items.poster_path}
                removeClick={() => removeFavorite(idx)}
                moreClick={() => handleTMDB(items.id)}
              />
            ))}
          </S.ContainerFavorite>
        </S.RowSearchAndProfile>
      </S.Row>
    </S.Container>


  )
}

export default Header;