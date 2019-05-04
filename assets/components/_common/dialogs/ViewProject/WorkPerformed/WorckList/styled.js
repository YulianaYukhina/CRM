import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    position: relative;    
    display: flex;
    flex-direction: column;
`

export const Label = styled.div`
    margin-bottom: 10px;
    line-height: 1.43;
    letter-spacing: 0.2px;
    user-select: none;
    font-weight: 300;
    color: #aaaaaa;
    text-align: center;
`

export const WorckListItem = styled.div`
    margin-bottom: 10px;
    background-color: #f0f0f0;
    padding: 0 7px 0 7px
    border-radius: 10px;
    text-align: center;
    width: max-content;
`