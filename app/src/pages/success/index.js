import React from 'react'
import MenuBar from '../../components/menu'
import { map, append, compose } from 'ramda'
import { Segment, Header } from 'semantic-ui-react'
import { Carousel } from 'react-responsive-carousel'
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'

const Success = props => {
  return (
    <div>
      <MenuBar active="success" history={props.history} />
      <Segment textAlign="center" attached basic>
        <Header content="Upload your before and after picture" />
      </Segment>
      <Segment inverted basic attached>
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
      <Segment
        textAlign="center"
        attached
        basic
        style={{ backgroundColor: 'Gainsboro' }}
        padded="very"
      >
        <Header
          content="Coming Soon..."
          color="pink"
          style={{
            fontSize: '5em',
            textShadow: '1px 1px black'
          }}
        />
      </Segment>
    </div>
  )
}

export default Success
