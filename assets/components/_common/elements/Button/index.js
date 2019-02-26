import React from 'react'
import { Container } from './styled'

type ButtonProps = {
    value: string,
    onClick: Function,
}

const Button = ({
    value,
    onClick,
}: ButtonProps) => {
    return (
        <Container onClick={onClick}>
            {value}
        </Container>
    )
}

export default Button