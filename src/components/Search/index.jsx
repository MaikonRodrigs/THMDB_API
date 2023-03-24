import React from 'react';
import * as S from './styles';

function Search() {
  return (
    <S.Form>
      <S.Input
        type="text"
        required
        placeholder='Search movies...'
      />
      <S.SearchIcon />
    </S.Form>
  )
}

export default Search;