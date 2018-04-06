import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Container, Segment, Icon, Header } from 'semantic-ui-react'

const PersonalMenu = props => {
  let isActive = props.active
  return (
    <Segment inverted textAlign="center" attached>
      <Container>
        <Menu secondary style={{ color: 'white' }}>
          <Menu.Item onClick={() => props.history.push('/')}>
            <Icon inverted name="chevron circle left" />
          </Menu.Item>
          <Menu.Item active color="pink">{`${props.name} plan!`}</Menu.Item>
        </Menu>
      </Container>
    </Segment>
  )
}

export default PersonalMenu
