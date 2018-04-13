import React from 'react'
import { connect } from 'react-redux'
import { CURRENT_NAME, EDIT_PROGRAM } from '../../constants'
import {
  map,
  contains,
  filter,
  flatten,
  isNil,
  path,
  merge,
  find,
  pathOr,
  drop
} from 'ramda'
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
  console.log(props)
  const program = flatten(props.program.program)
  console.log('PROGRAM', program)
  return (
    <div>
      <PersonalMenu history={props.history} name="Mark" />
      <Lifting plan={program} toggle={() => props.toggle(program)} />
    </div>
  )
}

function mapStateToProps(state) {
  return {
    program: state.program
  }
}
function mapActionToProps(dispatch) {
  return {
    toggle: program => {
      const remove = drop(1, program)
      console.log(remove)
      return dispatch({ type: EDIT_PROGRAM, payload: remove })
    }
  }
}
const connector = connect(mapStateToProps, mapActionToProps)
export default connector(Personalize)
