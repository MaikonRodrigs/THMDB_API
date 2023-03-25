import React from 'react';
import * as S from './styles'
import * as C from '@/components/index'

function WatchTrailer({ display, closeIcon, loading, idVideo }) {
  return (
    <>
      {loading ?
        < S.Container display={display} >
          <S.CloseIcon onClick={closeIcon} />
          <iframe
            width="860"
            height="605"
            src={`https://www.youtube.com/embed/${idVideo}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
        </S.Container >
        :
        <C.Loading />
      }
    </>
  )
}

export default WatchTrailer