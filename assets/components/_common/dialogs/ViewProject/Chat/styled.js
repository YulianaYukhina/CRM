import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 20px;
`
export const MessageBoxContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;

  textarea {
    width: 100%;
    margin-right: 10px;
    //height: 130px;
    border: 1px solid #d8d8d8;
    resize: none;
    font-size: 16px;
    font-weight: 300;
    line-height: 1.43;
    letter-spacing: 0.2px;
    color: #1b1e2d;
    font-family: PFEncoreSansPro-Light;

    &::placeholder {
      font-size: 16px;
      padding-left:4px;
    }
  }
`

export const CommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
`
