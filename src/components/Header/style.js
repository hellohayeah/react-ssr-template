import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg)
  }
`

export const HeaderStyle = styled.div`
  background-color: #282c35;
  color: white;
  padding: 20px;
  .logo {
    width: 300px;
    animation: ${rotate} 10s linear infinite;
  }
`
