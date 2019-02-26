import styled from 'styled-components'

export const Container = styled.div`
    font-size: 25px;
    line-height: 1.12;
    letter-spacing: 0.4px;
    color: #14162c;
    position: relative;
}

 .close {
    position: absolute;
    right: 0px;
    top: 8px;
    width: 14px;
    height: 14px;
    opacity: 0.3;
    cursor: pointer;

    &:hover {
        opacity: 1;
    }

    &:before, 
    &:after {
        position: absolute;
        content: ' ';
        height: 14px;
        width: 1px;
        background-color: #333;
    }

    &:before {
        transform: rotate(45deg);
    }

     &:after {
        transform: rotate(-45deg);
    }
}
`