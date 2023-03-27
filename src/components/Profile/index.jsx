import React from 'react'
import * as S from './styles';

function Profile() {

  const imgAvatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoqWIPKg9kRQhn9r3qgpcRSACAXvg-dbTOWQiDN6b5ahLRZ-AU_ioL_uXv5Un0kNGPNhE&usqp=CAU'

  return (
    <S.Container>
      <S.Avatar src={imgAvatar} />
    </S.Container>
  )
}

export default Profile;