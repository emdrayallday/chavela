# User Stories

map over array and push to same array depending on answers from questionnaire

As a _[role]_, I can _[feature]_ so that _[reason]_.

## Home

As a user, I want to view a slideshow of motivational posters and view how many points I have while also viewing my next incentive so that I can stay motivated in completing my goals.

## View Categories

As a user, I want to view the categories of goals which are organized by estimated time completion so that I can view my goals based on how long they are estimated to take.

**ex**

Daily, Weekly, Monthly, Yearly

## Track Progress

As a user, I want to track my progress for a specific goal so that I can earn points and stay motivated.

**ex**

If losing 10lbs is a monthly goal, track amount of lbs lost and show % completed

## Earn Points

As a user, I want to earn points when completing tasks so that I can reap the rewards.

## Earn rewards

As a user, I want to unlock a reward when I receive enough points from completing goals so I can brag about completing a goal.

**ex**

get notified when you have earned enough points. (if enough time be able to post to instagram or facebook)

## View Category

As a user, view goals for a certain category in order by time left of goal so that I can prioritize which goals the user works on.

## Show Badge

As a user, when I view the tabs for the categories show how many goals as a badge over the correct category so I know.

## Show details of a goal with Expansion Panel

As a user, when I click on a goal it will show the details of the goal and have a button so that I can see a quick list of details and if needed view the single goal and check off progress.

## View Single goal

As a user, when viewing a goal be able to check off details of a goal so I can track progress.

## Complete a goal

As a user, check off a goal that's completed so It will be removed from the list.

## Dialog for completing goals

As a user, when completing a goal a dialog will pop up congratulating you and asking if you want to post to a social media site so a user can get peer support.

**\*\*\*\***\*\***\*\*\*\*** NOT SURE **\*\*\*\***\*\*\*\***\*\*\*\***

## Home

As a visitor, I want to create an account so that I can complete the challenge. Be able to login with Facebook. unless it costs money :(

* https://developers.facebook.com/docs/facebook-login/web

As a user, I want to view an elevator pitch of the app so I understand what the app is for.

## View challenge

As a user, I want to view the challenge so that I can see what needs to be completed.

## View tasks

As a user, I want to view the daily tasks so that I can keep track of what I have and have not completed.

## Challenge a friend

As a user, I want to send a request to a friend challenging him so that he will be notified of the challenge.

## Start challenge

As a user, I want to start the challenge so that I can begin tracking my tasks that need to be completed.

## Track daily tasks

As a user, I want to view my daily tasks so that I can check off completed tasks and view tasks that are not completed.

## View Resources

As a user, I want to be able to see a list of resources that will provide information on how to complete the challenge (stay focused, form new habits, workout tutorials, nutrition guides, etc.) so that I can be guided on how to complete certain tasks and they entire challenge.

## View Resource

As a user I want to view a specific resource so that I can see what its information.

## Search resources

As a user I want to search for a specific resource so I don't have to search through all of them.

## Send Message

As a challenger I want to send the user messages so that I can motivate them.

---

---

---

# Fit Goal

<Elevator pitch describing business pain and relief>

Losing fat is hard. As a beginner, you've made the decision to get in shape but now you have no idea where to start. Should you join a gym? start running 5 miles a day? change your diet? or all of the above. Chavela solves this problem by providing a challenge just for you to follow. This solves the problem of not knowing what to do as a beginner. As long as you stick to the challenge you will see results.

## User Stories

## Display Home

As someone who needs to get fit, I desire the ability to educate myself on the purpose of this application and how it can be used as a tool to help me get fit. I would like to see a brief description and an obvious call to action (CTA) named

"Let's define your goal" or "Get Started" or "Let's get stared!"

## goal wizard - Goal category

As a newcomer, I would like my advisor to ask me a series of question to help me determine by fitness goal.

"Do you want lose weight?"

???"Do you want to run a 5 k?"
"Do you want to get stronger?"

## goal wizard - Define lose weight goal

How much do you want to lose? 5 lbs, 10 lbs, 15lbs, 20lbs.
How quickly do you want to lose the weight? 3 month, 4 months.

What is your preference? Diet or Exercise or both?

If diet,
If Exercise,
If both,

## goal wizard - Provide goal title / name

As a newbie, I desire the ability to name my goal so that I can quickly look up my goal and view my tasks. See **View Task List**.

Examples: Weight loss, Run 10k, Run 5k, Get Stronger, Cardio

# View Goals

Each goal would have a series of tasks (task list). Example of a goal would be "Lose 10 pounds".

## View All Tasks

## View Today's Task List

## View Today Page

As a user who has already been through the goal wizard, I desire the ability to view 2 things:

* **View Today's Task List** - Today's task list for items that have not been completed when I wake up every morning. For each task, I would to see the following info:

  * Task Name
  * Completed Checkbox

* See **View Goal Tracker**

Clicking on a task, should display the **View Task Details** page.
Clicking on the complete checkbox would mark the item as complete. See ** Complete Task**.

### View Goal Tracker

As a user, I desire the ability to view the following bar charts to track my progress on the number of tasks completed for a specific goal. Display the following bar charts:

* Today
* Week
* Month
* Total

## View Task Detail

As a user, I wish to know more about a given task so that I can educate myself on what it takes to complete the task. Display the following information:

* Task name
* Task Desc
* Resources
* Due date
* completed checkbox

## Complete Task

When do you

## Track Progress

As a user, I desire the ability to

### User Story 1Notes

## Models/Data

### Task Item

```json
{
  "_id": "task_run-1-mile",
  "name": "Run 1 mile",
  "desc": "",
  "frequency": "Daily",
  "tags": ["running", "weight loss", "cardio", "endurance"],
  "desc": "Blah, blah",
  "resources": [
    {
      "name": "Drinking Water Is Good",
      "url": "https://whatevs.com/water-is-good"
    }
  ]
}
```

### Plan

```json
{
  "_id": "plan_trip_ottinger_lose10Pounds",
  "name": "Lose 10 lbs",
  "userName": "Trip Ottinger",
  "taskSchedule": [
    {
      "taskID": "task_run-1-mile",
      "name": "Run 1 mile",
      "frequency": "daily",
      "dueDate": "2018-02-27",
      "completed": false
    },
    {
      "taskID": "task_run-1-mile",
      "name": "Run 1 mile",
      "frequency": "daily",
      "dueDate": "2018-02-28",
      "completed": false
    },
    {
      "taskID": "task_drink-water-8oz",
      "name": "Drink Water 8 oz",
      "frequency": "daily",
      "dueDate": "2018-02-28 12:00:00",
      "completed": false
    },
    {
      "taskID": "task_walk-stairs",
      "name": "Walk Stairs",
      "frequency": "daily",
      "dueDate": "2018-02-28 14:00:00",
      "completed": false
    }
  ]
}
```

## Wireframes

## To Do

* Create first time user home page wireframe
* Create questionnaire
* Create View Goals list wireframe.
* Create View Today Page wireframe.
* Create View Task List wireframe.
* Create View Task Detail wireframe.
* Begin creating **load-data.js** within your api project.
