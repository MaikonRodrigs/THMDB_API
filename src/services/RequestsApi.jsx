import { useCallback, useContext, useState } from 'react';
import useFetch from '@/hooks/useFetch'
import { GlobalContext } from '@/hooks/useContext'


export const useFetchTopRated = () => {
  const { request, data } = useFetch()
  const { URL, API_KEY, LANGUAGE, rated, setRated } = useContext(GlobalContext)

  const fetchTopRated = useCallback(async (i = 5) => {
    const { json } = await request(`${URL}/movie/popular${API_KEY}&language=${LANGUAGE}`)
    const resulsrateds = json.results.slice(0, `${i}`)
    setRated(resulsrateds)
  }, [])

  return { rated, fetchTopRated, data }

}

export const useFetchSearchMovies = () => {
  const { request } = useFetch()
  const { URL, API_KEY, LANGUAGE, movies, setMovies } = useContext(GlobalContext)

  const fetchAllMovies = useCallback(async (query, i = 5) => {
    const { json } = await request(`${URL}search/movie${API_KEY}&language=${LANGUAGE}&query=${query}`)
    const resulsmovies = json.results.slice(0, `${i}`)
    setMovies(resulsmovies)
  }, [])

  return { movies, fetchAllMovies }

}

export const useFetchMovie = () => {
  const { request } = useFetch()
  const { URL, API_KEY, LANGUAGE, movie, setMovie } = useContext(GlobalContext)

  const fetchMovie = useCallback(async (movie_id) => {
    // const { json } = await request(`${URL}/movie/${movie_id}${API_KEY}&append_to_response=videos,images&language=${LANGUAGE}`)
    const { json } = await request(`${URL}/movie/${movie_id}${API_KEY}&append_to_response=videos,images`)
    const resultsmovie = json
    setMovie(resultsmovie)
  }, [])

  return { movie, fetchMovie }

}

export const useFetchImages = () => {

  const { request } = useFetch()
  const { URL, API_KEY, REGION, images, setImages } = useContext(GlobalContext)

  const fetchImage = useCallback(async (movie_id) => {
    const { json } = await request(`${URL}/movie/${movie_id}/images${API_KEY}&region=${REGION}`)
    const resultsimages = json
    setImages(resultsimages)
  }, [])

  return { images, fetchImage }

}