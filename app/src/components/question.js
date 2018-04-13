import React from 'react'
import { Card, Input, Image, Button, Dropdown } from 'semantic-ui-react'

const QuestionCard = props => {
  const { statement, question, img, desc, buttons, step } = props.data

  if (step === 0) {
    return (
      <div
        style={{
          position: 'absolute',
          backgroundImage: "url('/star.jpg')",
          backgroundSize: 'cover',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,

          height: '100%',
          width: '100%'
        }}
      >
        <Card raised color="purple" centered style={{ marginTop: '25%' }}>
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
            error={props.value === '' || props.value === undefined}
          />
          <Card.Content>
            <Card.Description>{desc}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Button basic color="red" onClick={props.cancel}>
              Cancel
            </Button>
            <Button
              basic
              color="green"
              floated="right"
              onClick={props.next}
              disabled={props.value === '' || props.value === undefined}
            >
              Proceed
            </Button>
          </Card.Content>
        </Card>
      </div>
    )
  } else if (step === 1) {
    return (
      <div
        style={{
          position: 'absolute',
          backgroundImage: "url('/star.jpg')",
          backgroundSize: 'cover',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,

          height: '100%',
          width: '100%'
        }}
      >
        <Card raised color="purple" centered style={{ marginTop: '25%' }}>
          <Image src={img} size="small" centered />
          <Card.Content textAlign="center">
            <Card.Header>{question}</Card.Header>
          </Card.Content>
          <Card.Meta>
            <Dropdown
              options={buttons.options}
              placeholder="Choose an option"
              fluid
              selection
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
      </div>
    )
  } else if (step === 2) {
    return (
      <div
        style={{
          position: 'absolute',
          backgroundImage: "url('/star.jpg')",
          backgroundSize: 'cover',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,

          height: '100%',
          width: '100%'
        }}
      >
        <Card raised color="purple" centered style={{ marginTop: '25%' }}>
          <Image src={img} size="small" centered />
          <Card.Content textAlign="center">
            <Card.Header>{question}</Card.Header>
          </Card.Content>
          <Card.Meta>
            <Dropdown
              options={buttons.options}
              placeholder="Choose an option"
              fluid
              selection
              value={props.value}
              onChange={props.onChange}
              error={
                (props.formData.goal === 30 && props.value < 12) ||
                (props.formData.goal === 20 && props.value < 6)
              }
            />
          </Card.Meta>

          <Card.Content>
            <Card.Description>{desc}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Button basic color="red" onClick={props.prev}>
              Previous
            </Button>
            <Button
              basic
              color="green"
              floated="right"
              onClick={props.next}
              disabled={
                (props.formData.goal === 30 && props.value < 12) ||
                (props.formData.goal === 20 && props.value < 6)
              }
            >
              Proceed
            </Button>
          </Card.Content>
        </Card>
      </div>
    )
  } else if (step === 3) {
    return (
      <div
        style={{
          position: 'absolute',
          backgroundImage: "url('/star.jpg')",
          backgroundSize: 'cover',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,

          height: '100%',
          width: '100%'
        }}
      >
        <Card raised color="purple" centered style={{ marginTop: '25%' }}>
          <Image src={img} />
          <Card.Content textAlign="center">
            <Card.Header>{question}</Card.Header>
          </Card.Content>
          <Card.Meta>
            <Dropdown
              placeholder="Select One or More"
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
            <Button
              basic
              color="green"
              floated="right"
              onClick={props.submit(props.history, props.formData)}
            >
              Submit
            </Button>
          </Card.Content>
        </Card>
      </div>
    )
  }
}

export default QuestionCard
