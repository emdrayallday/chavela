import React from 'react'
import { map, filter } from 'ramda'
import { List, Checkbox, Segment, Grid, Header } from 'semantic-ui-react'
const Gym = props => {
  const workoutA = map(t => {
    return (
      <List>
        <List.Item>
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
      <Segment
        textAlign="center"
        style={props.style ? { backgroundColor: 'Gainsboro' } : null}
        basic
      >
        <Header as="h5">Alternate workouts A and B three times a week</Header>
        <Grid textAlign="center">
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as="h5">A</Header>
              {workoutA}
            </Grid.Column>
            <Grid.Column width={8}>
              <Header as="h5">B</Header>
              {workoutB}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  )
}
export default Gym
