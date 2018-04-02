import { NEXT_STEP, PREV_STEP, CURRENT_NAME } from '../constants'
import { merge } from 'ramda'
const initialState = {
  _id: 'wizardObject',
  currentStep: ['started', 'one', 'two', 'three', 'finished'],
  started: {
    step: 0,
    question: 'Welcome to the Chavela wizard',
    statement: 'Enter your name',
    img: '/galaxyquest.png',
    desc: 'After entering your name proceed to the next step!'
  },
  one: {
    step: 1,
    question: 'Around how much weight would you like to lose?',
    buttons: {
      type: 'single choice',
      options: [
        {
          text: '10 or less lbs',
          value: 10,
          selected: false
        },
        {
          text: '10 to 30 lbs',
          value: 20,
          selected: false
        },
        {
          text: 'More than 30 lbs',
          value: 30,
          selected: false
        }
      ]
    },
    img: '/shia.png',
    desc:
      'Losing fat is hard, make sure to keep your goals realistic. The amount of weight you want to lose will affect your program dramatically!'
  },
  two: {
    step: 2,
    question: 'In what amount of time would you like to lose the weight?',
    buttons: {
      type: 'single choice',
      options: [
        {
          text: '3 Months',
          value: 3,
          selected: false
        },
        {
          text: '6 Months',
          value: 6,
          selected: false
        },
        {
          text: '12 Months',
          value: 12,
          selected: false
        }
      ]
    },
    img: '/johnlocke.png',
    desc:
      'The amount of time you have will affect how intense the training will be. If you have a less amount of time you will need to cut calories more than over a longer period of time'
  },
  three: {
    step: 3,
    question: 'How would you like to lose the weight?',
    buttons: {
      type: 'multiple choice',
      options: [
        {
          text: 'Running',
          value: 'run',
          selected: false
        },
        {
          text: 'Walking',
          value: 'walk',
          selected: false
        },
        {
          text: 'Lifting Weights',
          value: 'gym',
          selected: false
        },
        {
          text: 'Active Hobbies',
          value: 'active',
          selected: false
        }
      ]
    },
    img: '/muscles.jpg',
    desc:
      'For the best results, it is always important to add cardiovascular activity and weight training together. However if you do not have access to a gym you can still lose weight.'
  },
  finished: {
    desc: 'Confirm Results',
    img: '/success.jpg'
  }
}

export const advisorWizard = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export const stepNumber = (state = 0, action) => {
  switch (action.type) {
    case NEXT_STEP:
      return state + 1
    case PREV_STEP:
      return state - 1
    default:
      return state
  }
}
export const form = (state = {}, action) => {
  switch (action.type) {
    case CURRENT_NAME:
      return merge(state, action.payload)
    default:
      return state
  }
}
