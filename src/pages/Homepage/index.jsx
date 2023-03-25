import React, { useState, useContext, useEffect } from 'react';
import * as C from '@/components/index';
import * as S from './styles'



function Homepage() {
  const [movie, setMovie] = useState(true)
  const background = 'https://image.tmdb.org/t/p/original/bLJTjfbZ1c5zSNiAvGYs1Uc82ir.jpg'
  // const background = 'https://image.tmdb.org/t/p/original/wybmSmviUXxlBmX44gtpow5Y9TB.jpg'

  function handleMovie() {
    setMovie(!movie)
    console.log(movie)
  }

  return (
    <>
      <S.Container>
        <S.FirstSeaction>
          <C.Header />
          <C.Dashboard />
        </S.FirstSeaction>
        <C.Cards
          onClick={handleMovie}
        />
      </S.Container>
      <C.More display={movie} onClick={handleMovie} background={background} />
    </>

  )
}

export default Homepage;