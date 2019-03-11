import styled from 'styled-components'

export const Container = styled.div`
    .flex-row{
        & > div{
            //width: 225px;
        }
    }

    .image{
      width: 130px;
      height: 140px;
      cursor: pointer;
      //margin-left: 40px;
    }

    .image-left-col{
      & > :nth-child(2){
        margin-top: 55px;
      }
    }

    .image-right-col{
      display: flex;
      flex-direction: column;
      align-items: center;
      &>button{
        margin-top: 10px;
      }
    }
`
