import styled from 'styled-components'

export const FlexBox = styled.div`
    display: flex;
    flex-direction: column;
    //width: 500px;
`

export const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 40px;
    justify-content: space-between;

    &>:first-child{
      margin-right: 40px;
    }

    & > * {
        width: 210px;
    }
`

export const ModalContainer = styled.div`
    padding: 30px;

    & .hidden {
            display: none;
        }

    & .error-message{
        width: 100%;
        height: 20px;
        font-size: 12px;
        letter-spacing: 0px;
        color: #b73f4e;
    }

    & span.red-star {
        font-size: 12px;
        font-weight: bold;
        color: #e85e5e;
        padding-left: 3px;
    }

    .form-submit{
        margin-top: 50px;
        display: flex;
        justify-content: flex-end;
    }
`