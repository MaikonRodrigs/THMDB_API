import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from './pages/Homepage'
import Search from './pages/SearchPage'
import Header from '@/components/Header'
import { GlobalStyle } from './styles/GlobalStyles'
import { UseDataContext } from '@/hooks/useContext'

function App() {
  return (
    <UseDataContext>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/search" element={<Search />} />
        </Routes>
        <GlobalStyle />
      </BrowserRouter>
    </UseDataContext>
  )
}

export default App
