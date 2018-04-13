import React from 'react'
import MenuBar from './menu'
import { Segment, Container, Dropdown, Header, Icon } from 'semantic-ui-react'
const ModifyBar = props => {
  return (
    <div>
      <MenuBar active="program" history={props.history} />
      <Segment basic>
        <Container textAlign="center">
          <Header as="h2" icon>
            <Icon name="settings" />
            Program Guide
          </Header>
        </Container>
        <Container textAlign="center">
          <Dropdown
            placeholder="Select one or more"
            multiple
            selection
            options={props.options}
            value={props.goal.activities}
            onChange={(e, { value }) => props.onChange('activities', value)}
          />
        </Container>{' '}
      </Segment>
    </div>
  )
}
export default ModifyBar
