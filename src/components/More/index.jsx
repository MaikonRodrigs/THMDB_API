import React, { useEffect, useState } from 'react';
import * as S from './styles';
import * as C from '@/components/index'

import useFetch from '@/hooks/useFetch'

function More({ display, onClick, background }) {
  const [namedUser, setNamedUser] = useState([])

  const { request } = useFetch()

  const apiURL = 'https://api.themoviedb.org/3/'
  const key = '?api_key=84d0793ccff883a64299ac274e043b36'
  const language = 'pt-BR'
  const region = 'BR'
  const query = 'shazam'

  useEffect(() => {
    const slice = 3
    async function fetchData() {
      const { response, json } = await request(`${apiURL}search/movie${key}&language=${language}&query=${query}`)
      const named = json.results.slice(0, `${slice}`)
      setNamedUser(named)
    }
    // fetchData()
  }, [query])

  return (
    <S.Contents>
      <S.Container display={display}>
        <S.CloseIcon onClick={onClick} />
        <S.Row background={background}>
          <S.RowCard>
            {/* <C.Cards /> */}
          </S.RowCard>
        </S.Row>
        <S.Title>{namedUser[1]?.title}</S.Title>
      </S.Container>
    </S.Contents>
  )
}

export default More;