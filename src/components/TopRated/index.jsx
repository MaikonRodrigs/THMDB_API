import React from 'react';
import * as S from './styles';
import * as C from '@/components/index';


function TopRated({ 
  img, handleMovie, title, rating, year, playTrailer, page,
  description, onClickPrevious, onClickNext, readMoreClick
}) {

  return (
    <>
      <S.Container img={img}>
        <S.Row>
          <S.Content>
            <S.RandomIcon onClick={handleMovie}/>
            <S.Title>{title}</S.Title>
            <S.RowInformation>
              <S.StarIcon />
              <S.Rated>{rating}%</S.Rated>
              <S.Year>{year}</S.Year>
            </S.RowInformation>
            <S.Butttons>
              <S.AddFavorites>
                <S.LikedIcon />
                Add Wishlist
              </S.AddFavorites>
              <S.WatchTrailer onClick={playTrailer}>
                <S.PlayIcon />
                Watch Trailer</S.WatchTrailer>
                <S.ReadMoreIcon onClick={readMoreClick} />
            </S.Butttons>
            <S.Description>{description}</S.Description>
          <C.Pagination onClickPrevious={onClickPrevious} onClickNext={onClickNext} page={page}/>
          </S.Content>
        </S.Row>
      </S.Container>
    </>
  )
}

export default TopRated;