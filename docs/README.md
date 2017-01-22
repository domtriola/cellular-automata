# Cyclic Cellular Automata

## Background

[Cellular Automata](https://en.wikipedia.org/wiki/Cellular_automaton) are models that simulate discrete mathematical concepts applied to a grid of cells. Each cell has a state, and each step of the program compares cells' states relative to each other in order to determine the next state for each cell.

[Cyclic Cellular Automata](https://en.wikipedia.org/wiki/Cyclic_cellular_automaton) simulate a "Rock, Paper, Scissors" form of neighbor mutation. If a cell has a lower value than a neighboring cell, then it will adopt its neighbor's value. But if a cell with the lowest possible value is next to a cell with the highest possible value, then the higher cell's value will become the lower cell's value, thus enabling the cyclic pattern. Changing the number of possible states, and including a threshold value that cells must hit before changing state are ways to increase variety of patterns produced.

## Functionality & MVP

This model will allow users to:

[ ] Start and stop the simulation
[ ] View the simulation starting from a randomly populated grid
[ ] Select and change model configurations (# of states, threshold value, colors for each state)

The project will also have:

[ ] Documentation
[ ] A production README

## Wireframes



## Architecture & Technologies

### Technologies:

* Vanilla [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) will handle all of the simulation logic.
* [React](https://facebook.github.io/react/) will setup the controls for the user interface
* The simulation will be rendered on a [HTML5 Canvas](http://www.w3schools.com/html/html5_canvas.asp).
* [Webpack](https://webpack.github.io/) will bundle all of the scripts, and [Babel](https://babeljs.io/) will transpile ES6 to ES5.

### Components

* `cell.js`: A single cell, has integer values for current state, and next state
* `grid.js`: Stores the grid of cells as a hash
* `cyclic-automata.js`: Root file, handles simulation logic. Each step it checks each cell's neighbors, then performs necessary changes and re-renders grid.

## Implementation Timeline

### Grid setup - 1 Day
* Configure webpack
* Create cell class
* Create grid class
* Create canvas and test rendering of cells

### Logic - 1 Day
* Setup random initial grid state
* Setup neighbor-checking
* Implement cyclic state changes on each step

### User Interaction - 2 Days
* Allow user to start and stop simulation
* Allow user to choose the colors that correspond with cell states
* Allow user to change model parameters
* Implement bonus features if time allows

## Bonus Features
[ ] Allow user to manually paint starting configurations
[ ] Incorporate other automata simulations like Conway's Game of Life, or Langton's Ant
