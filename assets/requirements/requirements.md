# 05 Third-Party APIs: Work Day Scheduler

## Your Task

Create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

You'll need to use the [Moment.js](https://momentjs.com/) library to work with date and time. Be sure to read the documentation carefully and concentrate on using Moment.js in the browser.

## User Story

```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
W̶H̶E̶N̶ I̶ o̶p̶e̶n̶ t̶h̶e̶ p̶l̶a̶n̶n̶e̶r̶
T̶H̶E̶N̶ t̶h̶e̶ c̶u̶r̶r̶e̶n̶t̶ d̶a̶y̶ i̶s̶ d̶i̶s̶p̶l̶a̶y̶e̶d̶ a̶t̶ t̶h̶e̶ t̶o̶p̶ o̶f̶ t̶h̶e̶ c̶a̶l̶e̶n̶d̶a̶r̶
W̶H̶E̶N̶ I̶ s̶c̶r̶o̶l̶l̶ d̶o̶w̶n̶
T̶H̶E̶N̶ I̶ a̶m̶ p̶r̶e̶s̶e̶n̶t̶e̶d̶ w̶i̶t̶h̶ t̶i̶m̶e̶b̶l̶o̶c̶k̶s̶ f̶o̶r̶ s̶t̶a̶n̶d̶a̶r̶d̶ b̶u̶s̶i̶n̶e̶s̶s̶ h̶o̶u̶r̶s̶
W̶H̶E̶N̶ I̶ v̶i̶e̶w̶ t̶h̶e̶ t̶i̶m̶e̶b̶l̶o̶c̶k̶s̶ f̶o̶r̶ t̶h̶a̶t̶ d̶a̶y̶
T̶H̶E̶N̶ e̶a̶c̶h̶ t̶i̶m̶e̶b̶l̶o̶c̶k̶ i̶s̶ c̶o̶l̶o̶r̶ c̶o̶d̶e̶d̶ t̶o̶ i̶n̶d̶i̶c̶a̶t̶e̶ w̶h̶e̶t̶h̶e̶r̶ i̶t̶ i̶s̶ i̶n̶ t̶h̶e̶ p̶a̶s̶t̶,̶ p̶r̶e̶s̶e̶n̶t̶,̶ o̶r̶ f̶u̶t̶u̶r̶e̶
W̶H̶E̶N̶ I̶ c̶l̶i̶c̶k̶ i̶n̶t̶o̶ a̶ t̶i̶m̶e̶b̶l̶o̶c̶k̶
T̶H̶E̶N̶ I̶ c̶a̶n̶ e̶n̶t̶e̶r̶ a̶n̶ e̶v̶e̶n̶t̶
W̶H̶E̶N̶ I̶ c̶l̶i̶c̶k̶ t̶h̶e̶ s̶a̶v̶e̶ b̶u̶t̶t̶o̶n̶ f̶o̶r̶ t̶h̶a̶t̶ t̶i̶m̶e̶b̶l̶o̶c̶k̶
T̶H̶E̶N̶ t̶h̶e̶ t̶e̶x̶t̶ f̶o̶r̶ t̶h̶a̶t̶ e̶v̶e̶n̶t̶ i̶s̶ s̶a̶v̶e̶d̶ i̶n̶ l̶o̶c̶a̶l̶ s̶t̶o̶r̶a̶g̶e̶
W̶H̶E̶N̶ I̶ r̶e̶f̶r̶e̶s̶h̶ t̶h̶e̶ p̶a̶g̶e̶
T̶H̶E̶N̶ t̶h̶e̶ s̶a̶v̶e̶d̶ e̶v̶e̶n̶t̶s̶ p̶e̶r̶s̶i̶s̶t̶
```

The following animation demonstrates the application functionality:

![A user clicks on slots on the color-coded calendar and edits the events.](./Assets/05-third-party-apis-homework-demo.gif)


## Grading Requirements

This homework is graded based on the following criteria: 

### Technical Acceptance Criteria: 40%

* Satisfies all of the above acceptance criteria plus the following:

  * U̶s̶e̶s̶ a̶ d̶a̶t̶e̶ u̶t̶i̶l̶i̶t̶y̶ l̶i̶b̶r̶a̶r̶y̶ t̶o̶ w̶o̶r̶k̶ w̶i̶t̶h̶ d̶a̶t̶e̶ a̶n̶d̶ t̶i̶m̶e̶

### Deployment: 32%

