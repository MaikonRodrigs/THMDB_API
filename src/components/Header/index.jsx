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
    const arr = favorites.filter((item, idx) => idx !== i);
    setFavorites(arr)
    console.log(arr)
    if (favorites.length === 1) {
      localStorage.clear()
      location.reload()
    }
  }

  function clearCache() {
    localStorage.clear()
    location.reload()
    setFavorites([])
  }

  function showModal(id) {
    fetchMovie(id)
    setOpenMovie(!openMovie)
    movieIdOpen(id)
  }

  function getIsNull() {
    if (getFav === null) {
      if (favorites?.length === 0) {
        return <S.NotInterestedIcon />
      }
    } else if (getFav.length === 0) {
      return <S.NotInterestedIcon />
    }
    console.log(favorites)
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


            {favorites && getFav && (
              favorites?.map((items, idx) => (
                <C.Favorites
                  key={items?.id}
                  title={items?.title}
                  src={img_url + items?.poster_path}
                  moreClick={() => handleTMDB(items?.id)}
                  cardClick={() => showModal(items?.id)}
                  removeClick={() => removeFavorite(idx)}
                />
              ))
            )}

            {getFav && favorites.length < 1 && (
              <C.Favorites
                key={getFav?.id}
                title={getFav?.title}
                src={img_url + getFav?.poster_path}
                removeClick={clearCache}
                moreClick={() => handleTMDB(getFav?.id)}
                cardClick={() => showModal(getFav?.id)}
              />
            )}


            {/* {favorites.length >= 1 || favorites.length != 0 ?
              favorites?.map((items, idx) => (
                <C.Favorites
                  key={items?.id}
                  title={items?.title}
                  src={img_url + items?.poster_path}
                  moreClick={() => handleTMDB(items?.id)}
                  cardClick={() => showModal(items?.id)}
                  removeClick={() => removeFavorite(idx)}
                />
              ))
              :
              <C.Favorites
                key={getFav?.id}
                title={getFav?.title}
                src={img_url + getFav?.poster_path}
                removeClick={clearCache}
                moreClick={() => handleTMDB(getFav?.id)}
                cardClick={() => showModal(getFav?.id)}
              />
            } */}

            {/* ///////// */}

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
            <S.DeleteFavorites />
          </S.ContainerFavorite>
        </S.RowSearchAndProfile>
      </S.Row>
    </S.Container>


  )
}

export default Header;