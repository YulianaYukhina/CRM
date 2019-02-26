import React from 'react'
import { Container } from './styled'


const Button = ({
    value,
    onClick,
}) => {
    return (
        <Container onClick={onClick}>
            {value}
        </Container>
    )
}

export default Button
