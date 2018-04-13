import React from 'react'
import { connect } from 'react-redux'
import { EDIT_PROGRAM } from '../../constants'
import { flatten, drop } from 'ramda'

import Lifting from '../../components/plan'
import PersonalMenu from '../../components/personal-menu'

const Personalize = props => {
  const program = flatten(props.program.program)

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
      return dispatch({ type: EDIT_PROGRAM, payload: remove })
    }
  }
}
const connector = connect(mapStateToProps, mapActionToProps)
export default connector(Personalize)
