import React from 'react'
import MenuBar from './menu'
import {
  Segment,
  Container,
  Dropdown,
  Header,
  Icon,
  Button
} from 'semantic-ui-react'
import { isEmpty } from 'ramda'
const ModifyBar = props => {
  return (
    <div>
      {' '}
      <MenuBar active="program" history={props.history} />{' '}
      <Button
        floated="left"
        style={{ position: 'absolute' }}
        size="mini"
        color="pink"
        content="Back to your program"
        disabled={isEmpty(props.program)}
        onClick={() => props.history.push(`/program/${props.goal._id}`)}
      />
      <Segment basic>
        <center />
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
          />{' '}
        </Container>{' '}
      </Segment>
    </div>
  )
}
export default ModifyBar
