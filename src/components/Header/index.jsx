import React, { useContext, useEffect, useState } from 'react';
import * as S from './styles';
import * as C from '@/components/index'
import { useFetchMovie } from '@/services/RequestsApi'

import { useNavigate } from 'react-router-dom';

import { GlobalContext } from '@/hooks/useContext'

function Header() {
  const [display, setDisplay] = useState(false)

  const { img_url, loading, setLoading, favorites, setFavorites, openMovie, setOpenMovie, } = useContext(GlobalContext)

  const localStorageFavorite = localStorage.getItem('__favs')
  const getFav = (JSON.parse(localStorageFavorite))
  console.log(getFav)

  const { movie, fetchMovie } = useFetchMovie()

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
    const arr = favorites.filter((idx) => idx !== i);
    location.clear()
    location.reload()
    setFavorites(arr)
  }

  function getIsNull() {
    if (getFav === null) {
      if (favorites?.length === 0) {
        return <S.NotInterestedIcon />
      }
    } else if (getFav.length === 0) {
      return <S.NotInterestedIcon />
    }
  }


  function showModal(id) {
    setOpenMovie(!openMovie)
    movieIdOpen(id)
    fetchMovie(id)
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
            {getIsNull()}
            {favorites.length > 0 ?
              favorites?.map((items, idx) => (
                <C.Favorites
                  key={items?.id}
                  title={items?.title}
                  src={img_url + items?.poster_path}
                  removeClick={() => removeFavorite(idx)}
                  moreClick={() => handleTMDB(items?.id)}
                  cardClick={() => showModal(movie?.id)}

                />
              ))
              :
              <C.Favorites
                key={getFav?.id}
                title={getFav?.title}
                src={img_url + getFav?.poster_path}
                removeClick={() => removeFavorite(getFav.id)}
                moreClick={() => handleTMDB(getFav?.id)}
                cardClick={() => showModal(movie?.id)}
              />
            }
            {/* {getFav ?
              <C.Favorites
                key={getFav?.id}
                title={getFav?.title}
                src={img_url + getFav?.poster_path}
                removeClick={() => removeFavorite(getFav.id)}
                moreClick={() => handleTMDB(getFav?.id)}
              />
              :
              favorites?.map((items, idx) => (
                <C.Favorites
                  key={items?.id}
                  title={items?.title}
                  src={img_url + items?.poster_path}
                  removeClick={() => removeFavorite(idx)}
                  moreClick={() => handleTMDB(items?.id)}
                />
              ))
            } */}
          </S.ContainerFavorite>
        </S.RowSearchAndProfile>
      </S.Row>
    </S.Container>


  )
}

export default Header;