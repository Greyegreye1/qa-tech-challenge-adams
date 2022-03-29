# Eezy QA Tech Challenge-Adams

## :computer: Prerequisites

The successful completion of this take-home challenge will require the following accounts/tools.

1. You will need a Github account
1. You will need access to the command line for your computer.
1. You will need to [have Git installed](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) on your computer.
1. You will need a code editor - a great option is [Visual Studio Code](https://code.visualstudio.com/).

## :construction: Getting Started

1. Begin by forking this repository into your own Github account.
1. Clone the repository into a local working directory.
1. Create a new branch that contains all your changes. The branch name should be in the format of `challenge_{yourlastname}`
1. Within the project directory, install the required files by running `npm install`.

Congratulations! You're now ready to begin the challenges.

## :notebook_with_decorative_cover: Resources

- [Cypress Documentation](https://docs.cypress.io/)

## :muscle: Challenges

Today you'll be helping a fellow QA engineer fix up their automated Cypress tests for our graphics Editor application. They have been struggling because each time the developers release new code it seems to break the automated tests. They're also unsure of how to fix some of the trickier user interactions. Your mission (should you choose to accept it) is to demonstrate what modifications should be made to improve the test suite.

> :star: Explore the included `package.json` file for shortcut commands you can use to open the Cypress Test Runner.

### Challenge #1 - Project name element changes frequently

When a user of the Editor application opens a new design, their project is named "Untitled Design". This is reflected in the header of the application. Our automated test properly checks that it contains this correct name and the test passes. However, when developers release new code the CSS class names seem to change forcing us to update our automated tests.

Update the code for this test by identifying a DOM selector that you believe will more reliably reference the project name.

![Screenshot of the Project Rename Header](/docs/screenshots/project-rename-header.png?raw=true "Project Rename Header")

### Challenge #2 - A failing assertion

Each user of the Editor application has the option to rename their projects. To kick off the renaming process, they click the project's name (by default it's "Untitled Design") in the application's header area to launch a renaming modal.

We want to check that this renaming modal contains the right headline. When we check it manually it is correct, but the automated test is failing. Determine why and update your code accordingly.

### Challenge #3 - Modal should dismiss when cancel button clicked

In the previous challenge you were exposed to the project renaming modal. The modal contains two buttons, a "Save" button and a "Cancel" button. We need an automated test that will ensure the modal is closed when the user clicks the "Cancel" button.

In the code you will find a test that is already stubbed out for you. Write your test and ensure it runs as part of the entire spec.

![Screenshot of the Project Rename Modal](/docs/screenshots/project-rename-modal.png?raw=true "Project Rename Modal")

### Challenge #4 - Modal should dismiss whenever it's clicked outside of

In challenge #3 you dismissed the project renaming modal. However, there's still one other way that users expect to be able to dismiss it - that's by clicking the area outside the modal itself.

In the code you will find another test that is already stubbed out for you. Write your test and ensure it runs as part of the entire spec.

## :sparkles: Bonus Challenges (optional) :sparkles:

There's no expectation that you complete any of the challenges below. However, if you'd like to show off your skills further, here are some ideas for tests.

### Bonus Challenge #1 - Project rename form field

Write a test for the form input field that is used to rename the project. The field should be pre-filled with the current project name, and it should be able to be typed into. Are there any other tests that you'd want to include related to that specific field?

### Bonus Challenge #2 - Editor sidebar panels

Along the left hand side of the Editor application there are several icons that allow the user to access different features. Write a test that checks that each panel has an icon, has the correct name and is in the expected order. The correct order and names are:

1. Templates
1. Text
1. Photos
1. Graphics
1. Background
1. Resize

### Bonus Challenge #3 - Editor photos search results

Along the left hand side of the Editor application you will find the "Photos" panel. This panel allows users to find a photo and add it to their design. Write a test that searches for the keyword `dog` and asserts that at least one photo was displayed. Write a test that searches for a random string and asserts that no photos were displayed.

## :mailbox: Submitting Your Tech Challenge

1. Create a pull request against [the base repository's](https://github.com/eezyinc/qa-tech-challenge) `master` branch.
1. Use the Github pull request description to describe or clarify anything you'd like us to know about your approach.
1. If there are any merge conflicts, be sure to resolve them.
1. Send an email to `pdowner+qachallenge@eezy.com` with the subject line `QA Tech Challenge complete` letting me know you're ready for review!
