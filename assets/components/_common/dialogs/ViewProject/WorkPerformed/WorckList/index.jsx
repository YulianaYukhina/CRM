import React from 'React'

import { Container, Label, WorckListItem } from './styled'
import { FlexBox } from '../../../../elements/StyleDialogs/styled';

const WorckList = (props) => {
    return(
        <Container>
            <Label>{props.placeholder}</Label>
            <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                {(props.items && props.items.map(ob => {
                    return(
                        <WorckListItem>
                            {ob.text}
                        </WorckListItem>
                    );
                }))}
            </div>
        </Container>
    )
}

export default WorckList;
