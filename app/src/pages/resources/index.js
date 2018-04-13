import React from 'react'
import MenuBar from '../../components/menu'
import { connect } from 'react-redux'
import { Card, Button, Image, Segment } from 'semantic-ui-react'
import { map } from 'ramda'
const Resources = props => {
  return (
    <div>
      <MenuBar active="resources" history={props.history} />
      <Segment attached style={{ backgroundColor: 'Gainsboro' }}>
        <Card.Group>
          {map(
            r => (
              <Card fluid color="violet">
                <Card.Content>
                  <Image floated="right" size="mini" src={r.img} />
                  <Card.Header>{r.name}</Card.Header>
                  <Card.Meta>{r.shortDesc}</Card.Meta>
                  <Card.Description>{r.desc}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <div className="ui two buttons">
                    <Button basic color="teal" href={r.url} target="_blank">
                      Website
                    </Button>
                  </div>
                </Card.Content>
              </Card>
            ),
            props.resources
          )}
        </Card.Group>
      </Segment>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    resources: state.resources
  }
}
const connector = connect(mapStateToProps)
export default connector(Resources)
