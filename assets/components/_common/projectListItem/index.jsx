import React from 'react'

import { Container, Addres, Name, Organization, Manager } from './styled'

class ProjectListItem extends React.Component {
  render() {
    return (
      <Container>
        <div>
          <Organization>Сбербанк</Organization>
          <Name>Стройка Сбербанк 2000</Name>
        </div>
        <Manager>Иванов И. И.</Manager>
        <Addres>г. Москва, ул. Федорова, д.164, стр. 1</Addres>
      </Container>
    )
  }
}
export default ProjectListItem
