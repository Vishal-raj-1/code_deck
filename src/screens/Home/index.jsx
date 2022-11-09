import React from 'react'
import styled from 'styled-components'
import LeftComponent from './LeftComponent'

const StyledHome = styled.div`
  width: 100%;
  height: 100vh;
`

const Home = () => {
  return (
    <StyledHome>
      <LeftComponent />
    </StyledHome>
  )
}

export default Home