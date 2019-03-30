import styled from 'styled-components'

export const Container = styled.div`
background-color: #ffffff;
  border: 0.3px solid rgba(210, 210, 210, 0.5099999904632568);
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.09000000357627869);
  width: 100%;
  min-height: 106px;
  padding: 20px;
  display: flex;
  align-items: start;
  justify-content: space-between;
  transition: all 0.3s ease-in-out;
  margin-bottom: 15px;
  cursor: pointer;

  @media only screen and (min-width: 1025px) {
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 60px -10px rgba(0, 0, 0, 0.6);
    }
  }
`

export const Manager = styled.div`

`

export const Organization = styled.div`

`

export const Name = styled.div`

`

export const Addres = styled.div`

`
