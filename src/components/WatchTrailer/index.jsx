import React from 'react';
import * as S from './styles'
import * as C from '@/components/index'

function WatchTrailer({ display, closeIcon, loading }) {
  const ID_VIDEO = 'Ow_BHT3biQ8'
  return (
    <>
      {loading ?
        < S.Container display={display} >
          <S.CloseIcon onClick={closeIcon} />
          <iframe
            width="860"
            height="605"
            src={`https://www.youtube.com/embed/${ID_VIDEO}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen={true}
          />
        </S.Container >
        :
        <C.Loading />
      }
    </>
  )
}

export default WatchTrailer