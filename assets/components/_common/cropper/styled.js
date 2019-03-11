import styled from 'styled-components'

export const Container = styled.div`

`

export const ModalContainer = styled.div`
    height: 80vh;
    width: 90vw;
    position: relative;
    padding: 25px;
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.09);
    border-radius: 2.5px;
    background-color: #ffffff;
    border: solid 0.3px rgba(210, 210, 210, 0.51);
`

export const CropperContainer = styled.div`
    width: 100%;
    height: calc(100% - 160px);
    margin-top: 20px;
`

export const PreviewContainer = styled.div`
    width: 100%;
    height: 139px;
    display: flex;
    flex-direction: row;

    &>.button-container {
        align-items: center;
        display: flex;
    }
`

export const ImagePreview = styled.div`
    width: 280px;
    height: 139px;
    overflow: hidden;  
    border: 1px solid;
    margin-right: 20px;
`