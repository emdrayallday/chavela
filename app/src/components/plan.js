import React from 'react'
import { compose, flatten, repeat, map } from 'ramda'
import { Card, Button, Image, Segment, List, Checkbox } from 'semantic-ui-react'

const Lifting = props => {
  console.log('props', props)
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
            })
          )(props.plan)}{' '}
        </Card.Group>
      </Segment>
    </div>
  )
}

export default Lifting
