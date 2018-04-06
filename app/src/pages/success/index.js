import React from 'react'
import MenuBar from '../../components/menu'
import { map, append, compose } from 'ramda'
import { Segment, Header } from 'semantic-ui-react'
import { Carousel } from 'react-responsive-carousel'
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'

const Success = props => {
  return (
    <div>
      <Header as="h1" />
      <MenuBar active="success" history={props.history} />
      <Segment attached inverted>
        <Carousel showThumbs={false} showIndicators={false} autoPlay>
          <div>
            <img src="spongebob-before.jpg" height="350px" />
            <p className="legend">Sad Spongy</p>
          </div>
          <div>
            <img src="spongebob-after.jpg" height="350px" />
            <p className="legend">AFTER CHAVELA!</p>
          </div>
          <div>
            <img src="stewie-before.jpg" height="350px" />
            <p className="legend">Fat Stewie</p>
          </div>
          <div>
            <img src="stewie-after.jpg" height="350px" />
            <p className="legend">AFTER CHAVELA!</p>
          </div>
        </Carousel>
      </Segment>
    </div>
  )
}

export default Success
