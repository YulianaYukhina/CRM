import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 54px;
    position: relative;    
    display: flex;


    label{
        position: absolute;
        bottom: 20px;
        line-height: 1.43;
        letter-spacing: 0.2px;
        font-size: 14px;
        font-weight: 300;
        transition: transform 0.3s ease;
        color: #1b1e2d;
    }

    select{
        width: 100%;
        height: 40px;
        border-radius: 1px;
        border: none;
        border-bottom: 1px solid #d8d8d8;
        color: #1b1e2d;
        &:focus{
            outline: none;
            border-bottom: 1px solid #28a2a2;
        }
        &>:first-child {
            display: none;
        }
    }

    & span.red-star {
        font-family: OpenSans;
        font-size: 12px;
        font-weight: bold;
        color: #e85e5e;
        padding-left: 3px;
    }

    &.animate label {
        transform: translateY(-25px);
        height: 12px;
        font-size: 12px !important;
        font-weight: 300;
        color: #aaaaaa;
    }

    &.invalid {
        select {
            outline: none;
            border-bottom: 1px solid #b73f4e !important;
        }

        .layer {
            display: inline;
        }
    }

    .layer {
        display: none;
        position: absolute;
        bottom: 20px;
        right: -2px;
        font-weight: 500;
        line-height: 1.43;
        letter-spacing: 0.2px;
        color: #b73f4e;
    }
}
`