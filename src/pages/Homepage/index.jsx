import React, { useContext, useEffect, useState } from 'react';

import * as C from '@/components/index';
import * as S from './styles'

import { GlobalContext } from '@/hooks/useContext'
import { useFetchTopRated, useFetchSearchMovies, useFetchMovie } from '@/services/RequestsApi'
import { useNavigate } from 'react-router-dom';


function Homepage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [currentFavorite, setCurrentFavorite] = useState('')
  const [isFavorite, setIsFavorite] = useState(false)

  const {
    img_url,
    openMovie, setOpenMovie,
    play, setPlay,
    loading, setLoading,
    current, setCurrent,
    updateBG, setUpdateBG,
    openPlay, setOpenPlay,
    status, setStatus,
    favorites, setFavorites
  } = useContext(GlobalContext)


  const { rated, fetchTopRated, data, results } = useFetchTopRated()
  const { movies, fetchAllMovies } = useFetchSearchMovies()
  const { movie, fetchMovie } = useFetchMovie()
  const navigate = useNavigate()
  const numberpage = currentPage.toString()

  useEffect(() => {

    fetchTopRated(16, currentPage)
    const CurrentRandom = Math.floor(Math.random() * 16);
    setCurrent(CurrentRandom)

  }, [currentPage])

  function handleMovie() {
    const CurrentRandom = Math.floor(Math.random() * 16);
    setCurrent(CurrentRandom)
  }

  function addFavorite() {
    // fetchMovie(id)

    if (!isFavorite) {
      setIsFavorite(!isFavorite)
      setCurrentFavorite(movie?.id)
      console.log(currentFavorite)
      console.log(movie?.id)
      if (currentFavorite === movie?.id) {
        console.log(favorites)
        setFavorites((old) => [...old])
      } else {
        setFavorites((old) => [...old, movie])
      }
    }
  }


  // function clearFavorites() {
  //   const arr = favorites.pop();
  //   setFavorites((old) => [...old, arr]
  // }

  function playTrailer(e) {
    e.preventDefault()
    fetchMovie(rated[current]?.id)
    setLoading(true)
    setPlay(!play)
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }

  function moviePlayTrailer() {
    setOpenPlay(!openPlay)
  }

  function closeTrailer() {
    setPlay(!play)
  }

  function closeModal() {
    setOpenMovie(!openMovie)
    setUpdateBG(0)
    setOpenPlay(true)
    setIsFavorite(false)
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

  function handleTMDB(id) {
    setLoading(true)
    setTimeout(() => {
      window.open(`https://www.themoviedb.org/movie/${id} target="_blank"`)
      setLoading(false)
    }, 1500)
  }

  function previousPage() {
    if (currentPage <= 1) return;
    const page = currentPage - 1
    setCurrentPage(page)
    fetchTopRated(16, currentPage)
    console.log(currentPage)
  }

  function nextPage() {
    const page = currentPage + 1
    setCurrentPage(page)
    fetchTopRated(16, currentPage)
    console.log(currentPage.toString())
    console.log(currentPage)
    navigate(`/?page=${currentPage}`)
  }

  if (status) {
    return (<C.THMDB />)
  }

  if (loading) {
    return (<C.THMDB />)
  }

  return (
    <>
      <S.Container>
        <S.FirstSeaction>
          <C.TopRated
            img={img_url + "/" + rated[current]?.poster_path}
            handleMovie={handleMovie}
            title={rated[current]?.title}
            rating={rated[current]?.vote_average}
            year={rated[current]?.release_date}
            playTrailer={playTrailer}
            description={rated[current]?.overview}
            onClickPrevious={previousPage}
            onClickNext={nextPage}
            readMoreClick={() => handleTMDB(rated[current]?.id)}
            page={numberpage}
          />
        </S.FirstSeaction>
        <S.Cards>
          {status && <C.Loading />}
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
              rating={movie?.vote_average}
              idVideo={movie?.videos?.results[0]?.key || ''}
              display={openMovie}
              displayPlay={openPlay}
              closeClick={closeModal}
              randomClick={randomBackground}
              favoriteClick={addFavorite}
              addClick={() => handleTMDB(movie.id)}
              playClick={moviePlayTrailer}
              colorFavoriteIcon={isFavorite}
              background={img_url + movie?.images?.backdrops[updateBG]?.file_path}
            />
          </>
        )}
      </S.Container>
    </>

  )
}

export default Homepage;