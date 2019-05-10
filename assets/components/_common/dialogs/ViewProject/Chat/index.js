import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Button from '../../../elements/Button'

import Comment from './Comment'
import { Container, CommentsContainer, MessageBoxContainer } from './styled'
import { apiAddComment } from '../../../../../api/project'
import { apiGetUser } from '../../../../../api/user'


import { fetchGetProjectByID } from '../../../../../redux/modules/project'
import { getCreateProjectFields } from '../../../../../selectors/project'

class Chat extends React.Component {

  state = {
    message: '',
    name: '',
  }

  addComment = () => {
    apiAddComment({
      name: this.state.name,
      message: this.state.message,
      projectId: this.props.fields.id,
      type: this.props.commentType
    })
    this.setState({message: ''});
    this.props.fetchGetProjectByID(this.props.fields.id);
  }

  componentDidMount() {
    var self = this;
    apiGetUser().then(res => {
      self.setState({
        name: res.data.userName,
        userId: res.data.userId,
      })
    })
  }

  render() {
    var { message, userId } = this.state;
    var comments = this.props.fields.comments || [];
    comments = comments.filter(ob => ob.type == this.props.commentType)
    return (
      <Container>
        <CommentsContainer>
          {(comments && comments.map(ob => (<Comment isYour={userId == ob.userId} name={ob.userName} message={ob.message} />)))}
        </CommentsContainer>
        <MessageBoxContainer>
          <textarea
            id="message"
            placeholder="Введите сообщение"
            onChange={e => this.setState({ message: e.target.value })}
            tabIndex="10"
            maxLength="250"
            value={message}
            onKeyUp={(e) => {if(e.keyCode==13) this.addComment()}}
          />
          <Button value="Отправить" onClick={this.addComment} />
        </MessageBoxContainer>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  fields: getCreateProjectFields(state)
})

export default connect(mapStateToProps, {fetchGetProjectByID})(Chat)
