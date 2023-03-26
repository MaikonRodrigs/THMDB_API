import React, { useContext, useEffect, useState } from 'react';

import * as C from '@/components/index';
import * as S from './styles'

import { GlobalContext } from '@/hooks/useContext'
import { useFetchTopRated, useFetchSearchMovies, useFetchMovie } from '@/services/RequestsApi'


function Homepage() {
  const [openPlay, setOpenPlay] = useState(true)
  const {
    img_url,
    openMovie, setOpenMovie,
    play, setPlay,
    loading, setLoading,
    current, setCurrent,
    updateBG, setUpdateBG
  } = useContext(GlobalContext)


  const { rated, fetchTopRated, data } = useFetchTopRated()
  const { movies, fetchAllMovies } = useFetchSearchMovies()
  const { movie, fetchMovie } = useFetchMovie()

  useEffect(() => {
    fetchTopRated(19)
    RandomMovies()
    const CurrentRandom = Math.floor(Math.random() * 19);
    setCurrent(CurrentRandom)
  }, [])

  function RandomMovies() {
    setInterval(() => {
      handleMovie()
    }, 10000)
  }

  function handleMovie() {
    const CurrentRandom = Math.floor(Math.random() * 19);
    setCurrent(CurrentRandom)
  }

  function playTrailer(e) {
    e.preventDefault()
    fetchMovie(rated[current]?.id)
    setLoading(false)
    setPlay(!play)
    setTimeout(() => {
      setLoading(true)
    }, 500)
  }
  function moviePlayTrailer() {
    setOpenPlay(!openPlay)
  }

  function closeTrailer() {
    setPlay(!play)
    setOpenPlay(!openPlay)

  }

  function closeModal() {
    setOpenMovie(!openMovie)
    setUpdateBG(0)
    setOpenPlay(true)

  }

  function showModal(id) {
    setLoading(false)
    setOpenMovie(!openMovie)
    movieIdOpen(id)
    setTimeout(() => {
      setLoading(true)
    }, 2500)
  }

  function movieIdOpen(id) {
    fetchMovie(id)
  }

  function randomBackground() {
    const update = Math.floor(Math.random() * 5);
    setUpdateBG(update)
    console.log(updateBG)
  }

  function handleTMDB(id) {
    window.open(`https://www.themoviedb.org/movie/${id} target="_blank"`)
  }

  // const banner = 'https://image.tmdb.org/t/p/original//mbYQLLluS651W89jO7MOZcLSCUw.jpg'
  return (
    <>
      <S.Container>
        <S.FirstSeaction>
          <C.Header />
          <C.TopRated
            img={img_url + "/" + rated[current]?.poster_path}
            handleMovie={handleMovie}
            title={rated[current]?.title}
            rating={rated[current]?.vote_average}
            year={rated[current]?.release_date}
            playTrailer={playTrailer}
            description={rated[current]?.overview}
          />
        </S.FirstSeaction>
        <S.Cards>
          {data && (
            (rated.map((item) => (
              <C.Cards
                key={item?.id}
                img={img_url + "/" + item?.poster_path}
                onClick={() => showModal(item?.id)}
              />
            )))
          )}
        </S.Cards>
        <C.WatchTrailer
          display={play}
          onClick={closeTrailer}
          idVideo={movie?.videos?.results[0]?.key || '76600'}
          loading={loading}
        />
        {movies && (
          <>
            <C.More
              title={movie?.title}
              description={movie?.overview}
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
          </>
        )}
      </S.Container>
    </>

  )
}

export default Homepage;