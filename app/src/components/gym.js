import React from 'react'
import { map, filter } from 'ramda'
import { List, Checkbox, Container } from 'semantic-ui-react'
const Gym = props => {
  const workoutA = map(t => {
    return (
      <List>
        <List.Item>
          <List.Content floated="left">
            <Checkbox key={t.name} />{' '}
          </List.Content>
          <List.Content>
            <List.Header as="a" href={t.url} target="_blank">
              {t.name}
            </List.Header>
            <List.Description>{t.setRep}</List.Description>
          </List.Content>
        </List.Item>
      </List>
    )
  }, filter(t => t.name === 'Squat' || t.name === 'Bench Press' || t.name === 'Barbell Row', props.data))

  const workoutB = map(t => {
    return (
      <List divided relaxed>
        <List.Item>
          <List.Content floated="left">
            <Checkbox key={t.name} />{' '}
          </List.Content>
          <List.Content>
            <List.Header as="a" href={t.url} target="_blank">
              {t.name}
            </List.Header>
            <List.Description>{t.setRep}</List.Description>
          </List.Content>
        </List.Item>
      </List>
    )
  }, filter(t => t.name === 'Squat' || t.name === 'Deadlift' || t.name === 'Overhead Press', props.data))
  return (
    <div>
      <Container>
        Workout 3 times a week on MWF, Alternate workouts A and B. <br />A{
          workoutA
        }
        B{workoutB}{' '}
      </Container>
    </div>
  )
}
export default Gym
