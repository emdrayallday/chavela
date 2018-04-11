import React from 'react'
import { connect } from 'react-redux'
import { CURRENT_NAME } from '../../constants'
import { map, contains, filter, flatten, isNil, pluck } from 'ramda'
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
import Lifting from '../../components/plan'
import PersonalMenu from '../../components/personal-menu'
const Personalize = props => {
  console.log('props', props)
  return (
    <div>
      <PersonalMenu history={props.history} name="Mark" />
      <Lifting plan={flatten(pluck('program', props.program))} />
    </div>
  )
}

function mapStateToProps(state) {
  return {
    program: state.programs
  }
}
const connector = connect(mapStateToProps)
export default connector(Personalize)
