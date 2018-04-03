import React from 'react'
import { map, filter } from 'ramda'
import {
  List,
  Checkbox,
  Segment,
  Header,
  Grid,
  Container
} from 'semantic-ui-react'
const Walk = props => {
  const walking = map(t => {
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
  }, props.data)
  return (
    <div>
      <Segment>
        <Grid textAlign="center" verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as="h5">Walking 101</Header>
              <Container text textAlign="left">
                <p>
                  Walking is a great way to get started with losing weight if
                  you cannot handle running straight away. <br />
                  <br />To get started you should start walking daily.
                </p>
              </Container>
            </Grid.Column>
            <Grid.Column width={8}>{walking}</Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  )
}
export default Walk
