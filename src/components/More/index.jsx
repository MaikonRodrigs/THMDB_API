import React, { useContext } from 'react';

import { GlobalContext } from '@/hooks/useContext'
import * as S from './styles';
import * as C from '@/components/index';


function More({ idVideo, display, closeClick, randomClick,
  favoriteClick, playClick, addClick, background, title, description, colorFavoriteIcon, displayPlay
}) {
  const { movie } = useContext(GlobalContext)
  const genres = movie.genres

  return (
    <S.Container display={display}>
      <S.Row background={background}>
        <S.CloseIcon onClick={closeClick} />
        <S.RandomIcon onClick={randomClick} />
        <S.HeartIcon onClick={favoriteClick} colorFavoriteIcon={colorFavoriteIcon} />
        <S.AddCircleIcon onClick={addClick}/>
        <S.Title>{title}</S.Title>
        <S.Genres>
          {genres && (
            (genres.map(item => (
              <C.Tips>{item.name}</C.Tips>
            )))
          )}
        </S.Genres>
        {!idVideo === undefined && (
          <h1>Nao localizado</h1>
        )}
        {idVideo && (
          <S.IFRAME
            displayPlay={displayPlay}
            width="550"
            height="360"
            src={`https://www.youtube.com/embed/${idVideo}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
        )}
        <S.Description>{description}</S.Description>
        <S.Play2Icon onClick={playClick} displayPlay={displayPlay} />
        <S.CloseIcon2 displayPlay={displayPlay} onClick={playClick} />
      </S.Row>
    </S.Container>
  )
}

export default More