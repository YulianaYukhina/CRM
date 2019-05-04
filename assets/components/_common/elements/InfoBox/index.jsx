import React from 'react'
import { Container, Label, Text } from './styled'

const InfoBox = (props) => {
    var style = props.style || {};
    return(
        <Container style={style}>
            <Label>
                {props.label}
            </Label>
            <Text>
                {props.text}
            </Text>
        </Container>
    );
}

export default InfoBox