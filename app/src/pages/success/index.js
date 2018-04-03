import React from 'react'
import MenuBar from '../../components/menu'
import { Carousel } from 'react-responsive-carousel'
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'
const Success = props => {
  return (
    <div>
      <MenuBar active="success" history={props.history} />
      <Carousel
        showThumbs={false}
        showIndicators={false}
        autoPlay
        width="400px"
      >
        <div>
          <img src="spongebob-before.jpg" />
          <p className="legend">Sad Spongy</p>
        </div>
        <div>
          <img src="spongebob-after.jpg" />
          <p className="legend">AFTER CHAVELA!</p>
        </div>
        <div>
          <img src="assets/3.jpeg" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  )
}

export default Success
