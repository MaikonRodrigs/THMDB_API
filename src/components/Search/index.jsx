import React, { useContext } from 'react';
import * as S from './styles';
import { useFetchSearchMovies } from '@/services/RequestsApi'
import { GlobalContext } from '@/hooks/useContext'


function Search() {
  const { search, setSearch } = useContext(GlobalContext)
  const { movies, fetchAllMovies } = useFetchSearchMovies()


  function onSubmit(e) {
    e.preventDefault()
    fetchAllMovies(search)
    console.log('submit')
  }


  return (
    <S.Form onSubmit={onSubmit}>
      <S.Input
        type="text"
        required
        placeholder='Search movies...'
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <S.SearchIcon />
    </S.Form>
  )
}

export default Search;