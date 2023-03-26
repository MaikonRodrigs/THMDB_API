import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';
import { GlobalContext } from '@/hooks/useContext'


function Search() {
  const { search, setSearch } = useContext(GlobalContext)
  const navigate = useNavigate()

  function onSubmit(e) {
    e.preventDefault()
    navigate(`/search?id=${search}`)
    setSearch('')
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