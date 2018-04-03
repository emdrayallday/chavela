import React from 'react'
import { connect } from 'react-redux'
import { CURRENT_NAME } from '../../constants'
import { map, contains, filter, isEmpty, isNil } from 'ramda'
import {
  List,
  Header,
  Icon,
  Segment,
  Container,
  Dropdown,
  Grid,
  Sticky
} from 'semantic-ui-react'
import MenuBar from '../../components/menu'
import Walk from '../../components/walk'
import Run from '../../components/run'
import Gym from '../../components/gym'
import Active from '../../components/active'
const Program = props => {
  if (isEmpty(props.goal.activities) || isNil(props.goal.activities)) {
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
            />
          </Container>{' '}
        </Segment>
        you aint do da wizard
      </div>
    )
  } else if (
    contains('walk', props.goal.activities) &&
    props.goal.activities.length < 2
  ) {
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
            />
          </Container>{' '}
        </Segment>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Walk data={filter(t => contains('walk', t.tags), props.tasks)} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  } else if (
    contains('gym', props.goal.activities) &&
    props.goal.activities.length < 2
  ) {
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
            />
          </Container>{' '}
        </Segment>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Gym data={filter(t => contains('gym', t.tags), props.tasks)} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  } else if (
    contains('walk', props.goal.activities) &&
    contains('run', props.goal.activities) &&
    props.goal.activities.length < 3
  ) {
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
            />
          </Container>{' '}
        </Segment>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Walk data={filter(t => contains('walk', t.tags), props.tasks)} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Run data={filter(t => contains('run', t.tags), props.tasks)} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  } else if (
    contains('run', props.goal.activities) &&
    props.goal.activities.length < 2
  ) {
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
            />
          </Container>{' '}
        </Segment>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Run data={filter(t => contains('run', t.tags), props.tasks)} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  } else if (
    contains('walk', props.goal.activities) &&
    contains('run', props.goal.activities) &&
    contains('gym', props.goal.activities) &&
    props.goal.activities.length < 4
  ) {
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
            />
          </Container>{' '}
        </Segment>

        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Gym data={filter(t => contains('gym', t.tags), props.tasks)} />
            </Grid.Column>{' '}
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Run data={filter(t => contains('run', t.tags), props.tasks)} />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Walk data={filter(t => contains('walk', t.tags), props.tasks)} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  } else if (
    contains('active', props.goal.activities) &&
    props.goal.activities.length < 2
  ) {
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
            />
          </Container>{' '}
        </Segment>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Active
                data={filter(t => contains('active', t.tags), props.tasks)}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks,
    goal: state.form,
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
