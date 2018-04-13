import React from 'react'
import { Menu, Container, Segment } from 'semantic-ui-react'

const MenuBar = props => {
  let isActive = props.active
  return (
    <Segment inverted textAlign="center" attached>
      <Container>
        <Menu inverted secondary pointing style={{ color: 'white' }}>
          <Menu.Item
            active={isActive === 'home'}
            onClick={() => props.history.push('/')}
          >
            Home
          </Menu.Item>
          <Menu.Item
            active={isActive === 'program'}
            onClick={() => props.history.push('/program')}
          >
            Program
          </Menu.Item>
          <Menu.Item
            active={isActive === 'resources'}
            onClick={() => props.history.push('/resources')}
          >
            Resources
          </Menu.Item>

          <Menu.Item
            active={isActive === 'success'}
            onClick={() => props.history.push('/success-stories')}
          >
            Success
          </Menu.Item>
        </Menu>
      </Container>
    </Segment>
  )
}

export default MenuBar
