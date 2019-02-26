import styled from 'styled-components'

export const Container = styled.div`
    position: fixed;
    top: 60px;
    left: 0;

    .TroopSidebar{
        position: fixed !important;
        top: 51px !important;
        padding 5px;
        padding-top: 20px;
    }
`

export const SidebarButton = styled.div`
    position: fixed;
    top: 45vh;
    left: 5px;
    cursor: pointer;
    opacity: 0.5;

    &:hover{
            opacity: 1;
    }
`