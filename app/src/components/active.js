import React from 'react'
import { map } from 'ramda'
import { List, Segment, Grid, Header, Container } from 'semantic-ui-react'
const Active = props => {
  const hobbies = map(t => {
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
      <Segment
        style={props.style.style ? { backgroundColor: 'Gainsboro' } : null}
        basic
      >
        {' '}
        <Grid textAlign="center" verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as="h5">Active Hobbies</Header>
              <Container text textAlign="left">
                <p>
                  One of the best ways to excercise and not feel like you are
                  doing a chore of working out is to develop a hobbie that is
                  active. <br />
                  <br />Not only will this help you burn more calories in a day,
                  you will also be developing a skill. It shows that people with
                  active hobbies are happier while also being overall healthier.
                </p>
              </Container>
            </Grid.Column>
            <Grid.Column width={8}> {hobbies} </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  )
}
export default Active
