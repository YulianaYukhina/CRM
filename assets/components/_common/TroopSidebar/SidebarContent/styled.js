import styled from 'styled-components'

export const Container = styled.div`
    padding: 0px 10px 0px 10px;
    min-width: 110px;

    &>h3{
        cursor: pointer;

        &:hover{
            font-weight: bold;
        }
    }

    .TroopItem{
        display: flex;
        justify-content: center;
        margin: 10px 0 10px 0;
        cursor: pointer;

        &:hover, &.selected{
            font-weight: bold;
        }
    }
`