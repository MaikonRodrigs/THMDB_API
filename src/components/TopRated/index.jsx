import React from 'react';
import * as C from '@/components/index'
import * as S from './styles';




function TopRated({
  img, handleMovie, title, rating, year, playTrailer,
  description
}) {

  return (
    <>
      <S.Container img={img}>
        <S.Row>
          <S.Content>
            <S.RandomIcon onClick={handleMovie} />
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
            </S.Butttons>
            <S.Description>{description}</S.Description>
          </S.Content>
        </S.Row>
      </S.Container>
    </>
  )
}

export default TopRated;

{/* <S.Banner src={imgBanner} /> */ }
// const imgBanner = 'https://image.tmdb.org/t/p/original/bLJTjfbZ1c5zSNiAvGYs1Uc82ir.jpg'