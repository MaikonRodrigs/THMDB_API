import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '@/hooks/useContext'
import { useFetchTopRated, useFetchSearchMovies, useFetchMovie, useFetchImages } from '@/services/RequestsApi'
import useFetch from '@/hooks/useFetch'

import * as C from '@/components/index'
import * as S from './styles';


function Dashboard() {

  const [play, setPlay] = useState(false)
  const [loading, setLoading] = useState(true)
  const [current, setCurrent] = useState(0)


  const { request } = useFetch()

  const { rated, fetchTopRated } = useFetchTopRated()
  const { movies, fetchAllMovies } = useFetchSearchMovies()
  const { movie, fetchMovie } = useFetchMovie()
  const { images, fetchImage } = useFetchImages()

  const { search, img_url } = useContext(GlobalContext)


  useEffect(() => {
    fetchTopRated(19)
    const CurrentRandom = Math.floor(Math.random() * 19);
    setCurrent(CurrentRandom)
  }, [])


  function playTrailer(e) {
    e.preventDefault()
    fetchMovie(rated[current]?.id)
    console.log(movie?.videos?.results[current].key)
    setLoading(false)
    setPlay(!play)
    setTimeout(() => {
      setLoading(true)
    }, 500)
  }

  function closeVideo(e) {
    e.preventDefault()
    // fetchMovie(movie)
    setPlay(!play)
  }

  function handleMovie() {
    const CurrentRandom = Math.floor(Math.random() * 19);
    setCurrent(CurrentRandom)
    console.log(current)
  }
  return (
    <>
      <S.Container img={img_url + "/" + rated[current]?.poster_path}>
        <S.Row>
          <S.Content>
            <S.RandomIcon onClick={handleMovie} />
            <S.Title>{rated[current]?.title}</S.Title>
            <S.RowInformation>
              <S.StarIcon />
              <S.Rated>{rated[current]?.vote_average}%</S.Rated>
              <S.Year>{rated[current]?.release_date}</S.Year>
            </S.RowInformation>
            <S.Butttons>
              <S.AddFavorites>
                <S.LikedIcon />
                Add Wishlist
              </S.AddFavorites>
              <S.WatchTrailer onClick={(e, idx) => playTrailer(e, idx)}>
                <S.PlayIcon />
                Watch Trailer</S.WatchTrailer>
            </S.Butttons>
            <S.Description>{rated[current]?.overview}</S.Description>
          </S.Content>
        </S.Row>
      </S.Container>
      <C.WatchTrailer
        idVideo={movie?.videos?.results[0].key}
        display={play}
        closeIcon={closeVideo}
        loading={loading} />
    </>
  )
}

export default Dashboard;

{/* <S.Banner src={imgBanner} /> */ }
// const imgBanner = 'https://image.tmdb.org/t/p/original/bLJTjfbZ1c5zSNiAvGYs1Uc82ir.jpg'