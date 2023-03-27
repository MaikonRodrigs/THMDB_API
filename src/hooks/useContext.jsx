import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const UseDataContext = ({ children }) => {
  const [search, setSearch] = useState("");
  const [openMovie, setOpenMovie] = useState(true)
  const [play, setPlay] = useState(false)
  const [loading, setLoading] = useState(false)
  const [current, setCurrent] = useState(0)
  const [updateBG, setUpdateBG] = useState(0)
  const [openPlay, setOpenPlay] = useState(true)

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(null);

  const [rated, setRated] = useState([])
  const [movies, setMovies] = useState([])
  const [movie, setMovie] = useState({})
  const [images, setImages] = useState({})
  const [favorites, setFavorites] = useState([])
  const [isFavorite, setIsFavorite] = useState(false)
  const [currentFavorite, setCurrentFavorite] = useState('')

  const URL = import.meta.env.VITE_API_URL
  const API_KEY = import.meta.env.VITE_API_KEY
  const LANGUAGE = import.meta.env.VITE_API_LANGUAGE
  const REGION = import.meta.env.VITE_API_REGION
  const img_url = 'https://image.tmdb.org/t/p/original'

  return (
    <GlobalContext.Provider value={{
      setSearch, search,
      setOpenMovie, openMovie,
      setPlay, play,
      setLoading, loading,
      setRated, rated,
      setMovies, movies,
      setMovie, movie,
      setImages, images,
      setCurrent, current,
      setUpdateBG, updateBG,
      setOpenPlay, openPlay,
      setData, data,
      setError, error,
      setStatus, status,
      setFavorites, favorites,
      setIsFavorite, isFavorite,
      setCurrentFavorite, currentFavorite,
      img_url,
      API_KEY,
      URL,
      LANGUAGE,
      REGION,
    }}>
      {children}
    </GlobalContext.Provider>
  );
};
