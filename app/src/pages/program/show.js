import React from 'react'
import { connect } from 'react-redux'
import { CURRENT_NAME } from '../../constants'
import { map, contains, filter, isEmpty, isNil } from 'ramda'
import {
  List,
  Header,
  Icon,
  Segment,
  Container,
  Dropdown,
  Grid,
  Sticky
} from 'semantic-ui-react'
import Lifting from '../../components/plan'
import PersonalMenu from '../../components/personal-menu'
const Personalize = props => {
  return (
    <div>
      <PersonalMenu history={props.history} name="Mark" />
      <Lifting />
    </div>
  )
}

export default Personalize
