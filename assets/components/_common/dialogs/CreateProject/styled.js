import styled from 'styled-components'

export const Container = styled.div`
  .flex-row{
    & > div{
      //width: 225px;
    }
  }
  .CreateProjectTabs{
    flex-direction: row;
    & > a{
      margin-right: 10px;
    }
  }

  .create-project-container-tabs{
    margin-top: 20px;
  }


  .address-text{
    width: 100%;
    //margin-top: 19px;
    font-size: 16px;
    line-height: 1.43;
    letter-spacing: 0.2px;
    color: #1b1e2d;

    label {
      font-weight: normal;
      font-size: 14px;
      font-weight: normal;
      line-height: 1.43;
      letter-spacing: 0.2px;
      color: #1b1e2d;
    }

    textarea {
      width: 100%;
      height: 130px;
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
  }
`
