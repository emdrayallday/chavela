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
import ModifyBar from '../../components/program-header'
const Program = props => {
  if (isEmpty(props.goal.activities) || isNil(props.goal.activities)) {
    return (
      <div>
        <ModifyBar
          history={props.history}
          options={props.options}
          goal={props.goal}
          onChange={props.onChange}
        />

        <p> you aint do da wizard</p>
      </div>
    )
  } else if (
    contains('walk', props.goal.activities) &&
    props.goal.activities.length < 2
  ) {
    return (
      <div>
        <ModifyBar
          history={props.history}
          options={props.options}
          goal={props.goal}
          onChange={props.onChange}
        />

        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Walk
                data={filter(t => contains('walk', t.tags), props.tasks)}
                style
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  } else if (
    contains('walk', props.goal.activities) &&
    contains('gym', props.goal.activities) &&
    props.goal.activities.length < 3
  ) {
    return (
      <div>
        <ModifyBar
          history={props.history}
          options={props.options}
          goal={props.goal}
          onChange={props.onChange}
        />

        <Grid>
          {' '}
          <Grid.Row>
            <Grid.Column>
              <Gym
                data={filter(t => contains('gym', t.tags), props.tasks)}
                style
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Walk
                data={filter(t => contains('walk', t.tags), props.tasks)}
                style={false}
              />
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
        <ModifyBar
          history={props.history}
          options={props.options}
          goal={props.goal}
          onChange={props.onChange}
        />

        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Gym
                data={filter(t => contains('gym', t.tags), props.tasks)}
                style
              />
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
        <ModifyBar
          history={props.history}
          options={props.options}
          goal={props.goal}
          onChange={props.onChange}
        />

        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Walk
                data={filter(t => contains('walk', t.tags), props.tasks)}
                style
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Run
                data={filter(t => contains('run', t.tags), props.tasks)}
                style={false}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  } else if (
    contains('walk', props.goal.activities) &&
    contains('run', props.goal.activities) &&
    contains('active', props.goal.activities) &&
    props.goal.activities.length < 4
  ) {
    return (
      <div>
        <ModifyBar
          history={props.history}
          options={props.options}
          goal={props.goal}
          onChange={props.onChange}
        />

        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Walk
                data={filter(t => contains('walk', t.tags), props.tasks)}
                style
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Run
                data={filter(t => contains('run', t.tags), props.tasks)}
                style={false}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Active
                data={filter(t => contains('active', t.tags), props.tasks)}
                style
              />
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
        <ModifyBar
          history={props.history}
          options={props.options}
          goal={props.goal}
          onChange={props.onChange}
        />

        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Run
                data={filter(t => contains('run', t.tags), props.tasks)}
                style
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  } else if (
    contains('run', props.goal.activities) &&
    contains('gym', props.goal.activities) &&
    props.goal.activities.length < 3
  ) {
    return (
      <div>
        <ModifyBar
          history={props.history}
          options={props.options}
          goal={props.goal}
          onChange={props.onChange}
        />

        <Grid>
          {' '}
          <Grid.Row>
            <Grid.Column>
              <Gym
                data={filter(t => contains('gym', t.tags), props.tasks)}
                style
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Run
                data={filter(t => contains('run', t.tags), props.tasks)}
                style={false}
              />
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
        <ModifyBar
          history={props.history}
          options={props.options}
          goal={props.goal}
          onChange={props.onChange}
        />

        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Gym
                data={filter(t => contains('gym', t.tags), props.tasks)}
                style
              />
            </Grid.Column>{' '}
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Run
                data={filter(t => contains('run', t.tags), props.tasks)}
                style={false}
              />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Walk
                data={filter(t => contains('walk', t.tags), props.tasks)}
                style
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  } else if (
    contains('walk', props.goal.activities) &&
    contains('run', props.goal.activities) &&
    contains('gym', props.goal.activities) &&
    contains('active', props.goal.activities) &&
    props.goal.activities.length < 5
  ) {
    return (
      <div>
        <ModifyBar
          history={props.history}
          options={props.options}
          goal={props.goal}
          onChange={props.onChange}
        />

        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Gym
                data={filter(t => contains('gym', t.tags), props.tasks)}
                style
              />
            </Grid.Column>{' '}
          </Grid.Row>{' '}
          <Grid.Row>
            <Grid.Column>
              <Walk
                data={filter(t => contains('walk', t.tags), props.tasks)}
                style={false}
              />
            </Grid.Column>
          </Grid.Row>{' '}
          <Grid.Row>
            <Grid.Column>
              <Run
                data={filter(t => contains('run', t.tags), props.tasks)}
                style
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Active
                data={filter(t => contains('active', t.tags), props.tasks)}
                style={false}
              />
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
        <ModifyBar
          history={props.history}
          options={props.options}
          goal={props.goal}
          onChange={props.onChange}
        />

        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Active
                data={filter(t => contains('active', t.tags), props.tasks)}
                style
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  } else if (
    contains('active', props.goal.activities) &&
    contains('walk', props.goal.activities) &&
    props.goal.activities.length < 3
  ) {
    return (
      <div>
        <ModifyBar
          history={props.history}
          options={props.options}
          goal={props.goal}
          onChange={props.onChange}
        />

        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Walk
                data={filter(t => contains('walk', t.tags), props.tasks)}
                style
              />
            </Grid.Column>
          </Grid.Row>{' '}
          <Grid.Row>
            <Grid.Column>
              <Active
                data={filter(t => contains('active', t.tags), props.tasks)}
                style={false}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  } else if (
    contains('active', props.goal.activities) &&
    contains('run', props.goal.activities) &&
    props.goal.activities.length < 3
  ) {
    return (
      <div>
        <ModifyBar
          history={props.history}
          options={props.options}
          goal={props.goal}
          onChange={props.onChange}
        />

        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Run
                data={filter(t => contains('run', t.tags), props.tasks)}
                style
              />
            </Grid.Column>
          </Grid.Row>{' '}
          <Grid.Row>
            <Grid.Column>
              <Active
                data={filter(t => contains('active', t.tags), props.tasks)}
                style={false}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  } else if (
    contains('active', props.goal.activities) &&
    contains('gym', props.goal.activities) &&
    contains('run', props.goal.activities) &&
    props.goal.activities.length < 4
  ) {
    return (
      <div>
        <ModifyBar
          history={props.history}
          options={props.options}
          goal={props.goal}
          onChange={props.onChange}
        />

        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Gym
                data={filter(t => contains('gym', t.tags), props.tasks)}
                style
              />
            </Grid.Column>
          </Grid.Row>{' '}
          <Grid.Row>
            <Grid.Column>
              <Run
                data={filter(t => contains('run', t.tags), props.tasks)}
                style={false}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Active
                data={filter(t => contains('active', t.tags), props.tasks)}
                style
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  } else if (
    contains('active', props.goal.activities) &&
    contains('gym', props.goal.activities) &&
    contains('walk', props.goal.activities) &&
    props.goal.activities.length < 4
  ) {
    return (
      <div>
        <ModifyBar
          history={props.history}
          options={props.options}
          goal={props.goal}
          onChange={props.onChange}
        />

        <Grid>
          {' '}
          <Grid.Row>
            <Grid.Column>
              <Walk
                data={filter(t => contains('walk', t.tags), props.tasks)}
                style
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Gym
                data={filter(t => contains('gym', t.tags), props.tasks)}
                style={false}
              />
            </Grid.Column>
          </Grid.Row>{' '}
          <Grid.Row>
            <Grid.Column>
              <Active
                data={filter(t => contains('active', t.tags), props.tasks)}
                style
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  } else if (
    contains('active', props.goal.activities) &&
    contains('gym', props.goal.activities) &&
    props.goal.activities.length < 3
  ) {
    return (
      <div>
        <ModifyBar
          history={props.history}
          options={props.options}
          goal={props.goal}
          onChange={props.onChange}
        />

        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Gym
                data={filter(t => contains('gym', t.tags), props.tasks)}
                style
              />
            </Grid.Column>
          </Grid.Row>{' '}
          <Grid.Row>
            <Grid.Column>
              <Active
                data={filter(t => contains('active', t.tags), props.tasks)}
                style={false}
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
