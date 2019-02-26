import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  min-height: 100vh;

  @media only screen and (min-width: 1920px) {
    width: 1920px;
  }
`

export const FirstColumn = styled.div`
  min-width: 308px;
  width: 308px;
  padding: 28px 24px;

  @media only screen and (max-width: 480px) {
    min-width: 320px;
    width: 100%;
  }
`
export const SecondColumn = styled.div`
  width: calc(100vw - 308px);
  height: 100vh;
  background: ${props => props.image || ''};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;

  @media screen and (max-width: 480px) {
    display: none;
  }
`

export const LogoBlock = styled.div`
  width: 130px;
  margin-bottom: 35px;
`

export const PageTitleBlock = styled.div`
  font-size: 38px;
  color: #1b1e2d;
`
