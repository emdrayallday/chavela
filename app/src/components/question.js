import React from 'react'
import { Card, Input, Image, Icon, Button, Dropdown } from 'semantic-ui-react'
import { isNil } from 'ramda'
const QuestionCard = props => {
  const { statement, question, img, desc, buttons, step } = props.data

  if (step === 0) {
    return (
      <Card raised color="purple" centered>
        <Image src={img} />
        <Card.Content textAlign="center">
          <Card.Header>{question}</Card.Header>
        </Card.Content>
        <Card.Meta>{statement}</Card.Meta>
        <Input
          icon="users"
          iconPosition="left"
          placeholder="Enter Name"
          value={props.value}
          onChange={props.onChange}
        />
        <Card.Content>
          <Card.Description>{desc}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button basic color="red" onClick={props.cancel}>
            Cancel
          </Button>
          <Button basic color="green" floated="right" onClick={props.next}>
            Proceed
          </Button>
        </Card.Content>
      </Card>
    )
  } else if (step === 1 || step === 2) {
    return (
      <Card raised color="purple" centered>
        <Image src={img} size="small" centered />
        <Card.Content textAlign="center">
          <Card.Header>{question}</Card.Header>
        </Card.Content>
        <Card.Meta>
          <Dropdown
            options={buttons.options}
            placeholder="Choose an option"
            selection
            fluid
            value={props.value}
            onChange={props.onChange}
          />
        </Card.Meta>

        <Card.Content>
          <Card.Description>{desc}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button basic color="red" onClick={props.prev}>
            Previous
          </Button>
          <Button basic color="green" floated="right" onClick={props.next}>
            Proceed
          </Button>
        </Card.Content>
      </Card>
    )
  } else if (step === 3) {
    return (
      <Card raised color="purple" centered>
        <Image src={img} />
        <Card.Content textAlign="center">
          <Card.Header>{question}</Card.Header>
        </Card.Content>
        <Card.Meta>
          <Dropdown
            placeholder="Do it"
            fluid
            multiple
            selection
            options={buttons.options}
            value={props.value}
            onChange={props.onChange}
          />
        </Card.Meta>

        <Card.Content>
          <Card.Description>{desc}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button basic color="red" onClick={props.prev}>
            Previous
          </Button>
          <Button basic color="green" floated="right" onClick={props.submit}>
            Submit
          </Button>
        </Card.Content>
      </Card>
    )
  }
}

export default QuestionCard
