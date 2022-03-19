import React from 'react'
import Home from './pages/Home'
import Game from './pages/Game'
import styled from 'styled-components'
import { Routes, Route } from 'react-router-dom'
const Container = styled.div`
  
`

function App() {

  return (
    <Container>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </Container>
  );
}

export default App;
