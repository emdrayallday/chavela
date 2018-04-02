import React from 'react'
import { connect } from 'react-redux'
import { CURRENT_NAME } from '../../constants'
import { map, contains, filter } from 'ramda'
import {
  List,
  Header,
  Icon,
  Segment,
  Container,
  Dropdown
} from 'semantic-ui-react'
import MenuBar from '../../components/menu'

import Gym from '../../components/gym'
const Program = props => {
  return (
    <div>
      <MenuBar active="program" history={props.history} />
      <Segment>
        <Container textAlign="center">
          <Header as="h2" icon>
            <Icon name="settings" />
            Program Settings
          </Header>
        </Container>
        <Container textAlign="center">
          <Dropdown
            placeholder="Modify Program"
            multiple
            selection
            options={props.options}
            value={props.goal.activities}
            onChange={(e, { value }) => props.onChange('activities', value)}
          />{' '}
        </Container>
        <Gym data={filter(t => contains('gym', t.tags), props.tasks)} />
      </Segment>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks,
    goal: state.form,
    date: state.date,
    options: state.advisorWizard.three.buttons.options
  }
}
function mapActionToProps(dispatch) {
  return {
    onChange: (field, value) =>
      dispatch({ type: CURRENT_NAME, payload: { [field]: value } })
  }
}

const connector = connect(mapStateToProps, mapActionToProps)

export default connector(Program)
