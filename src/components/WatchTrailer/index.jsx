import React, { useContext } from 'react';
import * as S from './styles'

function WatchTrailer({ display, onClick, idVideo }) {

  return (
    <>
      < S.Container display={display} >
        <S.CloseIcon onClick={onClick} />
        <iframe
          width="860"
          height="605"
          src={`https://www.youtube.com/embed/${idVideo}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
      </S.Container >
    </>
  )
}

export default WatchTrailer