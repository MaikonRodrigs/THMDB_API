import React, { useContext } from 'react'
import Homepage from './pages/Homepage'
import { GlobalStyle } from './styles/GlobalStyles'
import { UseDataContext } from '@/hooks/useContext'

function App() {
  return (
    <UseDataContext>
      <GlobalStyle />
      <Homepage />
    </UseDataContext>
  )
}

export default App
