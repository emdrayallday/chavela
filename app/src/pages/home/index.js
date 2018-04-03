import React from 'react'
import MenuBar from '../../components/menu'
import { Container, Header, Button, Icon, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
const Home = props => {
  return (
    <div>
      <MenuBar active="home" history={props.history} />
      <Container text textAlign="center">
        <Header
          as="h1"
          content="CHAVELA"
          textAlign="center"
          style={{
            fontSize: '4em',
            fontWeight: 'normal',
            marginBottom: 0,
            marginTop: '1em',
            color: 'white',
            textShadow: '2px 2px #E03997'
          }}
        />
        <Header
          as="h2"
          content="What are you waiting for?!"
          textAlign="center"
          style={{
            fontSize: '1.7em',
            fontWeight: 'normal',
            marginTop: '.5em'
          }}
        />
        <Link to="/wizard">
          <Button
            secondary
            size="huge"
            animated="fade"
            style={{ marginBottom: '3.5em' }}
          >
            <Button.Content visible>Start Challenge</Button.Content>
            <Button.Content hidden>
              <Icon name="theme" />
            </Button.Content>
          </Button>
        </Link>
      </Container>
      <Segment inverted basic padded="very">
        <Container text>
          <Header as="h5" content="Welcome" color="pink" />
          <p>
            Chavela is a resource for complete beginners that want to start
            getting in shape.<br />
            <br />Start the challenge and answer the questions. Based on the
            answers you will receive guidance on what to do. <br />
            <br /> On the resources page, there is a list of useful websites and
            youtube channels that have endless amounts of information with
            scientific based evidence.
          </p>
        </Container>
      </Segment>
    </div>
  )
}

export default Home
