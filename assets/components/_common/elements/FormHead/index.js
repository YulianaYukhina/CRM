import React from 'react'

import { Container } from './styled'


const FormHead = (props) => {
    return <Container>
        {props.text}<a className="close" onClick={props.handleClick}></a>
    </Container>
}

export default FormHead