# React.js State Management Assessment - Coding Tasks

## Overview
This repository contains the completed coding tasks for the React.js State Management Assessment. Below are the tasks that were implemented, demonstrating the key concepts of React and state management.

## Task 1: **State vs. Props** - User Profile Card
- **Objective**: Create a comparison between state and props.
- **Implementation**:
  - **Props** are used to pass user data (e.g., name, email).
  - **State** is used to toggle a "Show Details" button to expand/collapse the card.
- **File**: `UserProfileCard.js`

## Task 2: **Using useState for Local State Management** - Counter App
- **Objective**: Build a counter app with increment, decrement, and reset buttons.
- **Implementation**: 
  - Used the `useState` hook to manage and update the count.
- **File**: `CounterApp.js`

## Task 3: **Controlled Components with Forms** - Controlled Form
- **Objective**: Build a controlled form that includes input fields for Name and Email, with a Submit button.
- **Implementation**: 
  - Managed input values with state and logged the entered data on form submission.
- **File**: `ControlledForm.js`

## Task 4: **Lifting State Up** - Parent and Child Components
- **Objective**: Lift state from two child components to a parent component.
- **Implementation**:
  - Child A: Input field to enter a message.
  - Child B: Displays the message entered in Child A.
- **File**: `ParentComponent.js`, `ChildA.js`, `ChildB.js`

## Task 5: **Introduction to useReducer Hook** - Refactor Counter App
- **Objective**: Refactor the counter app to use the `useReducer` hook instead of `useState`.
- **Implementation**: 
  - Used `useReducer` to handle state changes for increment, decrement, and reset actions.
- **File**: `CounterAppWithReducer.js`

## Task 6: **Global State Management with Context API** - Theme Toggle App
- **Objective**: Build a Theme Toggle App using the Context API to switch between Light Mode and Dark Mode.
- **Implementation**: 
  - Used the Context API to manage the theme state globally.
- **File**: `ThemeContext.js`, `ThemeToggleApp.js`

## Task 7: **Real-World Application** - Todo List App
- **Objective**: Build a Todo List Application with the ability to add, mark as completed, and delete tasks.
- **Implementation**: 
  - Used `useState` to manage the tasks array and render the list dynamically.
  - **Bonus**: Implemented a filter to show All, Completed, or Pending tasks.
- **File**: `TodoListApp.js`

## Task 8: **State Persistence with localStorage** - Todo List App Persistence
- **Objective**: Enhance the Todo List App to save tasks in `localStorage` so the list persists after page reload.
- **Implementation**:
  - Used `localStorage` to persist the task list and synchronize it with React state.
- **File**: `TodoListAppWithPersistence.js`

## Files Overview
- All the task files are located in the `/src` directory.
- Each file contains the required implementation of state management using React concepts like `useState`, `useReducer`, `Context API`, and `localStorage`.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Boy2700/react-test.git
Navigate into the project directory:

bash
Copy code
cd react-test
Install the required dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm start
This will start the app and open it in your browser at http://localhost:3000.
   
