import React from 'react';
import * as S from './styles';


function Movies({
  img, title, backClick, found = 1, founds = 1
}) {

  function foundLength() {
    if (found <= 1) {
     return 'item'
    } else {
      return 'items'
    }
  }

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
              <S.SectionResults>
                <S.SearchIcon />
                <S.Description>SUA PESQUISA...</S.Description>
              </S.SectionResults>
              <S.FoundItems> {found} and {founds} {foundLength()} found</S.FoundItems>
            </S.SearchItems>
          </S.Content>
        </S.Row>
      </S.Container>
    </>
  )
}

export default Movies;
