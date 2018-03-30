import React from 'react'
import MenuBar from '../../components/menu'
import { connect } from 'react-redux'
import { Grid, Image } from 'semantic-ui-react'
import { map, slice } from 'ramda'
const Resources = props => {
  return (
    <div>
      <MenuBar active="resources" />
      <Grid>
        <Grid.Row columns={2}>
          {map(
            r => (
              <Grid.Column>
                <Image src={r.img} />
              </Grid.Column>
            ),
            slice(0, 2, props.resources)
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
