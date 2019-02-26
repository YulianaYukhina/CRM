import styled from 'styled-components'

export const Container = styled.button`
    height: 35px;
    width: 150px;
    border-radius: 5px;
    border: 1px solid #aaaaaa;
    background-color: #fff;

    text-align: center;
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 0.5;
    color: #aaaaaa;
    padding: 9px 10px;
    cursor: pointer;

    &:hover {
        border: 1px solid #061c3f;
        color: #061c3f;   
    }
`