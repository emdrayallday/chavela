import React from 'react'
import MenuBar from '../../components/menu'
import { connect } from 'react-redux'
import {
  Grid,
  Image,
  Reveal,
  Container,
  Header,
  Segment
} from 'semantic-ui-react'
import { map, slice } from 'ramda'
const Resources = props => {
  return (
    <div>
      <MenuBar active="resources" history={props.history} />
      <Grid columns={2} celled>
        <Grid.Row centered columns={1}>
          {map(
            r => (
              <Grid.Column>
                {' '}
                <Image src={r.img} size="medium" floated="left" />
                <Header as="h2">{r.name}</Header>
                <p>{r.desc}</p>
              </Grid.Column>
            ),
            slice(2, 3, props.resources)
          )}
        </Grid.Row>

        <Grid.Row centered columns={3} verticalAlign="middle">
          {map(
            r => (
              <Grid.Column>
                <Image src={r.img} size="medium" />
              </Grid.Column>
            ),
            slice(3, 6, props.resources)
          )}
        </Grid.Row>
        <Grid.Row centered columns={2} verticalAlign="middle">
          {map(
            r => (
              <Grid.Column>
                <Image src={r.img} size="medium" />
              </Grid.Column>
            ),
            slice(0, 2, props.resources)
          )}
        </Grid.Row>
        <Grid.Row centered columns={2} verticalAlign="middle">
          {map(
            r => (
              <Grid.Column>
                <Image src={r.img} size="medium" />
              </Grid.Column>
            ),
            slice(6, 8, props.resources)
          )}
        </Grid.Row>
      </Grid>
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
