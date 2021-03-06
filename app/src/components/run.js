import React from 'react'
import { map } from 'ramda'
import { List, Segment, Grid, Header, Container } from 'semantic-ui-react'
const Run = props => {
  const running = map(t => {
    return (
      <List key={t._id} divided relaxed>
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
              <Header as="h5">Running 101</Header>
              <Container text textAlign="left">
                <p>
                  Running daily is a great low intensity way to burn calories
                  and improve cardiovascular health. <br />
                  <br />To start off you should run around a mile a day and as
                  that gets easy you can increase the amount of distance.
                </p>
              </Container>
            </Grid.Column>
            <Grid.Column width={8}> {running} </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  )
}
export default Run
