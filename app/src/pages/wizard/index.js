import React from 'react'
import { Container, Segment } from 'semantic-ui-react'
import QuestionCard from '../../components/question'
import { connect } from 'react-redux'
import { NEXT_STEP, PREV_STEP, CURRENT_NAME } from '../../constants'
const Wizard = props => {
  console.log('WHICH STEP', props.stepNumber)
  const currentStep = props.steps.currentStep[props.stepNumber]

  if (currentStep === 'started') {
    return (
      <Container>
        <QuestionCard
          data={props.steps.started}
          cancel={() => props.cancel(props.history)}
          next={() => props.next(props.stepNumber)}
          value={props.form.userName}
          onChange={e => props.onChange('userName', e.target.value)}
        />
      </Container>
    )
  } else if (currentStep === 'one') {
    return (
      <Container>
        <QuestionCard
          data={props.steps.one}
          next={() => props.next(props.stepNumber)}
          prev={() => props.prev(props.stepNumber)}
          value={props.form.goal}
          onChange={(e, { value }) => props.onChange('goal', value)}
        />
      </Container>
    )
  } else if (currentStep === 'two') {
    return (
      <Container>
        <QuestionCard
          data={props.steps.two}
          next={() => props.next(props.stepNumber)}
          prev={() => props.prev(props.stepNumber)}
          value={props.form.time}
          onChange={(e, { value }) => props.onChange('time', value)}
        />
      </Container>
    )
  } else if (currentStep === 'three') {
    return (
      <Container>
        <QuestionCard
          data={props.steps.three}
          next={() => props.next(props.stepNumber)}
          prev={() => props.prev(props.stepNumber)}
          value={props.form.activities}
          onChange={(e, { value }) => props.onChange('activities', value)}
        />
      </Container>
    )
  } else {
    return (
      <Container>
        <QuestionCard
          data={props.steps.finished}
          formData={props.form}
          prev={() => props.prev(props.stepNumber)}
        />
      </Container>
    )
  }
}

function mapStateToProps(state) {
  return {
    steps: state.advisorWizard,
    stepNumber: state.stepNumber,
    form: state.form
  }
}

function mapActionToProps(dispatch) {
  return {
    cancel: history => history.push('/'),
    next: stepNumber => {
      dispatch({ type: NEXT_STEP, payload: stepNumber })
    },
    prev: stepNumber => {
      dispatch({ type: PREV_STEP, payload: stepNumber })
    },
    onChange: (field, value) =>
      dispatch({ type: CURRENT_NAME, payload: { [field]: value } })
  }
}

const connector = connect(mapStateToProps, mapActionToProps)

export default connector(Wizard)
