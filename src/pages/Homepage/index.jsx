import React, { useState } from 'react';
import * as C from '@/components/index';
import * as S from './styles'


function Homepage() {

  const [movie, setMovie] = useState(true)

  function handleMovie() {
    setMovie(!movie)
  }
  return (
    <>
      <S.Container>
        <S.FirstSeaction>
          <C.Header />
          <C.Dashboard />
        </S.FirstSeaction>
        <C.Cards onClick={handleMovie} />
      </S.Container>
      <C.More display={movie} onClick={handleMovie} />
    </>

  )
}

export default Homepage;