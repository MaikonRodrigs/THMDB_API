import React, { useContext, useEffect } from 'react';
import * as S from './styles';
import * as C from '@/components/index';
import { GlobalContext } from '@/hooks/useContext'

function More({ idVideo, display, closeClick, randomClick, rating,
  favoriteClick, playClick, addClick, background, title, description, colorFavoriteIcon = false, displayPlay
}) {
  const { movie } = useContext(GlobalContext)
  const genres = movie.genres

  return (
    <S.Container display={display}>
      <S.Row background={background}>
        <S.CloseIcon onClick={closeClick} />
        <S.RandomIcon onClick={randomClick} />
        <S.RowFavorite>
          <S.HeartIcon onClick={favoriteClick} colorFavoriteIcon={colorFavoriteIcon} />
          <S.AddCircleIcon onClick={addClick} />
        </S.RowFavorite>
        <S.Title>{title}</S.Title>
        <S.StarIcon />
        <S.Rated>{rating}%</S.Rated>
        <S.Genres>
          {genres && (
            (genres.map(item => (
              <C.Tips>{item.name}</C.Tips>
            )))
          )}
        </S.Genres>
        {movie.lenght === 0 && <C.THMDB />}
        <S.IFRAME
          displayPlay={displayPlay}
          width="550"
          height="360"
          src={`https://www.youtube.com/embed/${idVideo}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
        <S.Description>{description}</S.Description>
        <S.Play2Icon onClick={playClick} displayPlay={displayPlay} />
        <S.CloseIcon2 displayPlay={displayPlay} onClick={playClick} />
      </S.Row>
    </S.Container>
  )
}

export default More