import styled from 'styled-components'

export const HomeStyle = styled.div`
  color: palevioletred;
  font-size: 1.5em;
  background: papayawhip;
  padding: 4em;
  .btns-box {
    display: flex;
    justify-content: center;
  }
`
export const ButtonStyle = styled.button`
  border: 0;
  margin: 0 10px;
  cursor: pointer;
  color: ${props => (props.borderLinear ? '#4dc0c6' : 'white')};
  background: ${props =>
    props.borderLinear
      ? 'linear-gradient(#fff,#fff),linear-gradient(100deg,#4dcbc9,#4f89bb 51%,#495dc6)'
      : 'linear-gradient(100deg,#4dcbc9,#4f89bb 51%,#495dc6)'};
  ${props =>
    props.borderLinear
      ? `background-clip: padding-box,border-box;
        background-origin: padding-box,border-box;
        border: 1px solid transparent;`
      : null}
`
