import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Tabs, Tab } from 'react-bootstrap'

import Input from '../../elements/Input'
import Select from '../../elements/Select'
import FormHead from '../../elements/FormHead'
import Button from '../../elements/Button'
import { FlexBox, FlexRow, ModalContainer } from '../../elements/StyleDialogs/styled'
import ModalDialog from '../../ModalDialog'
import { Container } from './styled'

import ProjectInfo from './ProjectInfo'
import ContactDetails from './ContactDetails'
import WorkPerformed from './WorkPerformed'

class CreateProject extends React.Component {
  state = {
    fieldValue: {}, // значение полей формы
    error: {},
    key: 'ProjectInfo',
  };

  changeInputHandler = event => {
    var name = event.target.name ? event.target.name : event.target.id,
      val = event.target.value;
    this.setState(prevState => ({
      fieldValue: { ...prevState.fieldValue, [name]: val, },
      error: { ...prevState.error, [name]: false },
    }));
  }

  create = () => {
    if (this.validate()) {
      let { fieldValue } = this.state;
      apiSaveManager(fieldValue)
        .then(res => this.props.onHide())
    }
  }

  validate = () => {
    var val = this.state.fieldValue;

    if (!val.middleName
      || !val.firstName
      || !val.lastName
      || !val.phone
      || !val.mail
      || !val.login
      || !val.newPassword
      || val.newPassword !== val.confirmPassword
    ) {
      this.setState(prevSate => (
        {
          error: {
            ...prevSate.error,
            middleName: !prevSate.fieldValue.middleName,
            firstName: !prevSate.fieldValue.firstName,
            lastName: !prevSate.fieldValue.lastName,
            phone: !prevSate.fieldValue.phone,
            mail: !prevSate.fieldValue.mail,
            login: !prevSate.fieldValue.login,
            newPassword: !prevSate.fieldValue.newPassword,
            confirmPassword: prevSate.fieldValue.newPassword !== prevSate.fieldValue.confirmPassword
          }
        }
      ))
      return false;
    }
    return true;
  }

  render() {
    return (
      <ModalDialog show={this.props.show} onHide={this.props.onHide}>
        <ModalContainer>
          <Container>
            <FormHead text="Создать проект" handleClick={this.props.onHide} />
            <div className="create-project-container-tabs">
            <Tabs
            id="CreateProjectTabs"
            activeKey={this.state.key}
            onSelect={key=>this.setState({key})}
            className="CreateProjectTabs"
            >
              <Tab eventKey="ProjectInfo" title="Информация о проекте">
                <ProjectInfo />
              </Tab>
              <Tab eventKey="ContactDetails" title="Контактные данные">
                <ContactDetails />
              </Tab>
              <Tab eventKey="WorkPerformed" title="Выполняемые работы">
                <WorkPerformed />
              </Tab>
            </Tabs>
            </div>
            <div className="form-submit">
              <Button onClick={this.create} value="Сохранить" />
            </div>
          </Container>
        </ModalContainer>
      </ModalDialog>
    );
  }
}


CreateProject.props = {
  show: PropTypes.bool,
  onHide: PropTypes.func,
}

CreateProject.state = {
  fieldValue: PropTypes.shape(
    {
      middleName: PropTypes.string,
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      phone: PropTypes.string,
      mail: PropTypes.string,
      login: PropTypes.string,
      newPassword: PropTypes.string,
    }
  ),
  error: PropTypes.shape(
    {
      middleName: PropTypes.bool,
      firstName: PropTypes.bool,
      lastName: PropTypes.bool,
      phone: PropTypes.bool,
      mail: PropTypes.bool,
      login: PropTypes.bool,
      loginIsExist: PropTypes.bool,
      newPassword: PropTypes.bool,
    }
  )
}

//const mapStateToProps = state => ({
//  troops: getTroopList(state),
//})

export default connect(null)(CreateProject)
