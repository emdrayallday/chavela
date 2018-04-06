import React from 'react'
import { compose, flatten, repeat, map } from 'ramda'
import { Card, Button, Image, Segment, List, Checkbox } from 'semantic-ui-react'

const dead = {
  _id: 'task_deadlift',
  type: 'task',
  frequency: '3x',
  name: 'Deadlift',
  setRep: '5 x 5',
  completed: false,
  url: 'https://www.youtube.com/watch?v=6rRfS49JG6c',
  tags: ['gym', 'weight loss', 'strength', 'weights', 'deadlift']
}
const press = {
  _id: 'task_overhead-press',
  type: 'task',
  completed: false,
  frequency: '3x',
  name: 'Overhead Press',
  setRep: '5 x 5',
  url: 'https://www.youtube.com/watch?v=k4WoLZbonns',
  tags: ['gym', 'weight loss', 'strength', 'weights', 'overhead', 'press']
}

const bench = {
  _id: 'task_bench-press',
  type: 'task',
  completed: false,
  frequency: '3x',
  name: 'Bench Press',
  setRep: '5 x 5',
  url: 'https://www.youtube.com/watch?v=33mjoyc5JbE',
  tags: ['gym', 'weight loss', 'strength', 'weights', 'bench', 'press']
}
const squat = {
  _id: 'task_squat',
  type: 'task',
  completed: false,
  frequency: '3x',
  name: 'Squat',
  setRep: '5 x 5',
  url: 'https://www.youtube.com/watch?v=LLwiGkywKN4',
  tags: ['gym', 'weight loss', 'strength', 'weights', 'squat']
}

const row = {
  _id: 'task_barbell-row',
  frequency: '3x',
  type: 'task',
  completed: false,
  name: 'Barbell Row',
  setRep: '5 x 5',
  url: 'https://www.youtube.com/watch?v=KYaP3yCyHRY&t=522s',
  tags: ['gym', 'weight loss', 'strength', 'weights', 'row']
}
const a = {
  _id: 'workout_a',
  day: 'Monday',
  type: 'workout',
  completed: false,
  name: 'Workout A',

  workout: [squat, bench, row]
}
const b = {
  _id: 'workout_b',
  day: 'Wednesday',
  type: 'workout',
  completed: false,
  name: 'Workout B',

  workout: [squat, press, dead]
}

const c = {
  _id: 'workout_a',
  day: 'Friday',
  type: 'workout',
  completed: false,
  name: 'Workout A',

  workout: [squat, bench, row]
}

const d = {
  _id: 'workout_b',
  day: 'Monday',
  type: 'workout',
  completed: false,
  name: 'Workout B',

  workout: [squat, press, dead]
}
const e = {
  _id: 'workout_a',
  day: 'Wednesday',
  type: 'workout',
  completed: false,
  name: 'Workout A',

  workout: [squat, bench, row]
}
const f = {
  _id: 'workout_b',
  day: 'Friday',
  type: 'workout',
  completed: false,
  name: 'Workout B',

  workout: [squat, press, dead]
}
const lift = [a, b, c, d, e, f]
console.log('lift', lift)
const Lifting = props => {
  return (
    <div>
      <Segment attached style={{ backgroundColor: 'Gainsboro' }}>
        {' '}
        <Card.Group>
          {compose(
            map(w => {
              return (
                <Card centered fluid color="violet">
                  <Card.Content>
                    <Checkbox
                      style={{ float: 'right' }}
                      label="Completed"
                      checked={w.completed}
                      onClick={() => props.toggle}
                    />
                    <Card.Header>{w.day}</Card.Header>
                    <Card.Meta>{w.name}</Card.Meta>
                    <Card.Description>
                      {map(e => {
                        return (
                          <div>
                            <List>
                              <List.Item>
                                <List.Content floated="right">
                                  {e.setRep}
                                </List.Content>

                                <List.Content>{e.name}</List.Content>
                              </List.Item>
                            </List>
                          </div>
                        )
                      }, w.workout)}
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <div className="ui two buttons">
                      <Button basic color="teal" target="_blank">
                        Website
                      </Button>
                    </div>
                  </Card.Content>
                </Card>
              )
            }),
            flatten
          )(repeat(lift, 6))}{' '}
        </Card.Group>
      </Segment>
    </div>
  )
}

export default Lifting
