import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Container, Segment } from 'semantic-ui-react'

const MenuBar = props => {
  let isActive = props.active
  return (
    <Segment inverted textAlign="center" vertical>
      <Container>
        <Menu inverted secondary pointing>
          <Link to="/">
            <Menu.Item active={isActive === 'home'}>Home</Menu.Item>
          </Link>
          <Link to="/resources">
            <Menu.Item active={isActive === 'resources'}>Resources</Menu.Item>
          </Link>
          <Link to="/success-stories">
            <Menu.Item active={isActive === 'success'}>
              Success Stories
            </Menu.Item>
          </Link>
        </Menu>
      </Container>
    </Segment>
  )
}

export default MenuBar
