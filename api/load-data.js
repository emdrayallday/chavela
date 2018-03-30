require('dotenv').config()
const PouchDB = require('pouchdb-core')
PouchDB.plugin(require('pouchdb-adapter-http'))
const db = new PouchDB(`${process.env.COUCH_URL}`)

db
  .bulkDocs([
    {
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
              value: [
                'Basketball',
                'Skateboarding',
                'Swimming',
                'Ultimate Frisbee',
                'Cycling'
              ],
              selected: false
            }
          ]
        },
        img: '/muscles.jpg',
        desc:
          'For the best results, it is always important to add cardiovascular activity and weight training together. However if you do not have access to a gym you can still lose weight.'
      },
      finished: {
        desc: 'YOU DID IT',
        img: '/success.jpg'
      }
    },

    {
      _id: 'task_bench-press',
      type: 'task',
      completed: false,
      frequency: '3x',
      name: 'Bench Press',
      setRep: '5 x 5',
      url: 'https://www.youtube.com/watch?v=33mjoyc5JbE',
      tags: ['gym', 'weight loss', 'strength', 'weights', 'bench', 'press']
    },
    {
      _id: 'task_squat',
      type: 'task',
      completed: false,
      frequency: '3x',
      name: 'Squat',
      setRep: '5 x 5',
      url: 'https://www.youtube.com/watch?v=LLwiGkywKN4',
      tags: ['gym', 'weight loss', 'strength', 'weights', 'squat']
    },
    {
      _id: 'task_deadlift',
      type: 'task',
      frequency: '3x',
      name: 'Deadlift',
      setRep: '5 x 5',
      completed: false,
      url: 'https://www.youtube.com/watch?v=6rRfS49JG6c',
      tags: ['gym', 'weight loss', 'strength', 'weights', 'deadlift']
    },
    {
      _id: 'task_overhead-press',
      type: 'task',
      completed: false,
      frequency: '3x',
      name: 'Overhead Press',
      setRep: '5 x 5',
      url: 'https://www.youtube.com/watch?v=k4WoLZbonns',
      tags: ['gym', 'weight loss', 'strength', 'weights', 'overhead', 'press']
    },
    {
      _id: 'task_barbell-row',
      frequency: '3x',
      type: 'task',
      completed: false,
      name: 'Pendalay Row',
      setRep: '5 x 5',
      url: 'https://www.youtube.com/watch?v=KYaP3yCyHRY&t=522s',
      tags: ['gym', 'weight loss', 'strength', 'weights', 'row']
    },
    {
      _id: 'task_run',
      type: 'task',
      frequency: 'daily',
      completed: false,
      name: 'Run',
      setRep: '1 Mile',
      tags: ['weight loss', 'run', 'cardio', 'endurance']
    },
    {
      _id: 'task_walk',
      type: 'task',
      frequency: 'daily',
      name: 'Walk',
      completed: false,
      setRep: '30 - 60 Minutes',
      tags: ['weight loss', 'walk', 'cardio', 'endurance']
    },
    {
      _id: 'task_sled-sprint',
      type: 'task',
      frequency: '2x',
      name: 'Sled Sprint',
      completed: false,
      url: 'https://www.youtube.com/watch?v=C9nw2JY30JI',
      setRep: '6-12 Rounds of 30 - 60 Meter Pushes',
      tags: ['weight loss', 'run', 'cardio', 'endurance']
    },
    {
      _id: 'task_active-hobbies',
      type: 'task',
      frequency: 'daily',
      name: 'Active Hobbies',
      desc: [
        'Basketball',
        'Skateboarding',
        'Swimming',
        'Ultimate Frisbee',
        'Riding a Bike',
        'Dancing',
        'Yoga',
        'Hiking',
        'Rollerblading',
        'Martial Arts'
      ],
      tags: [
        'weight loss',
        'run',
        'cardio',
        'endurance',
        'hobbies',
        'active',
        'sports'
      ]
    },
    {
      _id: 'resource_lift-big-eat-big',
      name: 'Lift Big Eat Big',
      type: 'resource',
      shortDesc: 'LBEB provides articles on all aspects of fitness',
      desc:
        'Lift Big Eat Big’s mission is to help you reach your fitness goals with evidence-based programming, experienced coaching and a community that welcomes lifters from all walks of life.',
      img:
        'http://liftbigeatbig.com/wp-content/uploads/2015/11/LBEB-Banner-1.png',
      url: 'http://liftbigeatbig.com/'
    },

    {
      _id: 'resource_nerd-fitness',
      name: 'Nerd Fitness',
      type: 'resource',
      shortDesc: 'Nerd Fitness provides a community with free resources',
      desc:
        'First and foremost, our goal with Nerd Fitness is to remove EVERY barrier that keep people like you from changing your life for the better. After struggling to get myself healthy for many years and FINALLY finding some success, I knew I wanted to start helping others like me.I was so sick of infomercials selling useless fitness products, marketers selling dangerous supplements, and people getting discouraged when they didn’t get results from these things. These products are designed to make money for big conglomerates or internet marketers, not to actually help people live better. And based on how elaborate the schemes are to get people to buy their stuff, these companies are making a lot of money. So I set out to change that. In 2008, I purchased the domain NerdFitness.com because I didn’t see anybody helping out people like me: people with desk jobs that love nerd culture, games, books, and movies, but also know they need to make healthier choices in their day to day lives.',

      img:
        'https://www.nerdfitness.com/wp-content/themes/NerdFitness/library/images/logo.gif',
      url: 'https://www.nerdfitness.com/free-resources/'
    },
    {
      _id: 'resource_my-new-roots',
      name: 'My New Roots',
      type: 'resource',
      shortDesc: 'Plant-based diet recipes',
      desc:
        'Since October 2007, this blog has been the place for me to share the edible inspirations from my playtime in the kitchen, and my deep love for whole foods. The recipes and ideas you’ll find here revolve around my plant-based way of eating, and I hope that through the simple and delicious dishes I create, you too will discover a whole new world of flavour and nourishment.',
      url: 'https://www.mynewroots.org/site/about/',
      img:
        'https://www.mynewroots.org/site/wp-content/themes/persand/img/new_header2.jpg'
    },
    {
      _id: 'resource_running-on-real-food',
      name: 'Running on Real Food',
      type: 'resource',
      shortDesc: 'Blog that shares recipes, workout tips, and wellness tips',
      desc:
        'I started this blog in January of 2013 so I could share my experiences in healthy eating and fitness, and to motivate and inspire a healthy lifestyle in others. Running on Real Food is all about using real, whole foods to fuel a healthy, balanced lifestyle.',
      url: 'https://runningonrealfood.com/',
      img: 'https://runningonrealfood.com/wp-content/uploads/2017/11/200.jpg'
    },
    {
      _id: 'resource_iifym',
      name: 'IIFYM',
      type: 'resource',
      shortDesc: 'If it fits your macros diet guide',
      desc:
        'IIFYM revolves around the concept that dieters can eat ANYTHING as long as it fits their prescribed set of macros. This is refreshing for many who are coming from most other dieting trends that are very restrictive.',
      url: 'https://healthyeater.com/iifym-guide',
      img:
        'http://dietuni.com/wp-content/uploads/2013/05/if-it-fits-your-macros-IIFYM-620x350.jpg'
    },
    {
      _id: 'resource_omar-isuf',
      name: 'Omar Isuf',
      type: 'resource',
      shortDesc: 'Youtube channel that has every aspect of fitness',
      desc:
        'Omar Isuf believes in an athletic-asethetic approach to fitness. He wants you to look good while being strong. This youtube channel has endless amount of information regarding nutrition, getting stronger, and improving endurance.',
      url: 'https://www.youtube.com/user/OmarIsuf',
      img:
        'https://cdn.shopify.com/s/files/1/0232/0543/products/GAMEOVER-PURPLE_WEB_large.png?v=1481864121'
    },
    {
      _id: 'resource_mayo-clinic-diet',
      name: 'Mayo Clinic Diet',
      type: 'resource',
      shortDesc: 'Mayo Clinic diet weight loss program',
      desc:
        'The Mayo Clinic diet contains two phases. In Phase 1 the program helps you lose 6-10 pounds in two weeks in a safe and healthy way. Phase 2 will help you continue to lose 1 to 2 pounds a week until your goal is reached. Then you will receive advice on how to maintain your weight loss for life. This is designed to be the last diet you will ever need.',
      url: 'http://diet.mayoclinic.org/diet/home',
      img: 'https://images-na.ssl-images-amazon.com/images/I/61JtXd43KSL.jpg'
    },
    {
      _id: 'resource_bodybuilding',
      name: 'Bodybuilding',
      type: 'resource',
      shortDesc:
        'The most popular site that provides information on all aspects of bodybuilding',
      desc:
        'Bodybuilding.com is one of the most popular sites that provide guidance on fitness in general. They have articles on programs, nutrition, and supplements. They also have a store where they sell their own products along with the most popular brands in the industry. Bodybuilding.com also provides a community within their forums where you can get advice, share your accomplishments, and review the most cutting edge research on fitness.',
      url: 'https://www.bodybuilding.com/',
      img:
        'https://yt3.ggpht.com/a-/AJLlDp2Hy_E964JfeFXdm9ttB5zuaSZohLCodwtReQ=s900-mo-c-c0xffffffff-rj-k-no'
    }
  ])
  .then(result => console.log('Documents successfully uploaded!', result))
  .catch(err => console.log('Error uploading documents', err))
