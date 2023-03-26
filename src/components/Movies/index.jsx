import React from 'react';
import * as S from './styles';


function Movies({
  img, handleMovie, title, rating, year, playTrailer,
  description, backClick
}) {

  return (
    <>
      <S.Container img={img}>
        <S.Row>
          <S.Content>
            <S.SearchRow>
              <S.LeftIcon onClick={backClick} />
              <S.Title>
                {title}
              </S.Title>
            </S.SearchRow>
            <S.SearchItems>
              <S.SearchIcon />
              <S.Description>SUA PESQUISA...</S.Description>
            </S.SearchItems>
          </S.Content>
        </S.Row>
      </S.Container>
    </>
  )
}

export default Movies;
