import React from 'react'
import MenuBar from '../../components/menu'
import { Container, Header, Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
const Home = props => {
  return (
    <div>
      <MenuBar active="home" />
      <Container text textAlign="center">
        <Header
          as="h1"
          content="CHAVELA"
          textAlign="center"
          style={{
            fontSize: '4em',
            fontWeight: 'normal',
            marginBottom: 0,
            marginTop: '2em'
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
          <Button secondary size="huge" animated="fade">
            <Button.Content visible>Start Challenge</Button.Content>
            <Button.Content hidden>
              <Icon name="level down" />
            </Button.Content>
          </Button>
        </Link>
      </Container>
    </div>
  )
}

export default Home
