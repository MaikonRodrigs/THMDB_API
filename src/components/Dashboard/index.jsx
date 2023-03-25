import React, { useState } from 'react';
import * as C from '@/components/index'
import * as S from './styles';

function Dashboard() {

  const [play, setPlay] = useState(false)
  const [loading, setLoading] = useState(true)

  const description = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
  const imgBanner = 'https://image.tmdb.org/t/p/original/bLJTjfbZ1c5zSNiAvGYs1Uc82ir.jpg'
  // const imgBanner = 'https://image.tmdb.org/t/p/original/9BBTo63ANSmhC4e6r62OJFuK2GL.jpg'

  function playTrailer() {
    setLoading(false)
    setPlay(!play)
    setTimeout(() => {
      setLoading(true)
    }, 500)
  }
  function closeVideo() {
    setPlay(!play)
  }

  return (
    <>
      <S.Container img={imgBanner}>
        {/* <S.Banner src={imgBanner} /> */}
        <S.Row>
          <S.Content>
            <S.Title>Tomb Raider</S.Title>
            <S.RowInformation>
              <S.StarIcon />
              <S.StarIcon />
              <S.StarIcon />
              <S.StarIcon rated />
              <S.StarIcon rated />
              {/* <S.Rated>97%</S.Rated> */}
              <S.Year>2018</S.Year>
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
      <C.WatchTrailer display={play} closeIcon={closeVideo} loading={loading} />
    </>
  )
}

export default Dashboard;