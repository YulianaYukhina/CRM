import React from 'react'

import { Container } from './styled'

class Comment extends React.Component {

  render() {
    let { name, message } = this.props;
    return (
      <Container>
        <div style={{color: this.props.isYour ? 'green': 'black', fontWeight: 'bolder', minWidth: '80px'}}>
          {name}:
        </div>
        <div>
          "{message}"
        </div>
      </Container>
    );
  }
}

export default Comment