* A̶p̶p̶l̶i̶c̶a̶t̶i̶o̶n̶ d̶e̶p̶l̶o̶y̶e̶d̶ a̶t̶ l̶i̶v̶e̶ U̶R̶L̶

* A̶p̶p̶l̶i̶c̶a̶t̶i̶o̶n̶ l̶o̶a̶d̶s̶ w̶i̶t̶h̶ n̶o̶ e̶r̶r̶o̶r̶s̶

* A̶p̶p̶l̶i̶c̶a̶t̶i̶o̶n̶ G̶i̶t̶H̶u̶b̶ U̶R̶L̶ s̶u̶b̶m̶i̶t̶t̶e̶d̶

* G̶i̶t̶H̶u̶b̶ r̶e̶p̶o̶ c̶o̶n̶t̶a̶i̶n̶s̶ a̶p̶p̶l̶i̶c̶a̶t̶i̶o̶n̶ c̶o̶d̶e̶

### Application Quality: 15%

* A̶p̶p̶l̶i̶c̶a̶t̶i̶o̶n̶ u̶s̶e̶r̶ e̶x̶p̶e̶r̶i̶e̶n̶c̶e̶ i̶s̶ i̶n̶t̶u̶i̶t̶i̶v̶e̶ a̶n̶d̶ e̶a̶s̶y̶ t̶o̶ n̶a̶v̶i̶g̶a̶t̶e̶

* A̶p̶p̶l̶i̶c̶a̶t̶i̶o̶n̶ u̶s̶e̶r̶ i̶n̶t̶e̶r̶f̶a̶c̶e̶ s̶t̶y̶l̶e̶ i̶s̶ c̶l̶e̶a̶n̶ a̶n̶d̶ p̶o̶l̶i̶s̶h̶e̶d̶

* A̶p̶p̶l̶i̶c̶a̶t̶i̶o̶n̶ r̶e̶s̶e̶m̶b̶l̶e̶s̶ t̶h̶e̶ m̶o̶c̶k̶-̶u̶p̶ f̶u̶n̶c̶t̶i̶o̶n̶a̶l̶i̶t̶y̶ p̶r̶o̶v̶i̶d̶e̶d̶ i̶n̶ t̶h̶e̶ h̶o̶m̶e̶w̶o̶r̶k̶ i̶n̶s̶t̶r̶u̶c̶t̶i̶o̶n̶s̶

### Repository Quality: 13%

* R̶e̶p̶o̶s̶i̶t̶o̶r̶y̶ h̶a̶s̶ a̶ u̶n̶i̶q̶u̶e̶ n̶a̶m̶e̶

* R̶e̶p̶o̶s̶i̶t̶o̶r̶y̶ f̶o̶l̶l̶o̶w̶s̶ b̶e̶s̶t̶ p̶r̶a̶c̶t̶i̶c̶e̶s̶ f̶o̶r̶ f̶i̶l̶e̶ s̶t̶r̶u̶c̶t̶u̶r̶e̶ a̶n̶d̶ n̶a̶m̶i̶n̶g̶ c̶o̶n̶v̶e̶n̶t̶i̶o̶n̶s̶

* R̶e̶p̶o̶s̶i̶t̶o̶r̶y̶ f̶o̶l̶l̶o̶w̶s̶ b̶e̶s̶t̶ p̶r̶a̶c̶t̶i̶c̶e̶s̶ f̶o̶r̶ c̶l̶a̶s̶s̶/̶i̶d̶ n̶a̶m̶i̶n̶g̶ c̶o̶n̶v̶e̶n̶t̶i̶o̶n̶s̶,̶ i̶n̶d̶e̶n̶t̶a̶t̶i̶o̶n̶,̶ q̶u̶a̶l̶i̶t̶y̶ c̶o̶m̶m̶e̶n̶t̶s̶,̶ e̶t̶c̶.̶

* R̶e̶p̶o̶s̶i̶t̶o̶r̶y̶ c̶o̶n̶t̶a̶i̶n̶s̶ m̶u̶l̶t̶i̶p̶l̶e̶ d̶e̶s̶c̶r̶i̶p̶t̶i̶v̶e̶ c̶o̶m̶m̶i̶t̶ m̶e̶s̶s̶a̶g̶e̶s̶

* Repository contains quality README file with description, screenshot, and link to deployed application

## Review

You are required to submit the following for review:

* The URL of the deployed application

* The URL of the GitHub repository, with a unique name and a README describing the project

- - -
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
