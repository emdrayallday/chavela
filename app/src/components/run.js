import React from 'react'
import { map, filter } from 'ramda'
import { List, Checkbox, Segment } from 'semantic-ui-react'
const Run = props => {
  const running = map(t => {
    return (
      <List divided relaxed>
        <List.Item>
          <List.Content>
            <List.Header>{t.name}</List.Header>
            <List.Description>{t.setRep}</List.Description>
          </List.Content>
        </List.Item>
      </List>
    )
  }, filter(t => t.setRep === '1 mile', props.data))
  const running2 = map(t => {
    return (
      <List divided relaxed>
        <List.Item>
          <List.Content>
            <List.Header>{t.name}</List.Header>
            <List.Description>{t.setRep}</List.Description>
          </List.Content>
        </List.Item>
      </List>
    )
  }, filter(t => t.setRep === '2 miles', props.data))

  const running3 = map(t => {
    return (
      <List divided relaxed>
        <List.Item>
          <List.Content>
            <List.Header>{t.name}</List.Header>
            <List.Description>{t.setRep}</List.Description>
          </List.Content>
        </List.Item>
      </List>
    )
  }, filter(t => t.setRep === '3 miles', props.data))
  return (
    <div>
      <Segment>{running}</Segment>
    </div>
  )
}
export default Run
