import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom'
import * as S from './styles';
import * as C from '@/components/index';

import { GlobalContext } from '@/hooks/useContext'
import { useFetchSearchMovies, useFetchMovie } from '@/services/RequestsApi'
import { MoviesAndTv } from 'styled-icons/fluentui-system-regular';


function Search() {

  const { data, movies, fetchAllMovies } = useFetchSearchMovies()
  const { movie, fetchMovie } = useFetchMovie()

  const {
    search, img_url,
    openMovie, setOpenMovie,
    current, setCurrent,
    play, setPlay,
    openPlay, setOpenPlay,
    updateBG, setUpdateBG,
    loading, setLoading

  } = useContext(GlobalContext)
  const [setParams] = useSearchParams()
  const query = setParams.get('id')
  const navigate = useNavigate()

  useEffect(() => {
    fetchAllMovies(query, 16)
  }, [query])

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])

  function handleMovie() {
    const CurrentRandom = Math.floor(Math.random() * 16);
    setCurrent(CurrentRandom)
  }

  function playTrailer() {
    fetchMovie(movies[current]?.id)
    setPlay(!play)
  }

  function handleHomePage() {
    navigate(`/`)
  }

  function closeModal() {
    setOpenMovie(!openMovie)
    setUpdateBG(0)
    setOpenPlay(true)

  }

  function showModal(id) {
    setOpenMovie(!openMovie)
    movieIdOpen(id)
  }

  function movieIdOpen(id) {
    fetchMovie(id)
  }

  function randomBackground() {
    const update = Math.floor(Math.random() * 5);
    setUpdateBG(update)
    
  }

  function moviePlayTrailer() {
    setOpenPlay(!openPlay)
  }

  function handleTMDB(id) {
    setLoading(true)
    setTimeout(() => {
      window.open(`https://www.themoviedb.org/movie/${id} target="_blank"`)
      setLoading(false)
    }, 1500)
  }

  if (loading) {
    return (<C.THMDB />)
  }

  return (
    <S.Container>
      <S.FirstSeaction>
        <C.Movies
          img={img_url + "/" + movies[current]?.poster_path}
          handleMovie={handleMovie}
          title={query}
          rating={movies[current]?.vote_average}
          year={movies[current]?.release_date}
          playTrailer={playTrailer}
          description={movies[current]?.overview}
          backClick={handleHomePage}
          founds={data?.total_results}
          found={movies?.length}
        />
      </S.FirstSeaction>

      <S.Cards>
        {movies.length === 0 && <p>Carregando...</p>}
        {movies.length > 1 && (
          movies.map((item) => (
            <C.Cards
              key={item?.id}
              img={img_url + "/" + item?.poster_path}
              onClick={() => showModal(item?.id)}
            />
          ))
        )}
      </S.Cards>
      <C.More
        title={movie?.title}
        description={movie?.overview}
        rating={movie?.vote_average}
        idVideo={movie?.videos?.results[0]?.key || ''}
        display={openMovie}
        displayPlay={openPlay}
        closeClick={closeModal}
        randomClick={randomBackground}
        favoriteClick
        addClick={() => handleTMDB(movie.id)}
        playClick={moviePlayTrailer}
        colorFavoriteIcon={true}
        background={img_url + movie?.images?.backdrops[updateBG]?.file_path}
      />
    </S.Container>
  )
}

export default Search;